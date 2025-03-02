import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Login from "./containers/Auth/Login";
import { Provider } from "react-redux"; // Thêm Provider từ react-redux
import reduxStore from "./redux";
import { IntlProvider } from "react-intl";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import "@testing-library/jest-dom";
import UserRedux from "./containers/System/Admin/UserRedux";
import ModalUser from "./containers/System/ModalUser";
import ManageDoctor from "./containers/System/Admin/ManageDoctor/ManageDoctor";
import TestLabel from "./containers/System/Admin/TestLabel";
jest.mock("axios");
test("renders login form correctly", () => {
  render(
    <Provider store={reduxStore}>
      <Login />
    </Provider>
  );
  // Kiểm tra các phần tử có tồn tại trong DOM
  expect(screen.getByText("Đăng nhập ngay")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Email (*)")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Password (*)")).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /Đăng nhập/i })
  ).toBeInTheDocument();
});

// test("should display Wrong password message for invalid credentials", async () => {
//   axios.post.mockRejectedValueOnce({
//     data: {
//       errCode: 1,
//       errMessage: "Wrong password",
//     },
//   });

//   render(
//     <Provider store={reduxStore}>
//       <Login />
//     </Provider>
//   );

//   // Tìm các trường input và nhập giá trị sai
//   fireEvent.change(screen.getByPlaceholderText("Email (*)"), {
//     target: { value: "nhupham@gmail.com" },
//   });
//   fireEvent.change(screen.getByPlaceholderText("Password (*)"), {
//     target: { value: "wrongpassword" },
//   });

//   // Gửi form
//   fireEvent.click(screen.getByRole("button", { name: /Đăng nhập/i }));
//   await waitFor(() => {
//     expect(axios.post).toHaveBeenCalledWith("/api/login", {
//       email: "nhupham@gmail.com",
//       password: "wrongpassword",
//     });
//   });
//   // userEvent.click(screen.getByRole("button", { name: "Đăng nhập" }));

//   await waitFor(() => {
//     expect(screen.getByText("Wrong password")).toBeInTheDocument();
//   });
//   screen.debug();
//   //fireEvent.click(screen.getByRole("button", { name: "Đăng nhập" }));

//   // Kiểm tra nếu thông báo lỗi xuất hiện
//   //expect(screen.getByText("Missing form")).toBeInTheDocument();
// });
test("should display error message for missing ps field in login page", async () => {
  render(
    <Provider store={reduxStore}>
      <Login />
    </Provider>
  );

  // Tìm các trường input và nhập giá trị sai
  fireEvent.change(screen.getByPlaceholderText("Email (*)"), {
    target: { value: "nhupham@gmail.com" },
  });
  fireEvent.change(screen.getByPlaceholderText("Password (*)"), {
    target: { value: "" },
  });

  // Gửi form
  fireEvent.click(screen.getByRole("button", { name: /Đăng nhập/i }));

  // getByText(pass)- queryByText - await findByText(fail) -
  const spanElement = screen.getByText("Missing field");
  expect(spanElement).toBeInTheDocument();
});

test("should display error message for missing email field in login page", async () => {
  render(
    <Provider store={reduxStore}>
      <Login />
    </Provider>
  );

  // Tìm các trường input và nhập giá trị sai
  fireEvent.change(screen.getByPlaceholderText("Email (*)"), {
    target: { value: "" },
  });
  fireEvent.change(screen.getByPlaceholderText("Password (*)"), {
    target: { value: "123456" },
  });

  // Gửi form
  fireEvent.click(screen.getByRole("button", { name: /Đăng nhập/i }));

  //getByText(pass)- queryByText - await findByText(fail) -
  const spanElement = screen.getByText("Missing field");
  expect(spanElement).toBeInTheDocument();
});
test("should display error message for missing ps field in login page", async () => {
  render(
    <Provider store={reduxStore}>
      <Login />
    </Provider>
  );

  // Tìm các trường input và nhập giá trị sai
  // fireEvent.change(screen.getByPlaceholderText("Email (*)"), {
  //   target: { value: "" },
  // });
  // fireEvent.change(screen.getByPlaceholderText("Password (*)"), {
  //   target: { value: "" },
  // });

  // Gửi form
  fireEvent.click(screen.getByRole("button", { name: /Đăng nhập/i }));

  // getByText(pass)- queryByText - await findByText(fail) -
  const spanElement = screen.getByText("Missing field");
  expect(spanElement).toBeInTheDocument();
});
test("click register button", async () => {
  render(
    <Provider store={reduxStore}>
      <Login />
    </Provider>
  );

  // Gửi form
  fireEvent.click(screen.getByText("Đăng kí"));
  expect(screen.getByText("Đăng kí ngay")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Họ (*)")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Tên (*)")).toBeInTheDocument();

  expect(screen.getByPlaceholderText("Số điện thoại (*)")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Password (*)")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Email (*)")).toBeInTheDocument();
  expect(
    screen.getByPlaceholderText("Enter your password again(*)")
  ).toBeInTheDocument();

  expect(screen.getByRole("button", { name: /Đăng kí/i })).toBeInTheDocument();
});

