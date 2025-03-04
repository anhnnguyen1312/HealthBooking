import React, { Component } from "react";
import { connect } from "react-redux";
import "./ManageClinic.scss";
import ModalClinic from "./ModalClinic";
//import { filterAndPagingClinic } from '../../../services/userServices';
//import SearchInput from '../../../components/SearchInput';
//import FooterPaging from '../../../components/FooterPaging';
import ModalConfirm from "../ModalConfirm";
//import { deleteClinicByIdServices } from '../../../services';
import { toast } from "react-toastify";
import Loading from "../../../components/Loading";
import * as actions from "../../../store/actions";
import { deleteClinicByIdServices } from "../../../services";
class ManageClinic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModel: false,
      listClinic: [],

      limit: 5,
      keyword: "",
      totalPage: 1,
      count: 0,
      pageIndex: 1,

      isShowModalConfirm: false,
      currentClinicId: "",

      isShowLoading: false,
    };
  }
  async componentDidMount() {
    let { listDataSpecialtyRedux, listDataClinicRedux } = this.props;

    this.setState({
      listSpecialty: listDataSpecialtyRedux,
      listClinic: listDataClinicRedux,
    });
    //this.handleFilterAndPaging(pageIndex, limit, keyword);
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.listDataSpecialtyRedux !== this.props.listDataSpecialtyRedux ||
      prevProps.listDataClinicRedux !== this.props.listDataClinicRedux
    ) {
      this.setState({
        listSpecialty: this.props.listDataSpecialtyRedux,
        listClinic: this.props.listDataClinicRedux,
      });
    }
  }

  handleFilterAndPaging = async (pageIndex, limit, keyword) => {
    // this.setState({
    //   isShowLoading: true,
    // });
    // let response = await filterAndPagingClinic(pageIndex, limit, keyword);
    // if (response && response.errorCode === 0) {
    //     this.setState({
    //         listClinic: response.data.rows,
    //         totalPage: response.data.totalPage,
    //         count: response.data.count,
    //         pageIndex: pageIndex,
    //         isShowLoading: false,
    //     });
    // }
  };

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
      currentClinicId: id,
    });
  };
  handleDestroy = async () => {
    this.setState({
      isShowLoading: true,
    });

    let response = await deleteClinicByIdServices({
      id: this.state.currentClinicId,
    });
    console.log("his.state.currentClinicId", this.state.currentClinicId);

    console.log("response", response);
    if (response && response?.data?.errCode === 0) {
      this.toggleModelConfirm("");
      await this.props.getAllClinicRedux();

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
      listClinic,
      count,
      totalPage,
      pageIndex,
      isShowModalConfirm,
      isShowLoading,
    } = this.state;
    return (
      <div>
        {isOpenModel && (
          <ModalClinic
            toggleModel={this.handleToggleModel}
            isOpenModel={this.state.isOpenModel}
            reloadData={this.handleFilterAndPaging}
            handleHideLoading={this.handleHideLoading}
            handleShowLoading={this.handleShowLoading}
          />
        )}
        {isShowModalConfirm ? (
          <ModalConfirm
            isShowModalConfirm={isShowModalConfirm}
            toggleModelConfirm={this.toggleModelConfirm}
            handleDeleteItem={this.handleDestroy}
            text="Bạn muốn xoá phòng khám này"
            type="confirm"
            size="nm"
            currentUserId={this.state.currentClinicId}
          />
        ) : (
          ""
        )}
        <div className="container-table position-loading">
          {isShowLoading && <Loading />}
          <div className="title">Quản lý cơ sở khám bệnh</div>
          <div className="wrapper-table w60">
            <div className="action-container">
              {/* <SearchInput placeholder="Tìm kiếm..." handleSearch={this.handleSearch} delay={800} /> */}
              <button
                className="btn btn-primary"
                onClick={() => this.handleToggleModel()}
              >
                Thêm mới phòng khám
              </button>
            </div>
            <div className="wrapper-scroll">
              <table className="table table-hover">
                <thead>
                  <tr className="fixedTop">
                    <th scope="col">STT</th>
                    <th scope="col">Ảnh Logo</th>
                    <th scope="col">Tên cơ sở</th>
                    <th scope="col">Địa chỉ</th>
                    <th scope="col">Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {listClinic &&
                    listClinic.length > 0 &&
                    listClinic.map((item, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>
                            <div className="img-wrapper">
                              <img src={item.imageLogo} atl="img"></img>
                            </div>
                          </td>
                          <td>{item.nameClinic}</td>

                          <td>{item.addressClinic}</td>
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
    listDataSpecialtyRedux: state.patient.listDataSpecialty,
    listDataClinicRedux: state.patient.listDataClinic,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllSpecialtyRedux: () => dispatch(actions.getAllSpecialty()),
    // getHandbookRedux: () => dispatch(actions.getHandbookRedux()),
    getAllClinicRedux: () => dispatch(actions.getAllClinicRedux()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageClinic);
