import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { LANGUAGES, PATH_FIREBASE } from "../../../utils";
import { FaFileUpload } from "react-icons/fa";
import { postDetailClinicServices } from "../../../services/userService";
import { toast } from "react-toastify";
import "./ManageBlog.scss";
import CKeditor from "../../../components/CKeditor/CKeditor";
import { uploadFileToFirebase } from "../../../firebase/uploadFile";
import * as actions from "../../../store/actions";

import { uploadMultiFileToFirebase } from "../../../firebase/uploadFile";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { postBlogByIdServices } from "../../../services/patientServices";

class ModalBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Save to markdown table
      contentHTML: "",
      contentMarkdown: "",
      shortDescription: "",
      UserId: "",
      statusId: "",
      tittle: "",
      imageLogo: "",
      previewImageLogoUrl: "",
      isShowBoxImageLogo: false,
    };
  }
  componentDidMount() {}
  componentDidUpdate() {}

  toggle = () => {
    this.props.toggleModel();
  };

  handleEditorChange = (content) => {
    console.log(" html, text", content);
    this.setState({
      contentHTML: content,
      contentMarkdown: content,
    });
  };
  setStateFile = (item) => {
    this.setState({
      files: [...this.state.files, item],
    });
  };
  handleClickSave = async () => {
    let { imageLogo } = this.state;
    //const images = [{ file: imageClinic }, { file: imageLogo }];
    // let arrFiles = [
    //   {
    //     path: PATH_FIREBASE.CLINIC_IMAGE,
    //     file: imageClinic,
    //     name: "imageClinic",
    //   },
    //   { path: PATH_FIREBASE.CLINIC_LOGO, file: imageLogo, name: "imageLogo" },
    // ]; images[index][imageURL] =

    // let images = await uploadMultiFileToFirebase(arrFiles);
    //console.log("imageClinic", imageClinic);
    console.log("imageLogo", imageLogo);
    let images = "";
    let dataImages = new FormData();
    dataImages.append("file", imageLogo);
    dataImages.append("upload_preset", "ml_default");
    try {
      const response = await uploadFileToFirebase(dataImages);
      if (response.status === 200) {
        images = response.data?.secure_url;
      }
      //images = [...images, response.data?.secure_url];
      //console.log(response);
    } catch (error) {
      this.props.handleHideLoading();
    }
    // for (let index = 0; index < 2; index++) {
    //   dataImages.append("file", images[index]["file"]);
    //   dataImages.append("upload_preset", "ml_default");

    //   try {
    //     const response = await uploadFileToFirebase(dataImages);
    //     if (response.status === 200)
    //       images[index]["imageURL"] = response.data?.secure_url;
    //     //images = [...images, response.data?.secure_url];
    //     console.log(images);
    //   } catch (error) {
    //     this.props.handleHideLoading();
    //   }
    // }
    this.handleSave(images);
  };
  handleSave = async (images) => {
    let { contentMarkdown, statusId, shortDescription, contentHTML, tittle } =
      this.state;
    this.props.handleShowLoading();
    let response = await postBlogByIdServices({
      contentMarkdown: contentMarkdown,
      imageLogo: images,
      statusId: statusId,
      shortDescription: shortDescription,
      contentHTML: contentHTML,
      tittle: tittle,
      userId: this.props.userInfo.id,
    });
    console.log("data", {
      contentMarkdown: contentMarkdown,

      statusId: statusId,
      shortDescription: shortDescription,
      contentHTML: contentHTML,
      tittle: tittle,
      userId: this.props.userInfo.id,
    });
    if (response && response?.data?.errCode === 0) {
      toast.success(response.message || "Thêm bài viết thành công ", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      this.setState({
        contentMarkdown: "",
        contentHTML: "",
        shortDescription: "",
        statusId: "",
        tittle: "",
      });
      this.props.toggleModel();
      this.props.reloadData();
    } else {
      toast.error(response.message || "Thêm bài viết không thành công ", {
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
  };

  onChangeInput = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  // handleEditorChange = (data) => {
  //   this.setState({
  //     contentHTML: data,
  //   });
  // };
  handleOnchangeImage = async (e, image, previewImageUrl, isShowBoxImage) => {
    let data = e.target.files;
    let file = data[0];
    if (file) {
      let objectUrl = URL.createObjectURL(file);
      console.log("objectUrl", objectUrl);
      this.setState({
        [previewImageUrl]: objectUrl,
        [isShowBoxImage]: true,
        [image]: file,
      });
    }
  };
  render() {
    let {
      tittle,
      statusId,
      previewImageLoshortDescriptionoUrl,
      shortDescription,
      contentMarkdown,
      contentHTML,
    } = this.state;
    console.log("userInfo", this.props.userInfo);
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
            Thêm mới bài viết
          </ModalHeader>
          <ModalBody>
            <div className="specialty-container">
              <div className="specialty-title">
                <h3>Quản lý bài viết</h3>
              </div>

              <label forhtml="uploadFileLogo" className=" image-container">
                <label>
                  {/* <FormattedMessage id="admin.manage-doctor.name-clinic" /> */}
                  Upload ảnh bìa
                </label>
                <div className="input-container ">
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
                  {this.state.isShowBoxImageLogo && (
                    <div
                      className="preview-logo preview-right"
                      style={{
                        backgroundImage: `url(${this.state.previewImageLogoUrl})`,
                      }}
                    ></div>
                  )}
                </div>
              </label>
              <div className="form-group col-md-6">
                <label forhtml="inputEmail4">
                  {/* <FormattedMessage id="admin.manage-doctor.name-clinic" /> */}
                  Tiêu đề
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  value={tittle}
                  onChange={(e) => this.onChangeInput("tittle", e.target.value)}
                />
              </div>

              <div className="form-group col-md-6">
                <label forhtml="shortDescription">
                  {/* <FormattedMessage id="admin.manage-doctor.name-clinic" /> */}
                  mô tả ngắn
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="shortDescription"
                  value={shortDescription}
                  onChange={(e) =>
                    this.onChangeInput("shortDescription", e.target.value)
                  }
                />
              </div>
              {/* </div> */}

              <div className="specialty-editor">
                <label className="title-editor">
                  {/* <FormattedMessage id="admin.manage-doctor.detail-doctor" /> */}
                  Nội dung
                </label>
                <CKeditor
                  handleEditorChange={this.handleEditorChange}
                  value={this.state.contentHTML}
                />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <div className="btn-save">
              {/* {isChange ? (
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
              )} */}
              <button
                className="btn btn-primary flex-end"
                onClick={() => {
                  this.handleClickSave();
                }}
              >
                <FormattedMessage id="admin.manage-doctor.save" />
              </button>
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
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getHandbookRedux: () => dispatch(actions.getHandbookRedux()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalBlog);