test("should display error message for missing ps field in login page", async () => {
  render(
    <Provider store={reduxStore}>
      <Login />
    </Provider>
  );

  // Tìm các trường input và nhập giá trị sai
  fireEvent.change(screen.getByPlaceholderText("Email (*)"), {
    target: { value: "nhupham@gmail.com" },
  });
  fireEvent.change(screen.getByPlaceholderText("Password (*)"), {
    target: { value: "" },
  });

  // Gửi form
  fireEvent.click(screen.getByRole("button", { name: /Đăng nhập/i }));

  // getByText(pass)- queryByText - await findByText(fail) -
  const spanElement = screen.getByText("Missing field");
  expect(spanElement).toBeInTheDocument();
});
// test("kiểm tra xem hàm onClick có được gọi khi click vào nút", async () => {
//   const handleClickSubmit = jest.fn();
//   render(
//     <Provider store={reduxStore}>
//       <Login onClick={handleClickSubmit} />
//     </Provider>
//   );

//   // Tìm các trường input và nhập giá trị sai
//   fireEvent.change(screen.getByPlaceholderText("Email (*)"), {
//     target: { value: "nhupham@gmail.com" },
//   });
//   fireEvent.change(screen.getByPlaceholderText("Password (*)"), {
//     target: { value: "" },
//   });

//   // Gửi form
//   await userEvent.click(screen.getByRole("button", { name: "Đăng nhập" }));
//   //   fireEvent.click(screen.getByRole("button", { name: "Đăng nhập" }));

//   // Kiểm tra nếu thông báo lỗi xuất hiện
//   //expect(handleClickSubmit).toHaveBeenCalledTimes(1);
//   expect(screen.findByText("Missing form")).toBeInTheDocument();
// });

// System
//User redux page
const languageVi = "vi";
const languageEn = "en";
test("renders user redux page correctly", () => {
  const messages = {
    "manage-user.add": "Thêm mới người dùng", // Chuỗi dịch cho "manage-user.add"
  };
  render(
    <Provider store={reduxStore}>
      <IntlProvider locale={languageVi} messages={messages}>
        {" "}
        {/* Bọc với IntlProvider */}
        <UserRedux />
      </IntlProvider>
    </Provider>
  );
  expect(
    screen.getByRole("button", { name: /Thêm mới người dùng/i })
  ).toBeInTheDocument();
});
test("renders user redux form correctly", () => {
  const messages = {
    "manage-user.email": "Email",
    "manage-user.password": "Mật khẩu",
    "manage-user.firstName": "Họ",
    "manage-user.lastName": "Tên",
    "manage-user.address": "Địa chỉ",
    "manage-user.phoneNumber": "Số điện thoại",
    "manage-user.gender": "Giới tính",
    "manage-user.role": "Vai trò",
    "manage-user.position": "Chức danh",
    "manage-user.uploadImage": "Tải ảnh",
    "manage-user.save": "Lưu",

    "manage-user.cancel": "Quay lại",
  };
  render(
    <Provider store={reduxStore}>
      <IntlProvider locale={languageVi} messages={messages}>
        {" "}
        {/* Bọc với IntlProvider */}
        <ModalUser
          isOpenModel={true}
          data={{
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            address: "",
            phoneNumber: "",
            gender: "",
            position: "",
            roleId: "",
            avatar: "",

            currentAction: "CREATE",
          }}
        />
      </IntlProvider>
    </Provider>
  );
  screen.debug();
  expect(screen.getByText(/email/i)).toBeInTheDocument();
  expect(screen.getByText(/Mật khẩu/i)).toBeInTheDocument();
  expect(screen.getByText(/Họ/i)).toBeInTheDocument();
  expect(screen.getByText(/Tên/i)).toBeInTheDocument();
  expect(screen.getByText(/Địa chỉ/i)).toBeInTheDocument();
  expect(screen.getByText(/Số điện thoại/i)).toBeInTheDocument();
  expect(screen.getByText(/Giới tính/i)).toBeInTheDocument();
  expect(screen.getByText(/Vai trò/i)).toBeInTheDocument();
  expect(screen.getByText(/Chức danh/i)).toBeInTheDocument();
  expect(screen.getByText(/Tải ảnh/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Quay lại/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Lưu/i })).toBeInTheDocument();
});

//Manage Doctor

