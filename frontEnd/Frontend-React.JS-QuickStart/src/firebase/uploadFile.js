import { storage } from "./configFirebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import axios from "axios";

// export const uploadFileToFirebase = async (path, file) => {
//     let downloadURL = 'no-image';
//     let storageRef = ref(storage, `${path}/${file.name}`);
//     await uploadBytesResumable(storageRef, file);
//     downloadURL = await getDownloadURL(ref(storage, `${path}/${file.name}`));
//     return downloadURL;
// };

export const uploadFileToFirebase = async (images) => {
  try {
    const response = await axios({
      method: "post",
      url: `https://api.cloudinary.com/v1_1/dx3nwkh2i/image/upload/`,
      data: images,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const uploadMultiFileToFirebase = async (arrFiles) => {
  let listFile = {};
  await Promise.all(
    arrFiles.map(async (item) => {
      let storageRef = ref(storage, `${item.path}/${item.file.name}`);
      await uploadBytesResumable(storageRef, item.file);
      let downloadURL = await getDownloadURL(
        ref(storage, `${item.path}/${item.file.name}`)
      );
      listFile[item.name] = downloadURL;
    })
  );
  return listFile;
};
