import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// import Login from "./containers/Auth/Login";
import { Provider } from "react-redux"; // Thêm Provider từ react-redux
import reduxStore from "./redux";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import "@testing-library/jest-dom";
import Login from "../../containers/Auth/Login";
jest.mock("axios");
test("renders user redux page correctly", () => {
  // Render component Counter
  render(
    <Provider store={reduxStore}>
      <Login />
    </Provider>
  );

  // Kiểm tra các phần tử có tồn tại trong DOM

  expect(
    screen.getByRole("button", { name: /Thêm mới người dùng/i })
  ).toBeInTheDocument();

  //   expect(screen.getByText(/current count: 0/i)).toBeInTheDocument();

  // Tìm nút và mô phỏng việc nhấn nút
  //   const button = screen.getByRole('button', { name: /increment/i });
  //   fireEvent.click(button);

  // Kiểm tra sau khi nhấn nút, giá trị count phải là 1
  //   expect(screen.getByText(/current count: 1/i)).toBeInTheDocument();
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
//

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
