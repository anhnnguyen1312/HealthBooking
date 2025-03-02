import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { LANGUAGES, PATH_FIREBASE } from "../../../utils";
import { FaFileUpload } from "react-icons/fa";
import { postDetailClinicServices } from "../../../services/userService";
import { toast } from "react-toastify";
import "./ManageClinic.scss";
import CKeditor from "../../../components/CKeditor/CKeditor";
import { uploadFileToFirebase } from "../../../firebase/uploadFile";
import * as actions from "../../../store/actions";

import { uploadMultiFileToFirebase } from "../../../firebase/uploadFile";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalClinic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Save to markdown table
      descriptionHtml: "",
      descriptionMarkdown: "",
      imageClinic: "",
      imageLogo: "",
      nameClinic: "",
      addressClinic: "",
      previewImageClinicUrl: "",
      previewImageLogoUrl: "",
      contentHtml: "",

      files: [],
      fileURL: "",

      isShowBoxImageClinic: false,
      isShowBoxImageLogo: false,
    };
  }
  componentDidMount() {}
  componentDidUpdate() {}

  toggle = () => {
    this.props.toggleModel();
  };
  handleOnchangeImage = async (e, image, previewImageUrl, isShowBoxImage) => {
    let data = e.target.files;
    let file = data[0];
    if (file) {
      let objectUrl = URL.createObjectURL(file);
      this.setState({
        [previewImageUrl]: objectUrl,
        [isShowBoxImage]: true,
        [image]: file,
      });
    }
  };

  buildInputSelectName = (data) => {
    let result = [];
    if (data && data.length > 0) {
      result = data.map((item, index) => {
        let object = {};
        let labelVi = `${item.firstName} ${item.lastName}`;
        let labelEn = `${item.lastName} ${item.firstName}`;
        object.label =
          this.props.languageRedux === LANGUAGES.VI ? labelVi : labelEn;
        object.value = item.id;
        return object;
      });
    }
    return result;
  };
  buildInputSelect = (data, type) => {
    let result = [];
    if (data && data.length > 0) {
      result = data.map((item, index) => {
        let object = {};
        if (type === "currency") {
          object.label =
            this.props.languageRedux === LANGUAGES.VI
              ? `${item.valueVi} VND`
              : `${item.valueEn} $`;
        } else {
          object.label =
            this.props.languageRedux === LANGUAGES.VI
              ? item.valueVi
              : item.valueEn;
        }
        object.value = item.keyMap;
        return object;
      });
    }
    return result;
  };

  findValueDefault = (key, data) => {
    let result = "";
    if (key && data) {
      result = data.find((item) => item && item.value === key);
      return result;
    }
    return result;
  };

  handleEditorChange = ({ html, text }) => {
    this.setState({
      descriptionHtml: html,
      descriptionMarkdown: text,
    });
  };
  setStateFile = (item) => {
    this.setState({
      files: [...this.state.files, item],
    });
  };

  handleClickSave = async () => {
    let { imageClinic, imageLogo } = this.state;
    const images = [{ file: imageClinic }, { file: imageLogo }];
    // let arrFiles = [
    //   {
    //     path: PATH_FIREBASE.CLINIC_IMAGE,
    //     file: imageClinic,
    //     name: "imageClinic",
    //   },
    //   { path: PATH_FIREBASE.CLINIC_LOGO, file: imageLogo, name: "imageLogo" },
    // ]; images[index][imageURL] =

    // let images = await uploadMultiFileToFirebase(arrFiles);
    console.log("imageClinic", imageClinic);
    console.log("imageLogo", imageLogo);
    let dataImages = new FormData();
    for (let index = 0; index < 2; index++) {
      dataImages.append("file", images[index]["file"]);
      dataImages.append("upload_preset", "ml_default");

      try {
        const response = await uploadFileToFirebase(dataImages);
        if (response.status === 200)
          images[index]["imageURL"] = response.data?.secure_url;
        //images = [...images, response.data?.secure_url];
        console.log(images);
      } catch (error) {
        this.props.handleHideLoading();
      }
    }
    this.handleSave(images);
  };

  handleSave = async (images) => {
    let { descriptionMarkdown, nameClinic, addressClinic, contentHtml } =
      this.state;
    this.props.handleShowLoading();
    let response = await postDetailClinicServices({
      description: contentHtml,
      image: images[0]["imageURL"],
      //imageClinic: images[0]["imageURL"],
      imageLogo: images[1]["imageURL"],
      name: nameClinic,
      address: addressClinic,
    });
    console.log("response", response);
    if (response && response?.data?.errCode === 0) {
      toast.success(response.message || "Thêm phòng khám thành công ", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      this.setState({
        descriptionHtml: "",
        descriptionMarkdown: "",
        imageClinic: "",
        imageLogo: "",
        nameClinic: "",
        addressClinic: "",
        previewImageClinicUrl: "",
        previewImageLogoUrl: "",

        files: [],
        fileURL: "",

        isShowBoxImageClinic: false,
        isShowBoxImageLogo: false,
      });
      this.props.toggleModel();
      this.props.reloadData();
    } else {
      toast.error(response.message || "Thêm phòng khám không thành công ", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    this.props.handleHideLoading();
    this.props.getAllClinicRedux();
  };

  onChangeInput = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  handleEditorChange = (data) => {
    this.setState({
      contentHtml: data,
    });
  };

  render() {
    let {
      isChange,

      nameClinic,
      addressClinic,
      previewImageClinicUrl,
      previewImageLogoUrl,

      isShowBoxImageClinic,
      isShowBoxImageLogo,
    } = this.state;
    return (
      <>
        <Modal
          className="modal-user-container"
          isOpen={this.props.isOpenModel}
          toggle={() => this.toggle()}
          size="lg"
          centered={true}
        >
          <ModalHeader toggle={() => this.toggle()}>
            Thêm mới phòng khám
          </ModalHeader>
          <ModalBody>
            <div className="specialty-container">
              <div className="specialty-title">
                <h3>Quản lý cơ sở khám bệnh</h3>
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label forhtml="inputEmail4">
                    {/* <FormattedMessage id="admin.manage-doctor.name-clinic" /> */}
                    Tên cơ sở
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    value={nameClinic}
                    onChange={(e) =>
                      this.onChangeInput("nameClinic", e.target.value)
                    }
                  />
                </div>
                <div className="form-group col-md-4 upload-file-container">
                  <label forhtml="inputEmail4">
                    {/* <FormattedMessage id="admin.manage-doctor.name-clinic" /> */}
                    Upload clinic
                  </label>
                  <div className="btn-container">
                    <input
                      id="uploadFileClinic"
                      type="file"
                      className="form-control"
                      hidden
                      onChange={(e) =>
                        this.handleOnchangeImage(
                          e,
                          "imageClinic",
                          "previewImageClinicUrl",
                          `isShowBoxImageClinic`
                        )
                      }
                    />
                    <label className="text-upload" htmlFor="uploadFileClinic">
                      <FormattedMessage id="manage-user.uploadImage" />
                      <FaFileUpload className="icon-upload" />
                    </label>
                    {isShowBoxImageClinic && (
                      <div
                        className="preview-clinic preview-right"
                        style={{
                          backgroundImage: `url(${previewImageClinicUrl})`,
                        }}
                      ></div>
                    )}
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label forhtml="inputEmail4">
                    {/* <FormattedMessage id="admin.manage-doctor.name-clinic" /> */}
                    Địa chỉ cơ sở
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    value={addressClinic}
                    onChange={(e) =>
                      this.onChangeInput("addressClinic", e.target.value)
                    }
                  />
                </div>
                <div className="form-group col-md-4 upload-file-container">
                  <label forhtml="inputEmail4">
                    {/* <FormattedMessage id="admin.manage-doctor.name-clinic" /> */}
                    Upload logo
                  </label>
                  <div className="btn-container">
                    <input
                      id="uploadFileLogo"
                      type="file"
                      className="form-control"
                      hidden
                      onChange={(e) =>
                        this.handleOnchangeImage(
                          e,
                          "imageLogo",
                          "previewImageLogoUrl",
                          `isShowBoxImageLogo`
                        )
                      }
                    />
                    <label className="text-upload" htmlFor="uploadFileLogo">
                      <FormattedMessage id="manage-user.uploadImage" />
                      <FaFileUpload className="icon-upload" />
                    </label>
                    {isShowBoxImageLogo && (
                      <div
                        className="preview-logo preview-right"
                        style={{
                          backgroundImage: `url(${previewImageLogoUrl})`,
                        }}
                      ></div>
                    )}
                  </div>
                </div>
              </div>

              <div className="specialty-editor">
                <label className="title-editor">
                  {/* <FormattedMessage id="admin.manage-doctor.detail-doctor" /> */}
                  Detail specialty
                </label>
                <CKeditor
                  handleEditorChange={this.handleEditorChange}
                  value={this.state.contentHtml}
                />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <div className="btn-save">
              {isChange ? (
                <button
                  className="btn btn-warning flex-end"
                  onClick={() => {
                    this.handleClickSave();
                  }}
                >
                  <FormattedMessage id="admin.manage-doctor.change" />
                </button>
              ) : (
                <button
                  className="btn btn-primary flex-end"
                  onClick={() => {
                    this.handleClickSave();
                  }}
                >
                  <FormattedMessage id="admin.manage-doctor.save" />
                </button>
              )}
            </div>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    languageRedux: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllClinicRedux: () => dispatch(actions.getAllClinicRedux()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalClinic);
