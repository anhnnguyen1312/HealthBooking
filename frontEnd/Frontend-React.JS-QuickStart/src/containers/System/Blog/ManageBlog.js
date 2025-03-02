import React, { Component } from "react";
import { connect } from "react-redux";
import "./ManageBlog.scss";
import ModalBlog from "./ModalBlog";
//import { filterAndPagingClinic } from '../../../services/userServices';
//import SearchInput from '../../../components/SearchInput';
//import FooterPaging from '../../../components/FooterPaging';
import ModalConfirm from "../ModalConfirm";
//import { deleteClinicByIdServices } from '../../../services';
import { toast } from "react-toastify";
import Loading from "../../../components/Loading";
import * as actions from "../../../store/actions";
import { deleteBlogByIdServices } from "../../../services/patientServices";
class ManageBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModel: false,

      isShowModalConfirm: false,
      currentBlogId: "",
      listBlogs: [],
      isShowLoading: false,
    };
  }
  async componentDidMount() {
    this.props.getHandbookRedux();
    let { listDataHandbook } = this.props;

    this.setState({
      listBlogs: listDataHandbook,
    });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.listDataHandbook !== this.props.listDataHandbook) {
      console.log("this.props.listDataHandbook", this.props.listDataHandbook);
      this.setState({
        listBlogs: this.props.listDataHandbook,
      });
    }
  }

  handleToggleModel = () => {
    this.setState({ isOpenModel: !this.state.isOpenModel });
  };

  handleSearch = async (currentKeyword) => {
    let { limit, pageIndex } = this.state;
    this.setState({
      isShowLoading: true,
    });
    try {
      // let response = await filterAndPagingClinic(pageIndex, limit, currentKeyword);
      // if (response && response.errorCode === 0) {
      //     this.setState({
      //         listClinic: response.data.rows,
      //         totalPage: response.data.totalPage,
      //         count: response.data.count,
      //         pageIndex: pageIndex,
      //         keyword: currentKeyword,
      //         isShowLoading: false,
      //     });
      // }
      this.setState({
        isShowLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChangePage = async (numberPage) => {
    console.log(numberPage);
    let { limit, keyword, pageIndex, totalPage } = this.state;
    if (numberPage === "next") {
      if (+pageIndex < +totalPage) {
        this.handleFilterAndPaging(pageIndex + 1, limit, keyword);
      }
    } else if (numberPage === "back") {
      if (+pageIndex > 1) {
        this.handleFilterAndPaging(pageIndex - 1, limit, keyword);
      }
    } else {
      this.handleFilterAndPaging(numberPage, limit, keyword);
    }
  };

  toggleModelConfirm = (id) => {
    this.setState({
      isShowModalConfirm: !this.state.isShowModalConfirm,
      currentBlogId: id,
    });
  };
  handleDestroy = async () => {
    this.setState({
      isShowLoading: true,
    });

    let response = await deleteBlogByIdServices({
      id: this.state.currentBlogId,
    });
    console.log("his.state.currentBlogId", this.state.currentBlogId);

    console.log("response", response);
    if (response && response.data.errCode === 0) {
      this.toggleModelConfirm("");
      await this.props.getHandbookRedux();

      toast.success("Delete succesful", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      this.toggleModelConfirm("");
      toast.error(response.message || "Có lỗi xảy ra lui lòng tử lại.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    this.setState({
      isShowLoading: false,
    });
  };
  handleShowLoading = () => {
    this.setState({
      isShowLoading: true,
    });
  };
  handleHideLoading = () => {
    this.setState({
      isShowLoading: false,
    });
  };

  render() {
    let {
      isOpenModel,
      listBlogs,
      count,
      totalPage,
      pageIndex,
      isShowModalConfirm,
      isShowLoading,
    } = this.state;
    return (
      <div>
        {isOpenModel && (
          <ModalBlog
            toggleModel={this.handleToggleModel}
            isOpenModel={this.state.isOpenModel}
            reloadData={this.props.getHandbookRedux}
            handleHideLoading={this.handleHideLoading}
            handleShowLoading={this.handleShowLoading}
          />
        )}
        {isShowModalConfirm ? (
          <ModalConfirm
            isShowModalConfirm={isShowModalConfirm}
            toggleModelConfirm={this.toggleModelConfirm}
            handleDeleteItem={this.handleDestroy}
            text="Bạn muốn xoá bài viết này"
            type="confirm"
            size="nm"
            currentUserId={this.state.currentBlogId}
          />
        ) : (
          ""
        )}
        <div className="container-table position-loading">
          {isShowLoading && <Loading />}
          <div className="title">Quản lý bài đăng</div>
          <div className="wrapper-table w60">
            <div className="action-container">
              {/* <SearchInput placeholder="Tìm kiếm..." handleSearch={this.handleSearch} delay={800} /> */}
              <button
                className="btn btn-primary"
                onClick={() => this.handleToggleModel()}
              >
                Thêm mới bài đăng
              </button>
            </div>
            <div className="wrapper-scroll">
              <table className="table table-hover">
                <thead>
                  <tr className="fixedTop">
                    <th scope="col">STT</th>
                    <th scope="col">Ảnh bìa</th>
                    <th scope="col">Tiêu đề</th>
                    <th scope="col">Mô tả ngắn</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {listBlogs &&
                    listBlogs.length > 0 &&
                    listBlogs.map((item, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>
                            <div className="img-wrapper">
                              <img src={item.imageLogo} atl="img"></img>
                            </div>
                          </td>
                          <td>{item.tittle}</td>
                          <td>{item.shortDescription}</td>

                          <td>{"đã đăng"}</td>
                          <td>
                            <button
                              className="btn btn-warning"
                              onClick={() => this.toggleModelConfirm(item.id)}
                            >
                              Xoá
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
            {/* <FooterPaging
                            titleTotalRecord="Tổng cơ sở"
                            TotalPage={totalPage}
                            PageIndex={pageIndex}
                            TotalRecord={count}
                            handleChangePage={this.handleChangePage}
                        /> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    languageRedux: state.app.language,

    listDataHandbook: state.patient.listDataHandbook,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getHandbookRedux: () => dispatch(actions.getHandbookRedux()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageBlog);