test("renders Manage Doctor page correctly", () => {
  const messages = {
    "admin.manage-doctor.title": "Tạo thông tin bác sĩ",
    "admin.manage-doctor.select-doctor": "Chọn bác sĩ",
    "admin.manage-doctor.intro": "Thông tin giới thiệu bác sĩ",
    "admin.manage-doctor.save": "Lưu thông tin",
    "admin.manage-doctor.change": "Thay đổi thông tin",
    "admin.manage-doctor.select-province": "Chọn tỉnh thành",
    "admin.manage-doctor.name-clinic": "Chọn phòng khám",
    "admin.manage-doctor.address-clinic": "Địa chỉ phòng khám",
    "admin.manage-doctor.select-price": "Chọn giá khám",
    "admin.manage-doctor.select-payment": "Chọn phương thức thanh toán",
    "admin.manage-doctor.select-specialty": "Chọn chuyên khoa",
    "admin.manage-doctor.note": "Ghi chú",
    "admin.manage-doctor.detail-doctor": "Chi tiết về bác sĩ",
  };
  const { container } = render(
    <Provider store={reduxStore}>
      <IntlProvider locale={languageVi} messages={messages}>
        {" "}
        {/* Bọc với IntlProvider */}
        <ManageDoctor />
      </IntlProvider>
    </Provider>
  );
  //expect(screen.getByText(/Tạo thông tin bác sĩ/i)).toBeInTheDocument();
  //const placeholderDiv = screen.getByRole("textbox"); // React Select uses combobox for the input role

  // Kiểm tra rằng phần tử này có chứa placeholder
  expect(screen.getByLabelText("select-province")).toBeInTheDocument();
  expect(screen.getByLabelText("select-doctor")).toBeInTheDocument();
  //   expect(screen.queryByLabelText("label41")).toBeInTheDocument();
  expect(screen.getByLabelText("name-clinic")).toBeInTheDocument();
  expect(screen.getByLabelText("address-clinic")).toBeInTheDocument();
  expect(screen.getByLabelText("select-price")).toBeInTheDocument();
  expect(screen.getByLabelText("select-payment")).toBeInTheDocument();
  expect(screen.getByLabelText("select-specialty")).toBeInTheDocument();
  expect(screen.getByLabelText("note")).toBeInTheDocument();
  expect(screen.getByLabelText("intro")).toBeInTheDocument();

  //   const input = container.querySelector('#label4');
  //   expect(input).toBeInTheDocument();
  //   expect(screen.getByLabelText("Chọn tỉnh thành")).toBeInTheDocument();

  //expect(screen.getByLabelText("select-doctor")).toBeInTheDocument()

  //   expect(
  //     screen.getByPlaceholderText("Thông tin giới thiệu bác sĩ")
  //   ).toBeInTheDocument();
  //   expect(screen.getByPlaceholderText("Lưu thông tin")).toBeInTheDocument();
  //   expect(screen.getByPlaceholderText("Thay đổi thông tin")).toBeInTheDocument();
  //   expect(
  //     screen.getByPlaceholderText("Thông tin giới thiệu bác sĩ")
  //   ).toBeInTheDocument();
  //   expect(
  //     screen.getByPlaceholderText("Thông tin giới thiệu bác sĩ")
  //   ).toBeInTheDocument();
  //   expect(
  //     screen.getByPlaceholderText("Thông tin giới thiệu bác sĩ")
  //   ).toBeInTheDocument();
  //   expect(
  //     screen.getByPlaceholderText("Thông tin giới thiệu bác sĩ")
  //   ).toBeInTheDocument();

  //   expect(screen.getByText(/Thông tin giới thiệu bác sĩ/i)).toBeInTheDocument();
  //   expect(screen.getByText(/Lưu thông tin/i)).toBeInTheDocument();
  //   expect(screen.getByText(/Thay đổi thông tin/i)).toBeInTheDocument();
  //   expect(screen.getByText(/Chọn tỉnh thành/i)).toBeInTheDocument();
  //   expect(screen.getByText(/Chọn phòng khám/i)).toBeInTheDocument();
  //   expect(screen.getByText(/Địa chỉ phòng khám/i)).toBeInTheDocument();
  //   expect(screen.getByText(/Chọn giá khám/i)).toBeInTheDocument();
  //   expect(screen.getByText(/Chọn phương thức thanh toán/i)).toBeInTheDocument();
  //   expect(screen.getByText(/Chọn chuyên khoa/i)).toBeInTheDocument();
  //   expect(screen.getByText(/Ghi chú/i)).toBeInTheDocument();
  //   expect(screen.getByText(/Chi tiết về bác sĩ/i)).toBeInTheDocument();
  //   expect(
  //     screen.getByRole("button", { name: /Lưu thông tin/i })
  //   ).toBeInTheDocument();
});
test("labelText", async () => {
  render(
    <Provider store={reduxStore}>
      <TestLabel />
    </Provider>
  );

  expect(screen.getByLabelText("labelText")).toBeInTheDocument();

  screen.debug();
});
