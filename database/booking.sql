-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 03, 2025 at 02:08 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `booking`
--

-- --------------------------------------------------------

--
-- Table structure for table `allcode`
--

CREATE TABLE `allcode` (
  `id` int(11) NOT NULL,
  `keyMap` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `valueEn` varchar(255) DEFAULT NULL,
  `valueVi` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `allcode`
--

INSERT INTO `allcode` (`id`, `keyMap`, `type`, `valueEn`, `valueVi`, `createdAt`, `updatedAt`) VALUES
(1, 'R1', 'ROLE', 'Admin', 'Quản trị viên', NULL, NULL),
(2, 'R2', 'ROLE', 'Doctor', 'Bác sĩ', NULL, NULL),
(3, 'R3', 'ROLE', 'Patient', 'Bệnh nhân', NULL, NULL),
(4, 'S1', 'STATUS', 'New', 'Lịch hẹn mới', NULL, NULL),
(5, 'S2', 'STATUS', 'Confirmed', 'Đã xác nhận', NULL, NULL),
(6, 'S3', 'STATUS', 'Done', 'Đã khám xong', NULL, NULL),
(7, 'S4', 'STATUS', 'Cancel', 'Đã hủy', NULL, NULL),
(8, 'T1', 'TIME', '8:00 AM - 9:00 AM', '8:00 - 9:00', NULL, NULL),
(9, 'T2', 'TIME', '9:00 AM - 10:00 AM', '9:00 - 10:00', NULL, NULL),
(10, 'T3', 'TIME', '10:00 AM - 11:00 AM', '10:00 - 11:00', NULL, NULL),
(11, 'T4', 'TIME', '11:00 AM - 0:00 PM', '11:00 - 12:00', NULL, NULL),
(12, 'T5', 'TIME', '1:00 PM - 2:00 PM', '13:00 - 14:00', NULL, NULL),
(13, 'T6', 'TIME', '2:00 PM - 3:00 PM', '14:00 - 15:00', NULL, NULL),
(14, 'T7', 'TIME', '3:00 PM - 4:00 PM', '15:00 - 16:00', NULL, NULL),
(15, 'T8', 'TIME', '4:00 PM - 5:00 PM', '16:00 - 17:00', NULL, NULL),
(16, 'P0', 'POSITION', 'None', 'Bác sĩ', NULL, NULL),
(17, 'P1', 'POSITION', 'Master', 'Thạc sĩ', NULL, NULL),
(18, 'P2', 'POSITION', 'Doctor', 'Tiến sĩ', NULL, NULL),
(19, 'P3', 'POSITION', 'Associate Professor', 'Phó giáo sư', NULL, NULL),
(20, 'P4', 'POSITION', 'Professor', 'Giáo sư', NULL, NULL),
(21, 'M', 'GENDER', 'Male', 'Nam', NULL, NULL),
(22, 'F', 'GENDER', 'Female', 'Nữ', NULL, NULL),
(23, 'O', 'GENDER', 'Other', 'Khác', NULL, NULL),
(24, 'PRI1', 'PRICE', '10', '200000', NULL, NULL),
(25, 'PRI2', 'PRICE', '15', '250000', NULL, NULL),
(26, 'PRI3', 'PRICE', '20', '300000', NULL, NULL),
(27, 'PRI4', 'PRICE', '25', '350000', NULL, NULL),
(28, 'PRI5', 'PRICE', '30', '400000', NULL, NULL),
(29, 'PRI6', 'PRICE', '35', '450000', NULL, NULL),
(30, 'PRI7', 'PRICE', '40', '500000', NULL, NULL),
(31, 'PAY1', 'PAYMENT', 'Cash', 'Tiền mặt', NULL, NULL),
(32, 'PAY2', 'PAYMENT', 'Credit card', 'Thẻ ATM', NULL, NULL),
(33, 'PAY3', 'PAYMENT', 'All payment method', 'Tất cả', NULL, NULL),
(34, 'PRO1', 'PROVINCE', 'Ha Noi', 'Hà Nội', NULL, NULL),
(35, 'PRO2', 'PROVINCE', 'Ho Chi Minh', 'Hồ Chí Minh', NULL, NULL),
(36, 'PRO3', 'PROVINCE', 'Da Nang', 'Đà Nẵng', NULL, NULL),
(37, 'PRO4', 'PROVINCE', 'Can Tho', 'Cần Thơ', NULL, NULL),
(38, 'PRO5', 'PROVINCE', 'Binh Duong', 'Bình Dương', NULL, NULL),
(39, 'PRO6', 'PROVINCE', 'Dong Nai', 'Đồng Nai', NULL, NULL),
(40, 'PRO7', 'PROVINCE', 'Quang Ninh', 'Quảng Ninh', NULL, NULL),
(41, 'PRO8', 'PROVINCE', 'Hue', 'Thừa Thiên Huế', NULL, NULL),
(42, 'PRO9', 'PROVINCE', 'Quang Binh', 'Quảng Bình', NULL, NULL),
(43, 'PRO10', 'PROVINCE', 'Khanh Hoa', 'Khánh Hòa', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `contentHTML` longtext NOT NULL,
  `contentMarkdown` longtext NOT NULL,
  `shortDescription` longtext DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL,
  `statusId` varchar(255) DEFAULT NULL,
  `tittle` varchar(255) DEFAULT NULL,
  `imageLogo` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `contentHTML`, `contentMarkdown`, `shortDescription`, `UserId`, `statusId`, `tittle`, `imageLogo`, `createdAt`, `updatedAt`) VALUES
(3, '', '<p>Đái tháo đường và <a href=\"https://bookingcare.vn/cam-nang/benh-huyet-ap-cao-trieu-chung-nguyen-nhan-va-cach-dieu-tri-p50.html\">cao huyết áp</a> là hai bệnh ngày càng phổ biến ở Việt Nam. Đây đều là nguy cơ của bệnh lý tim mạch cũng như có thể gây nhiều biến chứng trên các cơ quan quan trọng như mắt, thận, thần kinh, mạch máu não,...&nbsp;</p><p>\"Cao huyết áp cũng là một trong nhưng yếu tố làm tăng độ nặng của đái tháo đường và ngược lại đái tháo đường cũng làm cho việc điều trị cao huyết áp trở nên khó khăn hơn.\". Vậy có lưu ý gì khi điều trị tăng huyết áp ở người bệnh đái tháo đường? Tìm hiểu trong bài viết dưới đây.&nbsp;</p><h2><strong>Mối liên hệ giữa đái tháo đường và cao huyết áp</strong></h2><p>Đái tháo đường và cao huyết áp có mối liên hệ mật thiết với nhau. Tăng huyết áp rất thường gặp ở người bệnh đái tháo đường.</p><p>Trên thực tế, số liệu thống kê cho thấy, tỷ lệ tăng huyết áp ở người <a href=\"https://bookingcare.vn/cam-nang/tieu-duong-tuyp-2-la-gi-cham-soc-benh-nhan-tieu-duong-tuyp-2-p2713.html\">đái tháo đường tuýp 2</a> tăng 2,5 lần so với người không mắc bệnh này. Ngược lại, khoảng 50% số người đái tháo đường đồng thời bị tăng huyết áp.&nbsp;</p><p>Có thể giải thích về mối liên hệ giữa 2 bệnh lý này như sau:</p><ul><li>Ở người mắc bệnh đái tháo đường sẽ không có đủ insulin để vận chuyển glucose vào các tế bào hoặc insulin hoạt động không hiệu quả.&nbsp;Khi đó, glucose không thể đi vào tế bào để cung cấp năng lượng, thay vào đó glucose sẽ tích tụ trong máu, dẫn đến đường huyết cao.</li><li>Mức đường huyết cao có thể gây tổn thương trên diện rộng cho các mô và cơ quan, bao gồm cả những cơ quan đóng vai trò chính trong việc duy trì huyết áp khỏe mạnh. Ví dụ, tổn thương mạch máu và thận có thể khiến huyết áp tăng cao.</li></ul><p>Ở người bệnh đái tháo đường có bệnh đồng mắc là tăng huyết áp khiến đường huyết tăng cao, làm bệnh nhân đái tháo đường bị biến chứng nhanh hơn và gia tăng tỷ lệ tử vong.&nbsp;</p><p>Do vậy, song song với việc kiểm soát đường huyết, cần kiểm soát huyết áp hiệu quả, tránh gây ra nhiều <a href=\"https://bookingcare.vn/cam-nang/5-bien-chung-dien-hinh-cua-benh-tieu-duong-va-cach-phong-ngua-p2717.html\">biến chứng nguy hiểm cho người bệnh đái tháo đường</a>.</p><blockquote><p><i><strong>Trong điều trị người bệnh đái tháo đường có tăng huyết áp, bên cạnh việc </strong></i><a href=\"https://bookingcare.vn/cam-nang/huong-dan-dieu-tri-ha-duong-huyet-o-nguoi-benh-dai-thao-duong-p3657.html\"><i><strong>kiểm soát chỉ số đường huyết</strong></i></a><i><strong>, việc kiểm soát huyết áp ổn định đóng vai trò quan trọng, giúp giảm nguy cơ biến chứng.</strong></i></p><p><strong>Chia sẻ Facebook</strong></p></blockquote><h2><strong>Điều trị tăng huyết áp ở người bệnh đái tháo đường</strong></h2><p>\"Đối với người bệnh đái tháo đường đồng mắc tăng huyết áp, việc điều trị tốt nhất là cần phải kiểm soát tốt huyết áp, giữ mức huyết áp mục tiêu dưới 130/80 mmHg.\"</p><p>Nhìn chung phương <a href=\"https://bookingcare.vn/cam-nang/cach-chua-dai-thao-duong-hieu-qua-theo-phuong-phap-kieng-ba-chan-p3500.html\">pháp điều trị đái tháo đường</a> và tăng huyết áp có nhiều nét tương đồng, bổ trợ lẫn nhau, người bệnh nên tuân thủ việc điều trị dùng thuốc kết hợp điều trị không dùng thuốc (thay đổi lối sống).&nbsp;</p><p>Cụ thể, người bệnh nên lưu ý một số điều sau:</p><ul><li>Sử dụng thuốc theo chỉ định của bác sĩ:<ul><li>Bác sĩ có thể chỉ định người bệnh sử dụng thuốc để ổn định huyết áp. Tùy vào tình trạng của từng người, qua thăm khám bác sĩ sẽ tư vấn, chỉ định và có hướng dẫn&nbsp; phù hợp.</li><li>Người bệnh tuyệt đối không được tự ý bỏ thuốc giữa chừng, khiến huyết áp và đường huyết tăng vọt sẽ rất nguy hiểm.</li></ul></li><li>Giảm cân nếu thừa cân</li><li>Bỏ rượu và thuốc lá (nếu có)</li><li>Thay đổi chế độ ăn:<ul><li>Nên ăn: ăn nhiều trái cây (tuy nhiên nên hạn chế những loại quả có lượng đường cao như: sầu riêng, mít, chuối chín kỹ, xoài chín,...), ăn nhiều rau củ, sử dụng các sản phẩm sữa ít chất béo</li><li>Nên tránh: để dự phòng tăng huyết áp chế độ ăn cần cắt giảm lượng muối natri (dưới 2,3 gram/ngày), hạn chế đạm trong thực phẩm</li></ul></li><li>Tập luyện thể dục đều đặn: tối thiểu 30 phút/ ngày, 5 ngày/tuần. Với người bệnh có bệnh tim mạch và các bệnh mạn tính khác cần tham khảo ý kiến của bác sĩ để có chế độ tập luyện, vận động phù hợp.&nbsp;</li></ul><p>Người bệnh đái tháo đường nên thăm khám định kỳ để đánh giá tình trạng, kiểm soát chỉ số đường huyết, kiểm soát huyết áp để hạn chế những biến chứng ở người bệnh đái tháo đường. Khi đã đạt được mức huyết áp mục tiêu vẫn phải tiếp tục duy trì các thuốc huyết áp đang theo chỉ định của bác sĩ. Không tự ý ngừng thuốc dùng vì nếu bệnh nhân ngừng thuốc, huyết áp sẽ tăng trở lại.</p>', 'Đái tháo đường và cao huyết áp có mối liên hệ mật thiết với nhau. Điều trị tăng huyết áp ở người bệnh đái tháo đường đóng vai trò quan trọng để giảm nguy cơ biến chứng.', NULL, NULL, 'Một số lưu ý điều trị tăng huyết áp ở người bệnh đái tháo đường', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1740933837/112133-dieu-tri-tang-huyet-ap-o-nguoi-benh-tieu-duong_dsbtrn.jpg', '2025-03-02 16:43:58', '2025-03-02 16:43:58'),
(4, '', '<p>Glucose máu là một chỉ số quan trọng để chẩn đoán và theo dõi tình trạng sức khỏe. Nếu chỉ số glucose máu của bạn quá cao hoặc quá thấp, nó có thể gây ra các vấn đề sức khỏe nghiêm trọng, bao gồm <a href=\"https://bookingcare.vn/cam-nang/benh-tieu-duong-la-gi-nguyen-nhan-dau-hieu-nhan-biet-va-huong-dieu-tri-p2715.html\">bệnh tiểu đường</a>, bệnh tim hoặc đột quỵ,...</p><p>Cùng tìm hiểu chi tiết về ý nghĩa của chỉ số Glucose máu trong bài viết dưới đây của BookingCare.</p><h2><strong>&nbsp;Chỉ số Glucose máu bình thường</strong></h2><p>Glucose máu là một trong những <a href=\"https://bookingcare.vn/cam-nang/cac-chi-so-tieu-duong-can-biet-va-luu-y-p3477.html#:~:text=Ch%E1%BB%89%20s%E1%BB%91%20%C4%91%C6%B0%E1%BB%9Dng%20huy%E1%BA%BFt%20ch%E1%BA%A9n%20%C4%91o%C3%A1n%20ti%E1%BB%83u%20%C4%91%C6%B0%E1%BB%9Dng&amp;text=%C4%90%C6%B0%E1%BB%9Dng%20huy%E1%BA%BFt%20l%C3%BAc%20%C4%91%C3%B3i%20%E2%89%A5,%C4%91%C3%AAm%20t%E1%BB%AB%208%20%2D14%20gi%E1%BB%9D)\">chỉ số quan trọng cho hoạt động, theo dõi, chẩn đoán bệnh tiểu đường</a>.&nbsp;</p><p>Chỉ số glucose máu được đo bằng đơn vị mg/dL hoặc mmol/L. Ở Mỹ, đơn vị phổ biến là mg/dL, trong khi ở châu Âu và Canada, đơn vị phổ biến là mmol/L. BookingCare sẽ chú thích cả 2 chỉ số để bạn đọc tiện theo dõi.</p><p>Mức glucose trong máu bình thường là:</p><ul><li>Chỉ số glucose máu đói (là sau khi bạn không ăn uống trong ít nhất 8 giờ): 90 - 130 mg/dl (tương đương 5 - 7,2 mmol/l)</li><li>Chỉ số glucose máu sau khi ăn khoảng 1 - 2 tiếng:&nbsp;Dưới 180 mg/dl (tương đương 10 mmol/l)</li><li>Chỉ số glucose máu trước khi đi ngủ:&nbsp;100 - 150 mg/l (tương đương 6 - 8,3 mmol/l)</li></ul><h2><strong>Ý nghĩa chỉ số Glucose máu</strong></h2><p>Bạn có thể so sánh chỉ số<a href=\"https://bookingcare.vn/cam-nang/xet-nghiem-glucose-mau-la-gi-de-lam-gi-y-nghia-chi-so-p4145.html\"> xét nghiệm glucose máu</a> của mình với kết quả dưới đây để phần nào xác định tình trạng sức khỏe.</p><ul><li>Bệnh tiểu đường: &gt; 126 mg/dL ( &gt;7.0 mmol/L). Thường&nbsp;thấy ở những người mắc bệnh tiểu đường loại 2. Lượng đường trong máu cao kéo dài có thể cho thấy cơ thể bạn bị rối loạn chức năng điều hòa glucose trong máu.</li><li>Tiền tiểu đường hoặc rối loạn đường huyết đói:&nbsp;100 – 125 mg/dL (5.5 tới 6.9 mmol/l).&nbsp;</li><li>Bình thường: 10 - 99 mg/dL (3.9 tới 5.4 mmol/l)</li><li>Hạ đường huyết: &lt; 70 mg/dL (&lt;3.9 mmol/l). Đây là tình trạng hạ đường huyết, bạn cần bổ sung đường vào cơ thể ngay lập tức hoặc sự giúp đỡ y tế.</li></ul><p>Nhìn chung, tất cả các mức glucose cao hơn bình thường đều không tốt. Nếu chỉ số glucose cao hơn bình thường, nhưng chưa bằng mức của bệnh tiểu đường thì được gọi là <a href=\"https://bookingcare.vn/cam-nang/tien-dai-thao-duong-dau-hieu-nhan-biet-va-cac-phuong-phap-dieu-tri-p3503.html\">tiền tiểu đường</a>.Tiền tiểu đường có nguy cơ cao dẫn tới bệnh tiểu đường loại 2, huyết áp cao, rối loạn lipid máu và các tình trạng bất lợi khác.</p><p>Với tình trạng Glucose máu tăng kéo dài có thể xuất hiện các biến chứng nguy hiểm đến nhiều cơ quan trong cơ thể, gây nên một số bệnh lý như:</p><ul><li>Các bệnh về tim: xơ vữa động mạch, nhồi máu cơ tim, đột quỵ,…</li><li>Suy thận: bởi lượng Glucose quá cao làm làm tổn thương cầu thận, dần dần gây viêm cầu thận mạn dẫn tới suy thận.</li><li>Các bệnh lý về mắt: suy giảm thị lực, đục thủy tinh thể, các bệnh về giác mạc, võng mạc,…</li><li><a href=\"https://bookingcare.vn/cam-nang/12-benh-ngoai-da-thuong-gap-va-cach-phong-tranh-hieu-qua-p1906.html\">Các bệnh lý về da</a>: viêm nhiễm, tróc da, lở loét, mụn nhọt,…</li><li>Thần kinh: viêm dây thần kinh, rối loạn cảm giác,…</li><li>Một số biến chứng khác: thấp khớp, viêm phổi, hôn mê,…</li></ul><p>Nếu kết quả của bạn cho thấy chỉ số Glucose máu giảm thì có thể là dấu hiệu của một số vấn đề sức khỏe như suy tuyến yên, suy tuyến giáp, Bệnh Insulinoma, Thiếu dinh dưỡng.&nbsp;</p><p>Chỉ số glucose máu là một chỉ số quan trọng để chẩn đoán bệnh tiểu đường. Bạn có thể kiểm soát và duy trì chỉ số glucose máu ở mức bình thường bằng cách ăn một chế độ ăn uống lành mạnh, tập thể dục đều đặn và kiểm tra định kỳ chỉ số glucose máu. Nên đến chuyên gia y tế khi có các vấn đề bất thường để được giải đáp.</p>', 'Ý nghĩa chỉ số Glucose máu là gì? Glucose máu bình thường là bao nhiêu?', NULL, NULL, 'Ý nghĩa chỉ số Glucose máu là gì? Glucose máu bình thường là bao nhiêu?', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1740933884/170039-y-nghia-xet-nghiem-glucose-mau_ovmwsc.jpg', '2025-03-02 16:44:45', '2025-03-02 16:44:45'),
(5, '', '<p>Theo khuyến cáo của Bộ Y tế, tất cả phụ nữ mang thai đều cần <a href=\"https://bookingcare.vn/cam-nang/xet-nghiem-chan-doan-tieu-duong-thai-ky-va-mot-so-luu-y-khi-thuc-hien-p3628.html\">thực hiện xét nghiệm tiểu đường thai kỳ</a>,&nbsp;nhất là trong khoảng từ tuần 24 đến 28 của thai kỳ. Xét nghiệm này giúp phát hiện sớm tình trạng tiểu đường thai kỳ, một bệnh lý có thể gây ra nhiều biến chứng nguy hiểm cho cả mẹ và bé.</p><h2><strong>Không xét nghiệm tiểu đường thai kỳ có sao không?</strong></h2><p>Để kịp thời phát hiện ra tiểu đường thai kỳ, mẹ bầu cần làm xét nghiệm tiểu đường thai kỳ. Đây là một xét nghiệm nhằm kiểm tra nồng độ glucose trong máu mẹ bầu, giúp tầm soát bệnh đái tháo đường thai kỳ.&nbsp;</p><p>Việc phát hiện tiểu đường thai kỳ sớm nhằm giúp mẹ bầu có những can thiệp phù hợp trong lối sống (chế độ ăn, thói quen sinh hoạt, sử dụng thuốc) để phòng tránh các tác động bất lợi của tăng đường huyết đối với mẹ và bé trong và sau thai kỳ, đồng thời vẫn đảm bảo được sự tăng trưởng và sự phát triển bình thường của thai.</p><p>Tiểu đường thai kỳ có thể gây những ảnh hưởng nguy hiểm đến thai phụ, thai nhi và trẻ sơ sinh nếu không được hỗ trợ đúng cách:</p><h3><strong>Ảnh hưởng của tiểu đường thai kỳ với thai phụ</strong></h3><p>Thai phụ mắc tiểu đường thai kỳ có nguy cơ xảy ra các tai biến trong suốt quá trình mang thai cao hơn các thai phụ bình thường. Các biến chứng thường gặp là:</p><ul><li>Tăng huyết áp: Thai phụ tiểu đường thai kỳ dễ bị tăng huyết áp hơn các thai phụ bình thường. Từ đó gây ra nhiều biến chứng cho mẹ và thai nhi như: tiền sản giật, sản giật, tai biến mạch máu não, suy gan, suy thận, thai chậm phát triển trong tử cung, sinh non và tăng tỷ lệ chết chu sinh.</li><li>Sinh non: <a href=\"https://bookingcare.vn/cam-nang/dai-thao-duong-thai-ky-trieu-chung-nguyen-nhan-va-cach-cham-soc-tai-nha-p3487.html\">Thai phụ bị tiểu đường thai kỳ</a> làm tăng nguy cơ sinh non so với các thai phụ không bị tiểu đường thai kỳ. Tỷ lệ sinh non ở phụ nữ tiểu đường thai kỳ là 26%, trong khi ở nhóm thai phụ bình thường là 9,7%.</li><li>Đa ối: Tình trạng đa ối hay gặp ở thai phụ có tiểu đường thai kỳ, tỷ lệ cao gấp 4 lần so với các thai phụ bình thường.</li><li>Sẩy thai và thai lưu: Thai phụ mắc tiểu đường thai kỳ tăng nguy cơ sẩy thai tự nhiên, các thai phụ hay bị sẩy thai liên tiếp cần phải được <a href=\"https://bookingcare.vn/cam-nang/xet-nghiem-glucose-mau-la-gi-de-lam-gi-y-nghia-chi-so-p4145.html\">kiểm tra glucose máu</a> một cách thường quy.</li><li>Nhiễm khuẩn niệu: Thai phụ mắc tiểu đường thai kỳ nếu kiểm soát glucose huyết tương không tốt càng tăng nguy cơ nhiễm khuẩn niệu.</li></ul><p>Bên cạnh đó, nhiều nghiên cứu nhận thấy rằng, các phụ nữ có tiền sử tiểu đường thai kỳ có nguy cơ cao mắc <a href=\"https://bookingcare.vn/cam-nang/cac-giai-doan-cua-benh-tieu-duong-tuyp-2-p3652.html#:~:text=L%C6%B0%E1%BB%A3ng%20%C4%91%C6%B0%E1%BB%9Dng%20trong%20m%C3%A1u%20l%C3%BAc,b%E1%BB%87nh%20ti%E1%BB%83u%20%C4%91%C6%B0%E1%BB%9Dng%20tu%C3%BDp%202.\">tiểu đường tuýp 2</a> trong tương lai. Có khoảng 17% đến 63% các phụ nữ tiểu đường thai kỳ sẽ bị tiểu đường tuýp 2 trong khoảng 5 năm đến 16 năm sau sinh.</p><h3><strong>Ảnh hưởng của tiểu đường thai kỳ đối với thai nhi và trẻ sơ sinh</strong></h3><p>Tiểu đường thai kỳ ảnh hưởng lên sự phát triển của thai nhi chủ yếu vào giai đoạn ba tháng đầu và ba tháng cuối thai kỳ.</p><p>Giai đoạn 3 tháng đầu, thai có thể không phát triển, sảy thai tự nhiên, dị tật bẩm sinh, những thay đổi này thường xảy ra vào tuần thứ 6, thứ 7 của thai kỳ. Giai đoạn 3 tháng giữa, đặc biệt 3 tháng cuối thai kỳ có hiện tượng tăng tiết insulin của thai nhi, làm thai nhi tăng trưởng quá mức.</p><ul><li>Tăng trưởng quá mức và thai to</li><li>Hạ glucose huyết tương và các bệnh lý chuyển hóa ở trẻ sơ sinh: Chiếm tỷ lệ khoảng từ 15% - 25% ở trẻ sơ sinh của các thai kỳ có đái tháo đường.</li><li>Bệnh lý đường hô hấp: Hội chứng nguy kịch hô hấp.</li><li>Tăng hồng cầu: Là một tình trạng thường gặp ở trẻ sơ sinh của các thai phụ có tiểu đường thai kỳ, nồng độ hemoglobin trong máu tĩnh mạch trung tâm &gt; 20g/dl hay dung tích hồng cầu &gt; 65%.</li><li>Vàng da sơ sinh: Xảy ra khoảng 25% ở các thai phụ có tiểu đường thai kỳ.</li></ul><p>Như vậy để trả lời câu hỏi \"Không xét nghiệm tiểu đường thai kỳ có sao không?\" thì mẹ bầu nên chủ động đi xét nghiệm theo khuyến cáo của bác sĩ để đảm bảo sức khỏe cho cả mẹ và bé.</p>', 'Xét nghiệm tiểu đường thai kỳ là một xét nghiệm quan trọng giúp phát hiện sớm và điều trị kịp thời tiểu đường thai kỳ. Do đó, tất cả phụ nữ mang thai đều nên thực hiện xét nghiệm này theo khuyến cáo của bác sĩ.', NULL, NULL, 'Không xét nghiệm tiểu đường thai kỳ có sao không?', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1740933920/101244-khong-xet-nghiem-tieu-duong-thai-ky-co-sao-khong_ehmdyv.jpg', '2025-03-02 16:45:20', '2025-03-02 16:45:20'),
(6, '', '<h2><strong>Viêm dạ dày có nguy hiểm không? Biến chứng của bệnh viêm dạ dày</strong></h2><p>Những năm gần đây, tỷ lệ người <a href=\"https://bookingcare.vn/cam-nang/viem-da-day-trieu-chung-nguyen-nhan-va-cach-dieu-tri-p77.html\">mắc bệnh viêm dạ dày</a> ngày càng tăng. Nhiều người khi mới phát hiện mình bị bệnh thường băn khoăn: “Bệnh lý viêm dạ dày có nguy hiểm không? Câu trả lời là có bởi vì nếu bệnh không được điều trị sớm có thể gây ra nhiều biến chứng nguy hiểm.</p><p>3 biến chứng phổ biến của viêm dạ dày bao gồm: Loét dạ dày – tá tràng kèm hoặc không kèm xuất huyết tiêu hóa, viêm mạn tính ở dạ dày gây thiếu máu mạn và/hoặc ung thư dạ dày</p><h3><strong>Loét dạ dày tá tràng (kèm hoặc không kèm</strong><a href=\"https://bookingcare.vn/cam-nang/xuat-huyet-da-day-trieu-chung-nguyen-nhan-va-cach-chua-tri-hieu-qua-p3554.html\"><strong> xuất huyết tiêu hóa</strong></a><strong>)</strong></h3><p>Khi tình trạng viêm dạ dày, đặc biệt là bệnh dạ dày phản ứng do thuốc kháng viêm không steroid, do stress, do rượu, hoặc viêm dạ dày do vi khuẩn Helicobacter pylori (gọi tắt là H.p) có thể gây ra các vết loét ở dạ dày hoặc tá tràng.</p><p>Hẹp môn vị dạ dày là biến chứng rất hay xảy ra ở người bị loét dạ dày ở vị trí hang – môn vị, hoặc đoạn đầu của hành tá tràng. Vị trí này là nơi dạ dày đẩy thức ăn đã được nghiền nhỏ và nhào trộn với dịch vị để đưa xuống tá tràng – ruột non để tiếp tục tiêu hóa. Loét lớn (thường trên 2cm), mạn tính ở vị trí hang – môn vị và hành tá tràng làm “cửa ngõ” này bị hẹp, dẫn đến việc dạ dày phải tăng lực co bóp thức ăn, nhưng môn vị ngày càng hẹp dần. Khi lỗ môn vị bị chít hẹp, dạ dày bị giãn to chứa nhiều dịch và thức ăn cũ ứ đọng.</p><p>Người bệnh sẽ có triệu chứng đau bụng, nôn ói nhiều lần, dịch nôn là thức ăn cũ từ bữa ăn trước hoặc 2 -3 ngày trước, mùi hôi thối. Bên cạnh đó, việc nôn nhiều sẽ gây ra tình trạng mất nước, mất cân bằng điện giải, không hấp thu được dinh dưỡng từ thức ăn, sinh ra mệt mỏi. Dần dần bệnh nhân sẽ sụt cân nhiều, da dẻ khô hốc hác, mắt trũng sâu do mất nước, suy kiệt nặng nề có thể dẫn đến lơ mơ, hôn mê.</p><p>Bên cạnh đó loét dạ dày – tá tràng có thể gây ra hai biến chứng nguy hiểm chính là xuất huyết tiêu hóa và thủng ổ loét.</p><p>Bệnh nhân xuất huyết tiêu hóa biểu hiện bằng triệu chứng ói ra máu đỏ, hoặc tiêu phân đen sệt tanh, hoặc tiêu máu đỏ. Tùy vào mức độ và thời gian mất máu mà biểu hiện sẽ khác nhau. Những bệnh nhân có ổ loét nhỏ, chảy máu rỉ rả có thể không nhìn thấy được bằng mắt thường có thể dẫn đến thiếu máu mạn; bệnh nhân xanh xao, da niêm nhạt, chóng mặt khi làm việc nặng. Những bệnh nhân có ổ loét sâu, máu chảy rỉ rả hoặc phun thành tia, triệu chứng sẽ nhanh chóng, nguy kịch hơn.</p><p>Bệnh nhân sẽ có những sự thay đổi cấp tính như mạch nhanh, huyết áp tụt, bứt rứt sau đó lơ mơ, hôn mê thậm chí tử vong, tùy theo thể tích máu đã bị mất đi. Xuất huyết tiêu hóa do loét dạ dày - tá tràng là một bệnh cảnh nặng cần phải được theo dõi và can thiệp sâu bởi các bác sĩ chuyên khoa tiêu hóa, thậm chí cần phải có sự bởi các bác sĩ chuyên khoa ngoại hoặc bác sĩ mạch máu để cầm máu càng sớm càng tốt, nhằm cứu chữa tính mạng bệnh nhân.</p><p>Thủng ổ loét dạ dày tá tràng xuất hiện khi ổ loét ngày càng sâu, dẫn đến thủng. Triệu chứng rõ rệt nhất là cơn đau bụng dữ dội đột ngột, có bệnh nhân mô tả cơn đau giống như “tiếng thét giữa trời quang mây tạnh”. Là một tình trạng cấp cứu cần phải can thiệp bằng ngoại khoa, độ nặng của bệnh tăng dần lên theo mỗi giờ trì hoãn điều trị, có thể dẫn đến tử vong do nhiễm trùng nặng.</p><p>Chính vì vậy, thủng ổ loét trở thành một biến chứng nguy hiểm đáng sợ của bệnh.</p><h3><strong>Viêm mạn tính dạ dày gây thiếu máu mạn</strong></h3><p>Trong niêm mạc dạ dày, ngoài chức năng chế tiết chất nhầy, còn có chức năng tiết axit clohidric HCl và yếu tố nội tại, có nhiệm vụ vô cùng quan trọng trong hấp thu vitamin B12, một chất có vai trò trong việc tạo hồng cầu.</p><p>Trong viêm dạ dày mạn tính, do các nguyên nhân như nhiễm vi khuẩn H.p làm cho các tuyến đáy vị của dạ dày bị phá hủy, hoặc bệnh Viêm dạ dày thiếu máu ác tính – là bệnh lý tự miễn làm cho các tuyến đáy vị mất khả năng tổng hợp yếu tố nội tại và chế tiết axit. Những tình trạng này làm cho sự hấp thu Vitamin B12 bị đình trệ, mất khả năng tạo máu và tái tạo các tế bào thần kinh – làm cho cơ thể bị thiếu máu trầm trọng.</p><p><strong>Ung thư dạ dày</strong></p><p>Khi bệnh nhân xuất hiện tình trạng viêm dạ dày mạn, thường xuất hiện tình trạng chuyển sản niêm mạc ruột. Chuyển sản ruột là hiện tượng các tế bào ở dạ dày thay đổi cấu trúc để trở thành một tế bào mới mất chức năng, từ giai đoạn chuyển sản ruột này, các tế bào dạ dày có nguy cơ trở nên nghịch sản và tăng sinh không kiểm soát. Có sự liên quan chặt chẽ giữa những người bệnh có viêm dạ dày mạn, chuyển sản ruột, và nghịch sản ở dạ dày và bệnh lý ung thư dạ dày.</p><p>Do đó các tổn thương này được xem là tổn thương tiền ung thư dạ dày, trong đó nghịch sản được xem là tổn thương tiền ung thư trực tiếp.</p><p>Các đối tượng được xem là có yếu tố nguy cơ của ung thư dạ dày bao gồm: bệnh nhân viêm dạ dày do vi khuẩn H.p, tình trạng trào ngược dịch mật kéo dài, hút thuốc lá kéo dài, chế độ ăn mặn và các thực phẩm muối chua, hoặc nguy hiểm hơn là bệnh nhân sử dụng dài hạn các thuốc ức chế bơm proton (PPI) không có sự kiểm soát và theo dõi của bác sĩ điều trị.</p><p>Nếu phát hiện ung thư dạ dày sớm thì người bệnh có thể kéo dài thời gian sống từ 5 tới 10 năm. Tuy nhiên ung thư dạ dày cũng như viêm dạ dày mạn không có dấu hiệu đặc trưng, phần lớn không triệu chứng, khiến nhiều người lầm tưởng và chủ quan khi có các vấn đề ở dạ dày.</p><p>Vì vậy đa số các trường hợp bệnh nhân phát hiện khi ung thư đã vào giai đoạn cuối. Tỷ lệ phát hiện ung thư dạ dày ở vị trí bờ cong nhỏ hang vị chiếm tỷ lệ cao nhất.</p><p>Do sự nguy hiểm của ung thư dạ dày mà các chương trình tầm soát ung thư trở nên rất thiết yếu. Chỉ định tầm soát ung thư dạ dày ở:</p><ul><li>Những người hút thuốc lá lâu năm, chế độ ăn nhiều muối và thức ăn ngâm chua, nam giới trên 40 tuổi, người có các vấn đề về tiêu hóa lâu năm, hoặc đã được can thiệp phẫu thuật vùng bụng</li><li>Tiền sử gia đình có người bị ung thư dạ dày hoặc tiền sử gia đình có polyp tuyến có tính chất gia đình(FAP)</li><li>Mắc hội chứng Lynch; hội chứng Peutz-Jeghers; hội chứng Juvenile polyposis.</li></ul><p>Các phương pháp tầm soát có thể là nội soi thực quản – dạ dày – tá tràng bằng máy nội soi hiện đại, có hệ thống ánh sáng dải tần hẹp, hệ thống ánh sáng trắng nhằm phát hiện ra các tổn thương ung thư giai đoạn sớm để can thiệp kịp thời.&nbsp;</p><p>Các biến chứng của viêm dạ dày nếu xuất hiện đều rất nguy hiểm, vì vậy việc phát hiện và<a href=\"https://bookingcare.vn/cam-nang/cach-chua-viem-da-day-khoa-hoc-hieu-qua-p3553.html\"> điều trị bệnh viêm dạ dày</a> sớm là vô cùng quan trọng. Nếu để bệnh chuyển giai đoạn nặng sẽ rất khó khăn trong việc điều trị.</p><p>Tóm lại, khi bạn có các triệu chứng của các bệnh lý tiêu hóa, dù là triệu chứng nhẹ thoáng qua, cần được đến cơ sở y tế để được bác sĩ chuyên khoa tiêu hóa thăm khám, theo dõi, đưa ra các chỉ định thích hợp để được chẩn đoán và điều trị kịp thời.</p><p><br>&nbsp;</p>', 'Viêm dạ dày là căn bệnh tiêu hóa thường gặp, nếu không được thăm khám và điều trị đúng cách, bệnh viêm dạ dày sẽ trở nên vô cùng nguy hiểm với nhiều biến chứng khó lường.', NULL, NULL, 'Viêm dạ dày có nguy hiểm không? Biến chứng của bệnh viêm dạ dày', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1740933991/142805-viem-da-day-co-nguy-hiem-khong_isoaau.png', '2025-03-02 16:46:32', '2025-03-02 16:46:32');

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` int(11) NOT NULL,
  `statusId` int(11) DEFAULT NULL,
  `doctorId` int(11) DEFAULT NULL,
  `patientId` int(11) DEFAULT NULL,
  `email` int(11) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `timeType` varchar(255) DEFAULT NULL,
  `bookFor` varchar(255) DEFAULT NULL,
  `nameScheduler` varchar(255) DEFAULT NULL,
  `phoneNumberScheduler` int(11) DEFAULT NULL,
  `namePatient` varchar(255) DEFAULT NULL,
  `IDNumber` int(11) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `phoneNumber` int(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `reason` varchar(255) DEFAULT NULL,
  `nameDoctor` varchar(255) DEFAULT NULL,
  `exactTime` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`id`, `statusId`, `doctorId`, `patientId`, `email`, `date`, `timeType`, `bookFor`, `nameScheduler`, `phoneNumberScheduler`, `namePatient`, `IDNumber`, `gender`, `phoneNumber`, `address`, `reason`, `nameDoctor`, `exactTime`, `createdAt`, `updatedAt`) VALUES
(1, 0, 12, NULL, 34234, '1741107600000', 'T5', 'others', 'da', 0, 'qweq', 0, '', 0, 'e', 'ádas', 'Tiến sĩ, Vũ Văn Hòa', '13:00 - 14:00 - Wednesday - 05/03/2025', '2025-03-02 01:08:08', '2025-03-02 01:08:08'),
(2, 0, 12, NULL, 0, '1741107600000', 'T2', 'self', '', 0, 'anh nguyen', 132494523, '', 792207233, '31c ly tu trong, ho chi minh', 'dau dau kinh nien', 'Tiến sĩ, Vũ Văn Hòa', '9:00 - 10:00 - Wednesday - 05/03/2025', '2025-03-02 01:09:55', '2025-03-02 01:09:55'),
(3, 0, 12, NULL, 0, '1741107600000', 'T3', 'self', '', 0, 'anh hung vo', 132494523, '', 792207233, '31c ly tu trong, ho chi minh', 'dau bung', 'Tiến sĩ, Vũ Văn Hòa', '10:00 - 11:00 - Wednesday - 05/03/2025', '2025-03-02 01:10:24', '2025-03-02 01:10:24'),
(4, 0, 12, NULL, 0, '1741107600000', 'T4', 'self', '', 0, 'anh hung vo', 132494523, '', 792207233, 'nguyen hue, ho chi minh', '', 'Tiến sĩ, Vũ Văn Hòa', '11:00 - 12:00 - Wednesday - 05/03/2025', '2025-03-02 01:10:47', '2025-03-02 01:10:47'),
(5, 0, 12, NULL, 0, '1741107600000', 'T1', 'self', '', 0, 'anh hung vo', 132494523, '', 792207233, 'nguyen hue, ho chi minh', '', 'Tiến sĩ, Vũ Văn Hòa', '8:00 - 9:00 - Wednesday - 05/03/2025', '2025-03-02 01:12:35', '2025-03-02 01:12:35');

-- --------------------------------------------------------

--
-- Table structure for table `clinic`
--

CREATE TABLE `clinic` (
  `id` int(11) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `imageLogo` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `clinic`
--

-- INSERT INTO `clinic` (`id`, `address`, `description`, `image`, `imageLogo`, `name`, `createdAt`, `updatedAt`) VALUES
-- (1, 'Cơ sở 1: Số 43 Quán Sứ, Hoàn Kiếm, Hà Nội.  Cơ sở 2: Tựu Liệt, Tam Hiệp, Thanh Trì, Hà Nội.', '<p>Bệnh viện K là cơ sở chuyên khoa ung bướu hàng đầu Việt Nam, với đội ngũ chuyên gia dày dạn kinh nghiệm và cơ sở vật chất hiện đại. Bệnh viện luôn cập nhật các phương pháp tiên tiến trong chẩn đoán và điều trị, đồng thời cung cấp các gói tầm soát ung thư đa dạng, phù hợp với nhiều đối tượng, giúp người bệnh yên tâm chăm sóc sức khỏe. Bệnh viện hiện có 85 viện, trung tâm, khoa, phòng, bộ phận trực thuộc với hơn 1.700 cán bộ, người lao động.</p><p>Hiện nay, 3 cơ sở khám chữa bệnh trên địa bàn Hà Nội đó là:</p><ul><li>Cơ sở 1: Số 43 Quán Sứ, Hoàn Kiếm, Hà Nội.</li><li>Cơ sở 2: Tựu Liệt, Tam Hiệp, Thanh Trì, Hà Nội.</li><li>Cơ sở 3: Số 30 Cầu Bươu, Thanh Trì, Hà Nội.</li></ul><p><i><strong>Lưu ý</strong></i>: Cơ sở 9A - 9B Phan Chu Trinh của Bệnh viện K sẽ tạm dừng hoạt động khám bệnh kể từ ngày 20/03/2024 và chuyển về cơ sở số 43 Quán Sứ, Hàng Bông, Hoàn Kiếm, Hà Nội. Cơ sở số 43 Quán Sứ của Bệnh viện K sẽ tiếp nhận khám chữa bệnh từ tháng 4/2024. Tại đây bệnh viện sẽ cung cấp các dịch vụ khám bệnh, chữa bệnh đầy đủ chuyên khoa đáp ứng nhu cầu của người bệnh.</p><p><strong>Chức năng nhiệm vụ</strong></p><ul><li>Cấp cứu, khám bệnh, chữa bệnh, phòng bệnh</li><li>Phục hồi chức năng chuyên khoa ung bướu và các bệnh trong khả năng của bệnh viện cho người bệnh trong nước, nước ngoài.</li><li>Đào tạo và tham gia đào tạo cán bộ y tế, làm công tác chỉ đạo tuyến, tham gia phòng chống dịch bệnh theo nhiệm vụ được Bộ Y tế phân công.</li><li>Nghiên cứu khoa học, triển khai ứng dụng khoa học, công nghệ, kỹ thuật hiện đại để phục vụ người bệnh và phục vụ công tác nghiên cứu khoa học và đào tạo nhân lực y tế.</li></ul><p><strong>Thời gian làm việc</strong></p><p>Người bệnh có thể đăng kí khám các vấn đề ung bướu với các bác sĩ chuyên khoa:</p><ul><li>Khám thường, khám có BHYT: từ Thứ 2 - Thứ 6 (7h30 - 16h30)</li><li>Khám dịch vụ, khám theo yêu cầu: từ Thứ 2 - Thứ 7 (7h30 - 17h00)</li></ul><p><strong>Lưu ý quan trọng</strong></p><ul><li>Bệnh viện K có 3 cơ sở tại Hà Nội, người bệnh nên lựa chọn cơ sở khám gần nhất hoặc liên hệ bác sĩ đã điều trị trước khi tới khám.</li><li>Đăng ký khám qua tổng đài tư vấn và hỗ trợ người bệnh 1900886684 (Giờ hành chính các ngày từ Thứ 2 - Thứ 6)</li><li>Chuẩn bị giấy tờ gồm: Căn cước công dân, hồ sơ khám bệnh, BHYT và giấy chuyển tuyến (nếu có).</li><li>Người bệnh nên đi cùng 01 người nhà để thuận tiện trong quá trình khám chữa bệnh và giảm quá tải trong Bệnh viện.</li><li>Người bệnh và người nhà người bệnh nên đeo khẩu trang, giữ gìn vệ sinh chung và thực hiện các hướng dẫn, quy định tại Bệnh viện.</li></ul><h2>VỊ TRÍ BỆNH VIỆN</h2><p>Hiện nay, 3 cơ sở khám chữa bệnh trên địa bàn Hà Nội đó là:</p><ul><li>Cơ sở 1: Số 43 Quán Sứ, Hoàn Kiếm, Hà Nội.</li><li>Cơ sở 2: Tựu Liệt, Tam Hiệp, Thanh Trì, Hà Nội.</li><li>Cơ sở 3: Số 30 Cầu Bươu, Thanh Trì, Hà Nội.</li></ul><p>Người bệnh nên lựa chọn cơ sở khám gần nhất hoặc liên hệ bác sĩ đã điều trị trước khi tới khám.</p><h2>KHÁM VÀ ĐIỀU TRỊ</h2><p>Khám, sàng lọc, điều trị các bệnh lý ung thư:</p><ul><li>Ung thư đầu cổ</li><li>Ung thư tuyến giáp</li><li>Ung thư phổi</li><li>Ung thư gan</li><li>Ung thư đường tiêu hóa</li><li>Ung thư buồng trứng</li><li>Ung thư vú</li><li>Ung thư cổ tử cung</li><li>Ung thư tuyến tiền liệt</li></ul>', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1737557189/082714benh-vien-k-co-so-tan-trieu-800x450_nsbnte.jpg', NULL, 'Bệnh viện K', '2025-01-22 14:46:32', '2025-01-22 14:46:32'),
-- (2, 'Tầng 2 toà nhà 3 tầng Thôn Bầu - Kim Chung - Đông Anh - Hà Nội', '<p>Bệnh viện Nhiệt đới Trung ương là tuyến cao nhất khám, chữa bệnh, phục hồi chức năng về các nhóm bệnh nhiệt đới</p><p><strong>Chức năng, nhiệm vụ</strong></p><ul><li>Khám, điều trị cho bệnh nhân nội trú, ngoại trú cho bệnh nhân mắc các nhóm bệnh nhiệt đới.</li><li>Đào tạo nhân lực y tế, chỉ đạo tuyến về khám, điều trị các nhóm bệnh nhiệt đới.</li><li>Phòng chống dịch bệnh các nhóm bệnh nhiệt đới.</li><li>Nghiên cứu khoa học.</li><li>Triển khai ứng dụng khoa học, công nghệ, kỹ thuật hiện đại phục vụ người bệnh.</li><li>Hợp tác quốc tế&nbsp;chia sẻ thông tin, xây dựng&nbsp; mạng lưới cảnh báo dịch bệnh.</li></ul><p><strong>Thời gian tiếp nhận khám bệnh</strong></p><p>Người bệnh có thể đăng kí khám bệnh tại Khu khám theo yêu cầu, Bệnh viện Bệnh nhiệt đới Trung ương từ thứ 2 đến chủ nhật vào giờ hành chính:</p><ul><li>Thời gian buổi sáng: 7h30 - 11h00</li><li>Thời gian buổi chiều: 13h30 - 16h30</li></ul><p><strong>Lưu ý quan trọng</strong></p><ul><li>Người bệnh nên mang theo kết quả đã khám trong vòng 6 tháng (nếu có).</li><li>Để quá trình thăm khám được hiệu quả, người bệnh nên chuẩn bị một số câu hỏi liên quan đến tình trạng sức khỏe và nên ghi chép lại (nếu được).</li><li>Nên có người nhà đi cùng trong trường hợp người bệnh là trẻ em, người già hoặc người bệnh nặng.</li></ul><h2>KHÁM VÀ ĐIỀU TRỊ</h2><p>Bệnh viện tiếp nhận khám, chẩn đoán, điều trị và chăm sóc cho người bệnh mắc các các nhóm bệnh nhiệt đới:</p><ul><li>Các bệnh do vi khuẩn, ký sinh trùng, các bệnh nhiễm trùng chưa xác định rõ nguyên nhân gây bệnh</li><li>Các bệnh theo mùa như: quai bị, cúm, chân tay miệng, thủy đậu, sởi...</li><li>Các bệnh do ký sinh trùng: giun chỉ, sốt rét</li><li>Các bệnh viêm gan virus: Viêm gan A, B, C</li></ul><p>Ngoài ra, bệnh viện tiếp nhận các bệnh nhân cấp cứu nặng có chức năng sống bị đe dọa cần thiết phải hỗ trợ bằng các thiết bị kỹ thuật y tế đặc biệt thuộc lĩnh vực các bệnh Truyền nhiễm.</p><h2>THẾ MẠNH CHUYÊN MÔN</h2><p>Bệnh viện Bệnh Nhiệt đới Trung ương&nbsp;là nơi điều trị các bệnh Nhiệt đới có chất lượng hàng đầu và được sự tin cậy của người bệnh. Bệnh viện từng dập tắt bệnh dịch nguy hiểm như dịch sởi, sốt phát ban, dịch tiêu chảy.... Một số nhóm bệnh thế mạnh được điều trị thường xuyên và hiệu quả tại bệnh viện phải kể đến như:</p><ul><li>Các bệnh viêm gan virus</li><li>Bệnh do ký sinh trùng</li><li>Bệnh cúm mùa</li></ul><p>Trang thiết bị xét nghiệm hiện đại của bệnh viện là một trong những yếu tố quan trọng hỗ trợ khám và điều trị các mặt bệnh này. Bệnh viện thực hiện hầu hết các kỹ thuật xét nghiệm chuyên sâu, hiện đại giúp tìm ra căn nguyên của bệnh để tiến hành điều trị một cách hiệu quả.</p>', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1737557429/110853-bv-nhiet-doi-tw_uojn44.png', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1737557431/110134logo-nhtd_cqnou9.jpg', 'Bệnh viện Bệnh Nhiệt đới Trung ương', '2025-01-22 14:50:31', '2025-01-22 14:50:31'),
-- (3, '414 - 420 Cao Thắng, Phường 12, Quận 10, TP. Hồ Chí Minh', '<p>Diag là một trong những trung tâm xét nghiệm uy tín tại Việt Nam với hơn 20 năm trong ngành dịch vụ y tế. Diag cung cấp giải pháp toàn diện cho các xét nghiệm y khoa, đảm bảo chất lượng chẩn đoán cho mọi bệnh nhân.</p><ul><li>Dàn hệ thống máy xét nghiệm tự động đảm bảo kết quả nhanh chóng và chính xác.</li><li>Sử dụng kỹ thuật lấy máu chân không - giảm cảm giác đau, giảm nguy cơ vỡ ven và vỡ hồng cầu.</li><li>Danh mục xét nghiệm đa dạng phục vụ theo từng nhu cầu thăm khám, kiểm tra sức khỏe.</li><li>Mạng lưới cơ sở lấy mẫu xét nghiệm rộng lớn trên các quận và một số tỉnh thành miền nam Việt Nam - thuận tiện cho việc di chuyển.</li><li>Các kết quả trong phòng thí nghiệm được quản lý thông qua hệ thống nội kiểm (IQC) và ngoại kiểm (EQC) giúp quá trình xét nghiệm và trả kết quả được chính xác.</li></ul><p>Trung tâm xét nghiệm Diag Laboratories được trang bị phòng xét nghiệm tân tiến với nhiều thiết bị, máy móc hiện đại, dàn hệ thống máy xét nghiệm tự động hiện đại của hãng Abbott. Các trang thiết bị khác của phòng xét nghiệm Diag đều đến từ các thương hiệu nổi tiếng, hiện đại và chuẩn quốc tế như Roche, Sysmex, Thermo Fisher, Arkray.</p><p><strong>Địa chỉ: </strong>Trụ sở chính nằm tại&nbsp;414 - 420 Cao Thắng, Phường 12, Quận 10, TP. Hồ Chí Minh</p><p>Trung tâm xét nghiệm Diag Laboratories với mạng lưới hơn 30 cơ sở lấy mẫu&nbsp;xét nghiệm rộng lớn trên các quận và một số tỉnh thành miền nam Việt Nam - thuận tiện cho việc di chuyển.</p><p><strong>Thời gian làm việc:&nbsp;</strong></p><ul><li>Giờ mở cửa: 6h00 mỗi ngày</li><li>Giờ đóng cửa:&nbsp;<ul><li>Thứ 7: 19h00 hoặc 21h00 (Tùy từng cơ sở)</li><li>Chủ nhật: 12h00 hoặc 15h00 (Tùy từng cơ sở), cơ sở Quận 10: 19h00</li></ul></li></ul><p><strong>Hình thức thanh toán:</strong>&nbsp;</p><ul><li>Trung tâm nhận thanh toán: Tiền mặt, chuyển khoản, thanh toán thẻ</li><li>Trung tâm có xuất hóa đơn đỏ trong vòng 24 giờ</li></ul><h2>THẾ MẠNH CHUYÊN MÔN</h2><p>Trung tâm xét nghiệm Diag Laboratories&nbsp;cung cấp giải pháp toàn diện cho các xét nghiệm y khoa, đảm bảo chất lượng chẩn đoán cho mọi khách hàng. Bên cạnh đó, trung tâm còn lên sẵn một số gói xét nghiệm để khách hàng thuận tiện trong việc lựa chọn và thực hiện xét nghiệm kiểm tra sức khỏe định kỳ. Một số gói xét nghiệm nổi bật như:</p><ul><li>Gói xét nghiệm tổng quát nâng cao</li><li>Gói xét nghiệm tổng quát cơ bản</li><li>Gói xét nghiệm tầm soát dấu ấn ung thư nữ</li><li>Gói xét nghiệm tầm soát dấu ấn ung thư nam</li><li>Gói xét nghiệm tầm soát dị ứng</li><li>Gói xét nghiệm tầm soát sức khỏe phụ nữ nâng cao</li><li>Gói xét nghiệm tầm soát viêm gan nâng cao</li><li>Gói xét nghiệm tầm soát viêm gan cơ bản</li><li>Gói xét nghiệm ký sinh trùng cơ bản</li><li>Gói xét nghiệm tầm soát tuyến giáp chuyên sâu</li><li>Gói xét nghiệm tầm soát bệnh lý tim mạch chuyên sâu</li><li>Gói xét nghiệm tầm soát bệnh lý tiểu đường</li></ul><h2>TRANG THIẾT BỊ</h2><p>Diag hợp tác với các đối tác cung cấp IVD lớn (IVD - thiết bị y tế chẩn đoán in vitro (IVD) là các xét nghiệm có thể phát hiện ra các bệnh, bao gồm bệnh truyền nhiễm) trên toàn cầu để xử lý các mẫu xét nghiệm, đưa đến cho khách hàng kết quả xét nghiệm mang tính chính xác cao.</p><p>Trung tâm có phòng xét nghiệm tân tiến với nhiều thiết bị, máy móc hiện đại của Abbott,&nbsp;Roche, Sysmex, Thermo Fisher, Arkray.</p><p>Hiện tại, trung tâm đã ứng dụng công nghệ lấy máu chân không mang lại nhiều lợi ích cho khách hàng:</p><ul><li>Rút ngắn thời gian lấy máu xuống còn 2 - 3 phút</li><li>Giảm nguy cơ vỡ hồng cầu do máu được đưa trực tiếp vào ống (máu không tiếp xúc với không khí)</li><li>Tự động lấy đúng lượng máu cần thiết, chất lượng máu đảm bảo vì được tiếp xúc ngay với chất phụ gia trong ống</li><li>Không gây bệnh truyền nhiễm</li></ul><h2>VỊ TRÍ</h2><p>Trung tâm xét nghiệm Diag Laboratories với mạng lưới hơn 30 cơ sở lấy mẫu&nbsp;xét nghiệm rộng lớn trên các quận và một số tỉnh thành miền nam Việt Nam như:</p><ul><li>Quận 1, TP. Hồ Chí Minh</li><li>Quận 2, TP. Hồ Chí Minh</li><li>Quận 4, TP. Hồ Chí Minh</li><li>Quận 5, TP. Hồ Chí Minh</li><li>Quận 6, TP. Hồ Chí Minh</li><li>Quận 7, TP. Hồ Chí Minh</li><li>Quận 8, TP. Hồ Chí Minh</li><li>Quận 9, TP. Hồ Chí Minh</li><li>Quận 10, TP. Hồ Chí Minh</li><li>Quận 11, TP. Hồ Chí Minh</li><li>Quận 12, TP. Hồ Chí Minh</li><li>Quận Phú Nhuận, TP. Hồ Chí Minh</li><li>Quận Thủ Đức, TP. Hồ Chí Minh</li><li>Quận Bình Tân, TP. Hồ Chí Minh</li><li>Quận Tân Phú, TP. Hồ Chí Minh</li><li>Quận Bình Thạnh, TP. Hồ Chí Minh</li><li>Quận Gò Vấp, TP. Hồ Chí Minh</li><li>Quận Ninh Kiều, TP. Cần Thơ</li><li>TP. Bà Rịa, Bà Rịa Vũng Tàu</li><li>Thị trấn Long Thành, Đồng Nai</li><li>TP. Mỹ Tho, Tiền Giang</li><li>TP. Dĩ An, Bình Dương</li><li>TP. Thủ Dầu Một, Bình Dương</li><li>TP. Biên Hòa, Đồng Nai</li></ul>', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1737557518/160340-logo-diag_uymond.png', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1737557519/160340-logo-diag_mtabsl.png', 'Trung tâm xét nghiệm Diag Laboratories', '2025-01-22 14:52:00', '2025-01-22 14:52:00'),
-- (4, '16 Nguyễn Như Đổ, Văn Miếu, Đống Đa, Hà Nội', '<p>Bệnh viện Đa khoa Hồng Hà là bệnh viện đa khoa tư nhân được thành lập từ năm 2000. Bệnh viện cung cấp đầy đủ, toàn diện các dịch vụ thăm khám chữa bệnh, với gần 20 chuyên khoa đáp ứng mọi nhu cầu thăm khám của khách hàng.&nbsp;Các chuyên khoa mũi nhọn của bệnh viện bao gồm: Sản phụ khoa, Nam khoa, Vô sinh hiếm muộn, Phẫu thuật thẩm mỹ LGBT, Nội khoa, Ngoại khoa.</p><p><strong>Bệnh viện Hồng Hà là nơi quy tụ của đội ngũ y bác sĩ giàu chuyên môn, kinh nghiệm, tận tâm và hết sức nhiệt tình với bệnh nhân:</strong></p><ul><li>Bác sĩ Chuyên khoa II Đào Thị Thu Hiền -&nbsp;Gần 40 năm kinh nghiệm về Sản phụ khoa - Vô sinh hiếm muộn, từng công tác 30 năm tại Bệnh viện Phụ sản Trung ương</li><li>Bác sĩ Chuyên khoa I Hà Thị Hồng Vân -&nbsp;Gần 15 năm kinh nghiệm về Sản phụ khoa - Vô sinh hiếm muộn</li><li>Thạc sĩ, Bác sĩ Nguyễn Tiến Sơn -&nbsp;Hơn 20 năm kinh nghiệm về Tai mũi họng và Ngoại khoa, Nguyên Phó Giám đốc&nbsp;Bệnh viện Đa khoa Mộc Châu, hiện là Giám đốc Bệnh viện Đa khoa Hồng Hà</li><li>Thạc sĩ, Bác sĩ Nguyễn Văn Thìn -&nbsp;Hơn 20 năm kinh nghiệm về bệnh lý Nội khoa - Tiêu hóa - Bệnh viêm gan</li><li>Bác sĩ Chuyên khoa I Nguyễn Đình Thuận -&nbsp;Hơn 10 năm kinh nghiệm về bệnh lý Nam học</li><li>...</li></ul><p><strong>Tại Bệnh viện Hồng Hà cơ sở vật chất cũng như trang thiết bị y tế được đầu tư hiện đại. Bệnh viện nhập khẩu những công nghệ, máy móc mới nhất từ các nước có nền y học tiên tiến như Anh, Pháp, Mỹ, Singapore…</strong></p><ul><li>Công nghệ chẩn đoán chính xác bằng kiểm tra thần kinh BIO</li><li>Hệ thống chụp mạch số hóa xóa nền (DSA)</li><li>Công nghệ bao Leep dùng sóng cao tầng qua dây dẫn Loop</li><li>Máy CT Scanner xoắn ốc</li><li>Hệ thống chụp cộng hưởng từ (MRI)…</li></ul><p><strong>Địa chỉ:</strong> 16 Nguyễn Như Đổ, Văn Miếu, Đống Đa, Hà Nội</p><p><strong>Thời gian làm việc</strong></p><p>Khách hàng có thể đăng kí khám với các bác sĩ tại Bệnh viện Đa khoa Hồng Hà vào tất cả các ngày trong tuần từ Thứ 2 đến Chủ nhật:</p><ul><li>Sáng: 7h30 - 12h00</li><li>Chiều: 13h00 - 17h00</li></ul><p><strong>Hình thức thanh toán chi phí khám chữa bệnh</strong></p><ul><li>Chi trả trực tiếp bằng tiền mặt</li><li>Chi trả qua các loại thẻ ATM</li></ul><h2>THẾ MẠNH CHUYÊN MÔN</h2><p>Các chuyên khoa mũi nhọn của bệnh viện bao gồm:</p><ul><li>Sản phụ khoa</li><li>Nam khoa</li><li>Vô sinh hiếm muộn</li><li>Phẫu thuật thẩm mỹ LGBT</li><li>Nội khoa</li><li>Ngoại khoa</li></ul><h2>TRANG THIẾT BỊ</h2><p>Bệnh viện nhập khẩu những công nghệ, máy móc mới nhất từ các nước có nền y học tiên tiến như Anh, Pháp, Mỹ, Singapore…</p><ul><li>Hệ thống các phòng mổ vô khuẩn một chiều được đánh giá là tốt nhất hiện nay. Những phòng mổ này có khả năng lọc không khí, khử khuẩn, cung cấp khí tươi. Giúp các bệnh nhân khi tiến hành phẫu thuật tránh được tình trạng nhiễm khuẩn, bình phục nhanh chóng ngay sau đó</li><li>Công nghệ chẩn đoán chính xác bằng kiểm tra thần kinh BIO</li><li>Hệ thống chụp mạch số hóa xóa nền (DSA)</li><li>Công nghệ bao Leep dùng sóng cao tầng qua dây dẫn Loop</li><li>Máy CT Scanner xoắn ốc</li><li>Hệ thống chụp cộng hưởng từ (MRI)…</li></ul><figure class=\"image\"><img src=\"https://cdn.bookingcare.vn/fo/2022/10/03/100240-phong-mo-vo-khuan.jpg\" alt=\"\" srcset=\"https://cdn.bookingcare.vn/fo/w384/2022/10/03/100240-phong-mo-vo-khuan.jpg 384w, https://cdn.bookingcare.vn/fo/w640/2022/10/03/100240-phong-mo-vo-khuan.jpg 640w, https://cdn.bookingcare.vn/fo/w750/2022/10/03/100240-phong-mo-vo-khuan.jpg 750w, https://cdn.bookingcare.vn/fo/w828/2022/10/03/100240-phong-mo-vo-khuan.jpg 828w, https://cdn.bookingcare.vn/fo/w1080/2022/10/03/100240-phong-mo-vo-khuan.jpg 1080w, https://cdn.bookingcare.vn/fo/w1200/2022/10/03/100240-phong-mo-vo-khuan.jpg 1200w\" sizes=\"100vw\" width=\"800\"></figure><p><i>Hệ thống phòng mổ vô khuẩn một chiều của bệnh viện</i></p><h2>VỊ TRÍ</h2><p>Bệnh viện nằm trên đường Nguyễn Như Đổ, cách ngã ba Nguyễn Như Đổ - Trần Quý Cáp khoảng 100m.</p><figure class=\"image\"><img src=\"https://cdn.bookingcare.vn/fo/2022/10/03/100826-map-hong-ha.png\" alt=\"\" srcset=\"https://cdn.bookingcare.vn/fo/w384/2022/10/03/100826-map-hong-ha.png 384w, https://cdn.bookingcare.vn/fo/w640/2022/10/03/100826-map-hong-ha.png 640w, https://cdn.bookingcare.vn/fo/w750/2022/10/03/100826-map-hong-ha.png 750w, https://cdn.bookingcare.vn/fo/w828/2022/10/03/100826-map-hong-ha.png 828w, https://cdn.bookingcare.vn/fo/w1080/2022/10/03/100826-map-hong-ha.png 1080w, https://cdn.bookingcare.vn/fo/w1200/2022/10/03/100826-map-hong-ha.png 1200w\" sizes=\"100vw\" width=\"800\"></figure><p><br>&nbsp;</p>', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1737557622/092048-benh-vien-da-khoa-hong-ha_sfhj2q.jpg', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1737557625/090803-22ddc1d1329bf5c5ac8a_stbp2f.jpg', 'Bệnh viện Đa khoa Hồng Hà', '2025-01-22 14:53:46', '2025-01-22 14:53:46'),
-- (5, '29 Hàn Thuyên, Phạm Đình Hổ, Hai Bà Trưng, Hà Nội', '<p>Gói khám bao gồm: Khám Nội tổng quát; Khám Nội soi Tai - Mũi - Họng; Xét nghiệm máu, định lượng sắt, đường máu, mỡ máu, xét nghiệm Gout; Điện giải đồ; Đánh giá chức năng gan, thận; Xét nghiệm viêm gan B; Tổng phân tích nước tiểu; Siêu âm ổ bụng tổng quát; Điện tim đồ; Đo loãng xương; Chụp X-quang tim phổi thẳng. Gói khám tại Bệnh viện Đa khoa Hà Nội.</p>', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1737559357/102240-bvdk-ha-noi_ngymsk.jpg', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1737559359/145205-logo-da-khoa-ha-noi_dhjist.png', 'Bệnh viện Đa khoa Hà Nội', '2025-01-22 15:22:41', '2025-01-22 15:22:41'),
-- (6, '7B/31 Thành Thái, Phường 14, Quận 10, TP.HCM', '<p><strong>Trung tâm sức khỏe Nam giới Men’s Health</strong> với sứ mệnh trở thành Trung tâm Nam khoa đầu tiên tại Việt Nam, cung cấp các phác đồ điều trị để chăm sóc cả thể chất lẫn tâm lý giúp cho nam giới có được một bản lĩnh đàn ông đích thực và hạnh phúc gia đình toàn diện với tôn chỉ “Giúp bệnh nhân hiểu đúng để sống đúng và sống khỏe”. Trung tâm cung cấp các dịch vụ chăm sóc sức khỏe nam giới toàn diện – chuyên nghiệp dẫn đầu về chất lượng chuyên môn,&nbsp;đi đầu trong ứng dụng công nghệ và đặc biệt là dịch vụ&nbsp;điều trị bao quy đầu, sùi mào gà, xuất tinh sớm, sức khỏe sinh sản<strong>&nbsp;…</strong>&nbsp;theo tiêu chuẩn Hoa Kỳ.</p><p><strong>Đội ngũ Y - Bác sĩ chuyên môn sâu, nhiều năm kinh nghiệm:</strong></p><ul><li>Bác sĩ Chuyên khoa II Vũ Văn Ty - 35 năm kinh nghiệm trong chuyên khoa Tiết niệu; Phó Chủ tịch Hội Niệu - Thận học TP. HCM; Hội viên Hội niệu khoa Thế giới</li><li>Tiến sĩ, Bác sĩ Chuyên khoa II Trà Anh Duy - Công tác tại Bệnh viện Bình Dân; từng tu nghiệp tại Singapore, Hoa Kì; Thành viên Hội Niệu Thế giới, Hội Y học giới tính Thế giới</li><li>Tiến sĩ, Bác sĩ Vũ Hồng Thịnh - Nguyên&nbsp;Trưởng phân khoa Niệu – Nam Khoa, Bệnh viện ĐH Y Dược TP. HCM</li></ul><p><strong>Hệ thống trang thiết bị hiện đại đồng bộ phục vụ cho công tác chẩn đoán và điều trị hiệu quả.</strong></p><p><strong>Địa chỉ:&nbsp;</strong>7B/31 Thành Thái, Phường 14, Quận 10, TP. HCM</p><p><strong>Thời gian làm việc:</strong></p><ul><li>Tất cả các ngày trong tuần: 7h -20h</li></ul><p><strong>Phương thức thanh toán:&nbsp;</strong></p><ul><li>Trung tâm nhận thanh toán bằng hình thức: Tiền mặt và chuyển khoản</li><li>Phòng khám không xuất hóa đơn đỏ</li></ul>', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1737559456/105426-1-phong-kham-nam-khoa-mens-health-1-800x534_wik6w7.jpg', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1737559456/104627-logo-menhealthfinal-crop-clip_pgrjar.png', 'Trung tâm sức khỏe Nam Giới Men\'s Health ', '2025-01-22 15:24:17', '2025-01-22 15:24:17'),
-- (7, 'Số 4 và 5 - Nhà C2, Làng Quốc tế Thăng Long, Cầu Giấy, Hà Nội', '<p><strong>Đa khoa Quốc tế Việt - Nga</strong> là thành viên trực thuộc Tập đoàn Y tế Việt - Nga với chuỗi bệnh viện mắt có số lượng ca mổ Relex Smile đứng đầu Đông Nam Á, số lượng ca phẫu thuật phaco với thủy tinh thể đa tiêu đứng đầu Việt Nam</p><p>Đa khoa Quốc tế Việt - Nga quy tụ đội ngũ bác sĩ và chuyên gia y tế đầu ngành của Việt Nam và Liên Bang Nga, có trình độ chuyên môn cao:</p><ul><li><strong>Tiến sĩ, Bác sĩ Lilita - ứng cử viên khoa học với hơn 22 năm kinh nghiệm trong nghề với hơn 50,600 ca nội soi thành công, trong đó bao gồm cả các ca nội soi dành cho trẻ em từ 3 tuổi</strong></li><li>Bác sĩ Chuyên khoa II Nguyễn Anh Ngọc:&nbsp;hơn 40 năm kinh nghiệm trong lĩnh vực Tim mạch, Đang là bác sĩ&nbsp;tại khoa Khám Yêu cầu Viện Tim Mạch, Bệnh viện Bạch Mai</li><li>Bác sĩ Chuyên khoa I Vũ Thị Thanh Bình:&nbsp;40 năm kinh nghiệm trong lĩnh vực Chuyên khoa Tai mũi họng, Nguyên Trưởng khoa liên chuyên khoa Tai mũi họng - Mắt - Răng hàm mặt, Bệnh viện Xây Dựng thuộc bộ Xây dựng Hà Nội</li></ul><p>Với sự bảo trợ về chuyên môn trong chương trình hợp tác y tế giữa Việt Nam và Liên Bang Nga, Đa khoa Quốc tế Việt - Nga đã không ngừng ứng dụng khoa học công nghệ hiện đại trong khám chữa bệnh, nổi bật như:</p><ul><li>Nội soi tiêu hóa độc quyền ứng dụng trí tuệ nhân tạo AI&nbsp;</li><li>Từ trường siêu dẫn cánh tay robot trong điều trị cơ xương khớp</li><li>Siêu âm đàn hồi mô trong tầm soát ung thư tổng thể giai đoạn sớm</li></ul><p>Đa khoa Quốc tế Việt - Nga với chi phí khám chữa bệnh luôn tối ưu nhất với chất lượng dịch vụ tốt nhất. Có thể tra cứu kết quả khám chữa bệnh trực tuyến trên nền tảng 4.0. Chuyển tuyến nhanh gọn Liên kết với các bệnh viện lớn, giúp bệnh nhân chuyển tuyến nhanh chóng, thủ tục gọn nhẹ trong trường hợp cần chữa trị chuyên sâu.</p><p><strong>Địa chỉ:</strong>&nbsp;Số 4 và 5 - Nhà C2 - Làng Quốc tế Thăng Long - Cầu Giấy - Hà Nội</p><p><strong>Thời gian làm việc</strong>:&nbsp;8h00 - 17h30 hàng ngày</p><p><strong>Bảo hiểm áp dụng:</strong></p><ul><li>Phòng khám chưa sử dụng bảo hiểm Y tế và bảo hiểm bảo lãnh</li><li>Phòng khám có xuất hóa đơn đỏ</li></ul><p><strong>Hình thức thanh toán:</strong>&nbsp;</p><ul><li>Phòng khám nhận thanh toán bằng hình thức: Tiền mặt, chuyển khoản, quẹt thẻ</li></ul><h2>THẾ MẠNH CHUYÊN MÔN</h2><p>Đa khoa Quốc Tế Việt Nga với 14 chuyên khoa trong đó có các chuyên khoa trọng điểm là:</p><ul><li>Nội tiêu hoá</li><li>Tai Mũi Họng</li><li>Tim mạch</li><li>Phục hồi chức năng</li><li>Tầm soát ung thư</li><li>Sản phụ khoa&nbsp;</li><li>Nội chung&nbsp;</li></ul><h2>TRANG THIẾT BỊ</h2><p>Phòng khám Đa khoa Quốc Tế Việt Nga trang bị những trang thiết bị hiện đại phục vụ trong quá trình thăm khám và điều trị. Đa khoa Quốc Tế Việt Nga kết hợp Trí Tuệ Nhân Tạo AI vào quá trình nội soi, đảm bảo kết quả chính xác và nhanh chóng, giúp bạn yên tâm về tình trạng sức khỏe.</p><ul><li>Dàn máy nội soi tiêu hóa Pentax i5500c được biết đến là hệ thống nội soi hiện đại nhất, độc quyền ứng dụng trí tuệ nhân tạo A.I vào quá trình nội soi, đảm bảo kết quả chính xác và nhanh chóng</li></ul><figure class=\"image\"><img src=\"https://cdn.bookingcare.vn/fo/2023/10/13/134218-noi-soi.jpg\" alt=\"\" srcset=\"https://cdn.bookingcare.vn/fo/w384/2023/10/13/134218-noi-soi.jpg 384w, https://cdn.bookingcare.vn/fo/w640/2023/10/13/134218-noi-soi.jpg 640w, https://cdn.bookingcare.vn/fo/w750/2023/10/13/134218-noi-soi.jpg 750w, https://cdn.bookingcare.vn/fo/w828/2023/10/13/134218-noi-soi.jpg 828w, https://cdn.bookingcare.vn/fo/w1080/2023/10/13/134218-noi-soi.jpg 1080w, https://cdn.bookingcare.vn/fo/w1200/2023/10/13/134218-noi-soi.jpg 1200w\" sizes=\"100vw\" width=\"622\"></figure><ul><li>Máy chụp X-quang&nbsp;FUJIFILM</li></ul><figure class=\"image\"><img src=\"https://cdn.bookingcare.vn/fo/2023/10/13/090334-x-quang.jpg\" alt=\"\" srcset=\"https://cdn.bookingcare.vn/fo/w384/2023/10/13/090334-x-quang.jpg 384w, https://cdn.bookingcare.vn/fo/w640/2023/10/13/090334-x-quang.jpg 640w, https://cdn.bookingcare.vn/fo/w750/2023/10/13/090334-x-quang.jpg 750w, https://cdn.bookingcare.vn/fo/w828/2023/10/13/090334-x-quang.jpg 828w, https://cdn.bookingcare.vn/fo/w1080/2023/10/13/090334-x-quang.jpg 1080w, https://cdn.bookingcare.vn/fo/w1200/2023/10/13/090334-x-quang.jpg 1200w\" sizes=\"100vw\" width=\"622\"></figure><ul><li>Hệ thống máy xét nghiệm: máy xét nghiệm sinh hóa&nbsp;BIOSINO ZS-340, máy xét nghiệm huyết học BC 2800, máy xét nghiệm miễn dịch, ...</li></ul><figure class=\"image\"><img src=\"https://cdn.bookingcare.vn/fo/2023/11/17/173141-may-xn1.png\" alt=\"\" srcset=\"https://cdn.bookingcare.vn/fo/w384/2023/11/17/173141-may-xn1.png 384w, https://cdn.bookingcare.vn/fo/w640/2023/11/17/173141-may-xn1.png 640w, https://cdn.bookingcare.vn/fo/w750/2023/11/17/173141-may-xn1.png 750w, https://cdn.bookingcare.vn/fo/w828/2023/11/17/173141-may-xn1.png 828w, https://cdn.bookingcare.vn/fo/w1080/2023/11/17/173141-may-xn1.png 1080w, https://cdn.bookingcare.vn/fo/w1200/2023/11/17/173141-may-xn1.png 1200w\" sizes=\"100vw\" width=\"622\"></figure><ul><li>Bộ máy nội soi Tai Mũi Họng của Nhật Bản</li></ul><figure class=\"image\"><img src=\"https://cdn.bookingcare.vn/fo/2023/11/17/172719-tmh-vrr21.png\" alt=\"\" srcset=\"https://cdn.bookingcare.vn/fo/w384/2023/11/17/172719-tmh-vrr21.png 384w, https://cdn.bookingcare.vn/fo/w640/2023/11/17/172719-tmh-vrr21.png 640w, https://cdn.bookingcare.vn/fo/w750/2023/11/17/172719-tmh-vrr21.png 750w, https://cdn.bookingcare.vn/fo/w828/2023/11/17/172719-tmh-vrr21.png 828w, https://cdn.bookingcare.vn/fo/w1080/2023/11/17/172719-tmh-vrr21.png 1080w, https://cdn.bookingcare.vn/fo/w1200/2023/11/17/172719-tmh-vrr21.png 1200w\" sizes=\"100vw\" width=\"622\"></figure>', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1737559604/114041-9e63e30ed86d0f33567c_ia5kbg.jpg', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1737559606/104936-lo-pkdk-viet-nga_o4ffg4.jpg', 'Đa khoa Quốc Tế Việt Nga (VRR)', '2025-01-22 15:26:46', '2025-01-22 15:26:46');

-- --------------------------------------------------------

--
-- Table structure for table `doctor_clinic_specialization`
--

CREATE TABLE `doctor_clinic_specialization` (
  `id` int(11) NOT NULL,
  `doctorId` int(11) DEFAULT NULL,
  `clinicId` int(11) DEFAULT NULL,
  `specializationId` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `doctor_infor`
--

CREATE TABLE `doctor_infor` (
  `id` int(11) NOT NULL,
  `doctorId` int(11) NOT NULL,
  `specialtyId` int(11) NOT NULL,
  `clinicId` int(11) NOT NULL,
  `priceId` varchar(255) NOT NULL,
  `provinceId` varchar(255) NOT NULL,
  `paymentId` varchar(255) NOT NULL,
  `addressClinic` varchar(255) NOT NULL,
  `nameClinic` varchar(255) NOT NULL,
  `note` varchar(255) NOT NULL,
  `count` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `doctor_infor`
--

INSERT INTO `doctor_infor` (`id`, `doctorId`, `specialtyId`, `clinicId`, `priceId`, `provinceId`, `paymentId`, `addressClinic`, `nameClinic`, `note`, `count`, `createdAt`, `updatedAt`) VALUES
(1, 2, 7, 1, 'PRI4', 'PRO2', 'PAY3', 'Số 88, Đường số 8, Khu dân cư Trung Sơn, Xã Bình Hưng, Huyện Bình Chánh, TP. Hồ Chí Minh', '1', '1', 1, '2025-01-22 09:13:30', '2025-01-22 15:09:44'),
(2, 12, 6, 3, 'PRI1', 'PRO2', 'PAY1', 'hai ba trung, ha noi', '3', '', 0, '2025-01-22 14:05:08', '2025-03-01 18:49:48'),
(3, 11, 6, 2, 'PRI4', 'PRO2', 'PAY2', '87 Hai Bà Trưng, Quận 1, Hồ Chí Minh', '2', '', 0, '2025-01-22 15:03:56', '2025-01-22 15:03:56'),
(4, 9, 6, 4, 'PRI1', 'PRO2', 'PAY2', 'TT 20-21-22 Số 204 Nguyễn Tuân, phường Nhân Chính, quận Thanh Xuân, TP Hồ Chí Minh', '4', '', 0, '2025-01-22 15:06:36', '2025-01-22 15:06:36'),
(5, 6, 7, 3, 'PRI5', 'PRO2', 'PAY1', '20 Lý Tự Trọng, Quận 1', '3', '', 0, '2025-01-22 15:07:48', '2025-01-22 15:07:48'),
(6, 5, 7, 4, 'PRI5', 'PRO2', 'PAY3', 'Số 88, Đường số 8, Khu dân cư Trung Sơn, Xã Bình Hưng, Huyện Bình Chánh, TP. Hồ Chí Minh', '4', '', 0, '2025-01-22 15:08:42', '2025-01-22 15:08:42'),
(7, 14, 8, 1, 'PRI4', 'PRO1', 'PAY3', '34 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', '1', '', 0, '2025-01-22 15:12:26', '2025-01-22 15:12:26'),
(8, 15, 8, 3, 'PRI1', 'PRO2', 'PAY3', '2/2 Thống Nhất, Phường 10, Q. Gò Vấp, Tp Hồ Chí Minh', '3', '', 0, '2025-01-22 15:14:45', '2025-01-22 15:14:45');

-- --------------------------------------------------------

--
-- Table structure for table `histories`
--

CREATE TABLE `histories` (
  `id` int(11) NOT NULL,
  `patientId` int(11) DEFAULT NULL,
  `doctorId` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `files` text DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `markdowns`
--

CREATE TABLE `markdowns` (
  `id` int(11) NOT NULL,
  `contentHTML` longtext NOT NULL,
  `contentMarkdown` longtext NOT NULL,
  `description` longtext DEFAULT NULL,
  `doctorId` int(11) DEFAULT NULL,
  `specialtyId` int(11) DEFAULT NULL,
  `clinicId` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `markdowns`
--

INSERT INTO `markdowns` (`id`, `contentHTML`, `contentMarkdown`, `description`, `doctorId`, `specialtyId`, `clinicId`, `createdAt`, `updatedAt`) VALUES
(1, '<h2>Tiến sĩ, Bác sĩ Lê Đức Tố</h2><ul><li>Là Giám đốc Bệnh viện STO Phương Đông</li><li>Hơn 40 năm gắn bó với nghề y, đã thực hiện hàng trăm nghìn ca phẫu thuật, trong đó có 35.000 ca khám &amp; phẫu thuật từ thiện cho trẻ em khuyết tật và người nghèo tại nhiều tỉnh thành của Việt Nam</li><li>Bác sĩ nhận khám mọi độ tuổi</li></ul><h3>Quá trình công tác</h3><ul><li>Sáng lập viên kiêm Giám đốc Bệnh viện STO Phương Đông (2007 đến nay)</li><li>Nguyên sáng lập viên kiêm Giám đốc bệnh viện Sài Gòn ITO (2002)</li><li>Giảng viên trường Đại học Y Thanh Hóa &amp; Đại học Y Thái Bình (1968 – 1971)</li><li>Chủ nhiệm liên bộ môn ngoại chấn thương chỉnh hình &amp; phẫu thuật thực hành tại Đại học Y Thái Bình (1979)</li><li>Phó chủ nhiệm khoa chấn thương chỉnh hình bệnh viện Việt Nam – Bungari (1979)</li><li>Bác sĩ khoa chấn thương Bệnh viện Thống Nhất TPHCM</li><li>Bác sĩ khoa điều trị Trung tâm chỉnh hình phục hồi chức năng trẻ khuyết tật vận động TP.HCM</li><li>Bác sĩ là người đầu tiên đưa ra quy trình chẩn đoán &amp; phẫu thuật hiệu quả nhất cho bệnh nhân bị xơ hóa cơ Delta (bệnh chim sệ cánh) và được Bộ y tế giao trọng trách tổ chức tập huấn &amp; chuyển giao kỹ thuật mổ xơ hóa cơ Delta cho các cơ sở y tế ở nhiều địa phương như Thanh Hóa, Vĩnh Phúc, Hà Tĩnh, Nghệ An,… và trực tiếp phẫu thuật xơ hóa cơ Delta cho hàng nghìn trẻ em khắp các tỉnh thành Việt Nam (2006 – 2007)</li><li>Phẫu thuật viên chính thức trong các chương trình phẫu thuật từ thiện giúp cho trẻ em khuyết tật &amp; người nghèo của Việt Nam cho các tổ chức từ thiện quốc tế như SAP-VN (Hoa Kỳ), Bệnh viện AGAPE (Hàn Quốc), H4H (Australia), ESPOIR, ENFANTS, HOPE FOR VIETNAMESE CHILDREN (Pháp), mời làm phẫu thuật viên chính trong các chương trình phẫu thuật từ thiện giúp cho trẻ em khuyết tật &amp; người nghèo của Việt Nam</li></ul><h3>Quá trình đào tạo&nbsp;</h3><ul><li>Tốt nghiệp trường Đại học Y Hà Nội (1968)</li><li>Tốt nghiệp Phó tiến sỹ y khoa (1979 – Liên Xô)</li><li>Tốt nghiệp Tiến sỹ khoa học (1997 – CHLB Nga)</li></ul><h3>Chứng chỉ trong nước, ngoài nước</h3><ul><li>Tu nghiệp chuyên môn tại Hoa Kỳ, Nhật Bản</li><li>Chứng nhận hành nghề y tế tư nhân loại hình bệnh viện do Bộ y tế cấp năm 2007</li><li>Chứng chỉ hành nghề khám chữa bệnh do Sở y tế TPHCM cấp năm 2013</li></ul><h3>Thành viên các Hiệp hội&nbsp;</h3><ul><li>Ủy viên trung ương Hội cứu trợ trẻ em tàn tật Việt Nam</li><li>Thường vụ kiêm trưởng ban y tế Hội cứu trợ trẻ em tàn tật TPHCM</li></ul><h3>Sách và các công trình nghiên cứu, báo cáo khoa học</h3><p>Chủ biên nhiều cuốn sách chuyên ngành đã được NXB y học in ấn &amp; phát hành như:</p><ul><li>Tật bẩm sinh ở cơ quan vận động</li><li>Một số kỹ thuật mới trong chấn thương chỉnh hình, xuất bản năm 1993</li><li>Đại cương phẫu thuật chỉnh hình bại liệt ở chi dưới</li><li>Giải đáp về tăng chiều cao &amp; điều trị ngắn chi, xuất bản năm 1997</li></ul><p>Và có&nbsp; nhiều tài liệu, bài viết đã được dăng tải trên các báo &amp; tạp chí trong &amp; ngoài nước.</p><h2>Khám và điều trị</h2><ul><li>Hơn 40 năm gắn bó với nghề y, đã thực hiện hàng trăm nghìn ca phẫu thuật, trong đó có 35.000 ca khám &amp; phẫu thuật từ thiện cho trẻ em khuyết tật và người nghèo tại nhiều tỉnh thành của Việt Nam.</li></ul><p><strong>Bệnh về Khớp</strong></p><ul><li>Đau khớp vai, đau vai gáy, đau thắt lưng, đau xương khớp</li><li>Phẫu thuật tạo dây chằng chéo khớp gối&nbsp;</li></ul><p><strong>Bệnh về Xương</strong></p><ul><li>Đau nhức xương</li><li>Chấn thương thể thao</li></ul><p><strong>Bệnh về Cơ</strong></p><ul><li>Chứng đau mỏi cơ</li></ul><p><strong>Các triệu chứng, biểu hiện sau</strong></p><ul><li>Đau thần kinh tọa&nbsp;</li><li>Đau thần kinh liên sườn&nbsp;</li><li>Đau mông&nbsp;</li><li>Đau vai gáy</li><li>Đau thắt lưng</li><li>Đau gối</li><li>Đau háng</li><li>Đau cột sống cổ</li><li>Đau hông</li><li>Đau cổ chân</li><li>Đau khủy tay</li><li>Đau bàn tay, cổ tay</li><li>Đau các ngón tay</li><li>Đau khớp thái dương hàm</li><li>Đau các ngón chân, đau cổ chân, bàn chân</li><li>Đau thần kinh liên sườn</li><li>Đau ngực</li><li>Đau sụn ức sườn</li><li>Đau xương bánh chè</li><li>Teo cơ chân, tay</li><li>Biến dạng khớp bàn tay, bàn chân, khớp gối, đi lạch bạch, yếu cơ, đau mỏi cơ</li><li>Dị dạng khớp, dị dạng xương</li><li>Teo cơ Delta</li><li>Teo cơ mô cái</li><li>Đau dây thần kinh giữa</li><li>Đau xương cụt</li><li>Đau xương cùng cụt</li><li>Đau mấu chuyển lớn</li><li>Teo cơ mông, teo cơ đùi, teo cẳng tay, cánh tay, teo cơ ngực, tràn dịch khớp</li><li>Tràn dịch khớp gối</li><li>Tràn dịch khớp háng</li><li>Tràn dịch khớp khủy</li><li>Tràn dịch khớp vai</li><li>Rách sụn trên</li><li>Đau xương chày</li><li>Chấn thương do thể thao</li><li>Rách dây chằng chéo trước, sau&nbsp;</li></ul>', '', 'Là Giám đốc Bệnh viện STO Phương Đông\nHơn 40 năm gắn bó với nghề y, đã thực hiện hàng trăm nghìn ca phẫu thuật về chấn thương chỉnh hình\nBác sĩ nhận khám mọi độ tuổi', 4, NULL, NULL, '2025-01-17 10:13:20', '2025-01-17 10:13:20'),
(2, '<h2><strong>Bác sĩ Chuyên khoa I Hồ Thanh Lịch</strong></h2><ul><li>Gần 15 năm kinh nghiệm trong lĩnh vực khám và điều trị Nội thần kinh</li><li>Phó khoa Hồi sức tích cực, Cấp cứu, Bệnh viện Nam Sài Gòn</li><li>Tốt nghiệp Sinh viên xuất sắc Đại học Y Hà Nội</li><li>Bác sĩ nhận khám mọi độ tuổi</li></ul><h2><strong>Khám và điều trị</strong></h2><h3><strong>Khám và điều trị các bệnh lý về Nội Thần kinh:</strong></h3><ul><li>Đột quỵ, tai biến mạch máu não</li><li>Parkinson: Run, cứng, giảm vận động, rối loạn tư thế</li><li>Sa sút trí tuệ: Giảm trí nhớ, khó diễn đạt, khó tập trung, hoang tưởng, loạn thần</li><li>Tai biến mạch máu não: Lú lẫn, liệt nửa người, đau đầu</li><li>Đau đầu</li><li>Động kinh: Co giật toàn thể/ cục bộ</li><li>Bệnh rễ và dây thần kinh cấp/ mạn tính: Tê bì tay chân, teo cơ, liệt vận động</li><li>Nhược cơ: Yếu cơ về chiều</li><li>Rối loạn tiền đình: Chóng mặt, ù tai</li></ul><h3><strong>Quá trình công tác</strong></h3><ul><li>Phó trưởng khoa hồi sức tích cực - cấp cứu bệnh viện Đa khoa Quốc tế Nam Sài Gòn (2022 - nay)</li><li>Trưởng khoa hồi sức tích cực - cấp cứu bệnh Đa Khoa Quốc Tế Nam Sài Gòn (12/2019 - 12/2022)</li><li>Trưởng khoa hồi sức tích cực - đột quỵ bệnh viện Hồng Đức. (2014 -2019)</li><li>Bác sĩ điều trị khoa hồi sức tích cực - đột quỵ bệnh viện Hồng Đức (2008 - 2014)</li></ul><h3><strong>Quá trình đào tạo</strong></h3><ul><li>Lớp định hướng hồi sức cấp cứu tại Bệnh viện Nhân Dân Gia Định (2015)</li><li>Tốt nghiệp Chuyên khoa I, Đại học Y Phạm Ngọc Thạch (2015)</li><li>Tốt nghiệp lớp đào tạo liên tục Nội thần kinh, Chẩn đoán hình ảnh ứng dụng trong thần kinh do tổ chức y tế thế giới tổ chức (2010 - 2011)</li><li>Định hướng chuyên khoa Nội thần kinh, Mạch máu não tại Bệnh viện Chợ Rẫy, Bệnh viện 115, Bệnh viện Nhân Dân Gia Định (2009 - 2010)</li><li>Tốt nghiệp Bác sĩ Y khoa, Đại học Y Hà Nội (2008)</li><li>Tham gia nhiều khóa học đào tạo liên tục về chuyên khoa tim mạch, thần kinh, nội tiết, hô hấp, thận tiết niệu…</li></ul><h3><strong>Giải thưởng</strong></h3><ul><li>Điều trị thành công ngoạn mục nhiều trường hợp bệnh nhân nặng</li><li>Đạt danh hiệu Trưởng khoa xuất sắc tại Bệnh viện Hồng Đức, Bệnh viện Đa khoa Nam Sài Gòn trong nhiều năm</li><li>Sinh viên xuất sắc Đại học Y Hà Nội, có báo cáo khoa học tham gia hội nghị khoa học Đại học Y Hà Nội (2008)</li></ul>', '', 'Gần 15 năm kinh nghiệm trong lĩnh vực khám và điều trị Nội thần kinh\nPhó khoa Hồi sức tích cực, Cấp cứu, Bệnh viện Nam Sài Gòn\nBác sĩ nhận khám mọi độ tuổi', 2, NULL, NULL, '2025-01-17 10:37:15', '2025-01-22 15:09:44'),
(3, '<h2><strong>TS. BS Nguyễn Khắc Đức</strong></h2><ul><li>Gần 40 năm công tác tại trường Đại học Y Hà Nội và Bệnh viện Hữu Nghị Việt Đức.</li><li>Hơn 35 năm kinh nghiệm trong lĩnh vực phẫu thuật Gan mật tuỵ, tiêu hoá</li><li>Bác sĩ nhận khám mọi độ tuổi</li></ul><h2><strong>Khám và điều trị</strong></h2><ul><li><strong>Bệnh lí gan</strong><ul><li>Nang gan</li><li>Áp xe gan</li><li>U gan ( phẫu thuật gan, đốt sóng cao tần, nút mạch)</li></ul></li><li><strong>Bệnh lí đường mật</strong><ul><li>Sỏi mật</li><li>Sỏi trong gan</li><li>Sỏi trong túi mật</li><li>Nang đường mật</li><li>Ung thư đường mật</li></ul></li><li><strong>Bệnh lí của tụy</strong><ul><li>Viêm tụy cấp&nbsp;</li><li>Viêm tụy mãn&nbsp;</li><li>U đầu tụy, thân tụy, đuôi tụy&nbsp;</li></ul></li><li><strong>Phẫu thuật</strong><ul><li>Phẫu thuật nội soi cắt u dưới niêm mạc dạ dày – tá tràng, đại tràng</li><li>Phẫu thuật nội soi trào ngược dạ dày thực quản&nbsp;</li><li>Phẫu thuật nội soi ổ bụng.</li><li>Phẫu thuật gan mật, đốt sóng cao tần, nút mạch</li></ul></li><li><strong>Tổn thương do chấn thương gan mật tụy</strong></li><li><strong>Bệnh lí nội khoa gan mật</strong><ul><li>Xơ gan</li><li>Viêm gan do virut</li></ul></li></ul><h3><strong>Quá trình công tác</strong></h3><ul><li>Cán bộ giảng dạy lâm sàng, Bệnh viện Hữu Nghị Việt Đức</li><li>Cán bộ giảng dạy lý thuyết, Bệnh viện Hữu nghị Việt Đức&nbsp;</li><li>Phẫu thuật viên, Bệnh viện Việt Đức&nbsp;</li></ul><h3><strong>Quá trình đào tạo</strong></h3><ul><li>Bảo vệ luận án Tiến sĩ, Đại học Y Hà Nội (2010)</li><li>Học Nội trú FFI, Đại học Paris 6 Cộng hòa Pháp (1993 - 1994)</li><li>Đào tạo tại viện trường Đại học Y Hà Nội (1987)</li><li>Tốt nghiệp Đại học Y Hà Nội (1982)</li></ul>', '', 'Gần 40 năm công tác tại trường Đại học Y Hà Nội và Bệnh viện Hữu Nghị Việt Đức.\nHơn 35 năm kinh nghiệm trong lĩnh vực phẫu thuật Gan mật tuỵ, Tiêu hoá\nBác sĩ nhận khám mọi độ tuổi', 3, NULL, NULL, '2025-01-17 10:40:47', '2025-01-17 10:40:47'),
(4, '<h2><strong>PGS. TS. BSCK II. TTƯT Vũ Văn Hòe</strong></h2><ul><li>Bác sĩ có 35 năm kinh nghiệm về vực Cột sống, thần kinh, cơ xương khớp</li><li>Phó chủ tịch hội Phẫu thuật cột sống Việt Nam</li><li>Bác sĩ nhận khám từ 7 tuổi trở lên</li></ul><h2><strong>Nhận khám và điều trị&nbsp;</strong></h2><ul><li>Các bệnh lý về cột sống</li><li>Các bệnh lý liên quan đến thần kinh</li><li>Các bệnh lý liên quan đến cơ xương khớp</li></ul><h3><strong>Quá trình công tác&nbsp;</strong></h3><ul><li>Bộ môn Khoa Phẫu thuật thần kinh, Bệnh viện Quân y 103, Học viện Quân Y</li><li>Nguyên Chủ nhiệm Bộ môn kiêm Chủ nhiệm Khoa</li></ul><h3><strong>Quá trình đào tạo</strong></h3><ul><li>Bác sĩ Chuyên khoa cấp II, Học viện Quân y (2010 - 2011)</li><li>Tiến sỹ Y khoa, Hệ chính qui, Học viện Quân y (1996 - 2000)</li><li>Cao học Phẫu thuật thần kinh, Hệ chính qui, Học viện Quân y (1993 - 1995)&nbsp;</li><li>Bác sĩ Đa khoa, Hệ chính qui, Học viện Quân y (1982 - 1988)</li><li>Đào tạo về vi phẫu thần kinh tại Fujita Health University Hospital, Nhật Bản. Tham dự nhiều khóa tập huấn kỹ thuật và các hội nghị quốc tế chuyên ngành tại các nước Mỹ, Pháp, Đức, Áo, Hàn Quốc, Singapore, Thái Lan, Philipine,…</li></ul><h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3><ul><li>Phó chủ tịch hội Phẫu thuật Cột sống Việt Nam</li><li>Ủy viên Ban chấp hành hội Phẫu thuật thần kinh Việt Nam</li></ul><h3><strong>Giải thưởng</strong></h3><ul><li>Được tặng danh hiệu Thầy thuốc ưu tú (02/2014)</li><li>Được công nhận đạt chuẩn chức danh Phó giáo sư (10/2011)</li></ul>', '', 'Bác sĩ có 35 năm kinh nghiệm về vực Cột sống, thần kinh, cơ xương khớp\nPhó chủ tịch hội Phẫu thuật cột sống Việt Nam \nBác sĩ nhận khám từ 7 tuổi trở lên ', 12, NULL, NULL, '2025-01-22 14:05:08', '2025-01-22 14:05:08'),
(5, '<h2><strong>ThS.BS Nguyễn Trần Trung</strong></h2><ul><li>Bác sĩ có nhiều năm kinh nghiệm trong khám và điều trị Cơ xương khớp</li><li>Phó trưởng khoa Cơ Xương Khớp Bệnh viện E</li><li>Bác sĩ nhận khám từ 15 tuổi trở lên</li></ul><p>&nbsp;</p><h2><strong>Nhận khám và điều trị</strong></h2><ul><li>Viêm cột sống dính khớp:&nbsp;Viêm khớp cùng chậu, viêm khớp ngoại vi, đau và sưng ở khớp háng và khớp gối</li><li>Viêm khớp dạng thấp:&nbsp;Khớp sưng, nóng, đỏ, đau dai dẳng. Các dấu hiệu này hầu hết xuất hiện đối xứng ở hai bên cơ thể (hai bên tay, cổ tay, đầu gối,...)</li><li>Thoái khớp gối, khớp vai:&nbsp;Khô khớp, cứng khớp, lục khục, mất ngủ, teo cơ, sưng tấy,&nbsp;Đau, giảm tầm vận động, hạn chế di chuyển của khớp</li><li>Thoái hóa cột sống thắt lưng</li><li>Thoát vị đĩa đệm</li><li>Loãng xương</li><li>Gút</li><li>Viêm khớp</li><li>Siêu âm đánh giá các tổn thương cơ xương khớp</li><li>Thực hiện các thủ thuật điều trị: Tiêm khớp, tiêm khớp dưới hướng dẫn siêu âm, tiêm huyết tương giàu tiểu cầu,...</li></ul><h3><strong>Quá trình công tác</strong></h3><ul><li><strong>Bác sĩ chuyên khoa Cơ Xương Khớp,&nbsp;Phòng khám Đa khoa MSC (Nay)</strong></li><li><strong>Phó Trưởng Khoa Cơ Xương Khớp,&nbsp;Bệnh viện E (2019 - nay)</strong></li><li><strong>Bác sĩ Điều trị tại Khoa Cơ Xương Khớp,&nbsp;Bệnh viện E (2009 - 2019)</strong></li><li><strong>Giảng viên thỉnh giảng Bộ môn Nội Cơ Xương Khớp,&nbsp;Trường Đại học Y Dược Quốc Gia (2009 - 2019)</strong></li><li><strong>Giảng viên các lớp đào tạo liên tục cho bác sĩ sau đại học, Bệnh viện E (2009 - 2019)</strong></li></ul><h3><strong>Quá trình đào tạo</strong></h3><ul><li><strong>Cao học chuyên ngành Nội khoa,&nbsp;Đại học Y Hà Nội (11/2013 - 12/2015)</strong></li><li><strong>Đại học chuyên ngành Bác sĩ đa khoa,&nbsp;Học viện Quân Y (07/2003 - 07/2009)</strong></li></ul><h3><strong>Chứng chỉ trong nước hoặc nước ngoài</strong></h3><ul><li><strong>Sư phạm y học cơ bản cho giảng viên đào tạo liên tục,&nbsp;Trung tâm HMDP, Tổng hội y học Việt Nam (9/2022)</strong></li><li><strong>Tham gia giảng dạy khóa học: “Chẩn đoán và điều trị bệnh lý cơ xương khớp và tiêm khớp ngoại vi”,&nbsp;Bệnh viện E (6/2017)</strong></li><li><strong>Định hướng chuyên ngành Cơ Xương Khớp,&nbsp;Bệnh viện Bạch Mai (2012)</strong></li><li><strong>Đào tạo liên tục Phương pháp nghiên cứu khoa học dành cho bác sĩ,&nbsp;Bệnh viện E (11/2011)</strong></li><li><strong>Siêu âm tổng quát,&nbsp;Đại học Y Hà Nội (2011)</strong></li></ul><h3><strong>Sách và các công trình báo cáo khoa học</strong></h3><ul><li><strong>Giảm viêm đa khớp gốc chi: Ca lâm sàng » (Mai Thị Minh Tâm, Nguyễn Trần Trung, Trịnh Việt Anh, Vũ Hồng Anh), trang 171, Tạp chí Y học Việt Nam tập 502 (Tháng 5/2021)</strong></li><li><strong>Đánh giá tác dụng điều trị thoái hóa khớp gối nguyên phát của liệu pháp tiêm MD-Collagen: Nghiên cứu quan sát, một trung tâm » (Đặng Hồng Hoa, Nguyễn Trần Trung, Đặng Chí Hiếu) (Tháng 8/2020)</strong></li><li><strong>Đánh giá kết quả sau 8 tuần điều trị bằng liệu pháp huyết tương giàu tiểu cầu tự thân ở bệnh nhân viêm lồi cầu ngoài xương cánh tay ». (Nguyễn Trần Trung, Đặng Hồng Hoa), trang 68, Y học thực hành ISSN (Số 4/2016)</strong></li></ul><h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3><ul><li>Tham gia các lớp đào tạo quốc tế tại Pháp, Nhật, Thái Lan, Singapore, Việt Nam</li><li>Thành viên Hội Thấp Khớp học Việt Nam</li><li>Thành viên Hội Thấp Khớp học Hà Nội</li><li>Thành viên hội thấp khớp học Châu Á Thái bình dương (APLAR)</li></ul>', '', 'Bác sĩ có nhiều năm kinh nghiệm trong khám và điều trị Cơ xương khớp \nPhó trưởng khoa Cơ Xương Khớp Bệnh viện E\nBác sĩ nhận khám từ 15 tuổi trở lên ', 11, NULL, NULL, '2025-01-22 15:03:56', '2025-01-22 15:03:56'),
(6, '<h2><strong>Khám và điều trị</strong></h2><ul><li>Khám và điều trị bệnh thoái hóa khớp</li><li>Chấn thương trong thể thao, sinh hoạt, tai nạn...</li><li>Bệnh lý cột sống: thoát vị địa đệm, thoái hóa cột sống..</li><li>Viêm bao quang khớp: viêm gân, bao hoạt dịch, dây chằng....</li><li>Hồi phục sau phẫu thuật cơ xương khớp</li></ul><h3><strong>Quá trình công tác</strong></h3><ul><li>Giám đốc chuyên môn và quản lý điều hành -&nbsp;Phòng khám đa khoa MSC (2021 - Nay)</li><li>Phó giám đốc và quản lý điều hành -&nbsp;Bệnh viện Phục hồi chức năng Hà Nội (2011 - 2021)</li><li>Bác sĩ - Bệnh viện Xanh Pôn (1995 - 2011)</li></ul><h3><strong>Quá trình đào tạo</strong></h3><ul><li>Định hướng chuyên khoa chuyên ngành Tâm Thần - Bộ Y Tế (2017)</li><li>Khóa học quản lý bệnh viện - Bộ Y Tế (2015)</li><li>Chuyên khoa II Cơ Xương Khớp - Đại học Y Hà Nội (2012 - 2014)</li><li>Đa khoa -&nbsp; Đại học Y Hà Nội (1990 - 1995)</li></ul><h3><strong>Sách và các công trình nghiên cứu, báo cáo khoa học</strong></h3><ul><li>Đề tài cơ sở đánh giá kết quả điều trị viêm điểm bám gân bằng sóng xung kích (2014)</li><li>Đề tài cấp Bộ về chế tạo và ứng dụng bàn tập phục hồi chức năng chi dưới trong điều trị gãy mâm chày (2013)</li><li>Đề tài cơ sở đánh giá kết quả phục hồi chức năng sau mổ xơ cơ Delta (2006)</li><li>Đề tài cơ sở đánh giá kết quả phẫu thuật xơ cơ detal tại bệnh viện Xanh Pôn (2005)</li><li>Tham gia đề tài cấp thành phố: ứng dụng đinh đàn hồi Metaizeau trong điều trị gãy xương dài (2000)</li></ul>', '', 'Gần 30 năm kinh nghiệm lĩnh vực Cơ xương khớp\nTừng công tác tại Bệnh viện Xanh Pôn, Bệnh viện Phục hồi chức năng Hà Nội\nBác sĩ nhận khám tất cả các độ tuổi', 9, NULL, NULL, '2025-01-22 15:06:36', '2025-01-22 15:06:36'),
(7, '<h2><strong>Tiến sĩ, Bác sĩ Nguyễn Văn Doanh</strong></h2><ul><li>Trưởng khoa Khám bệnh, Bệnh viện Đa khoa Quốc tế Thu Cúc</li><li>Nguyên chủ nhiệm khoa thần kinh, Bệnh viện Hữu Nghị Việt Xô</li><li>Bác sĩ có 40 năm kinh nghiệm làm việc chuyên khoa Nội Thần kinh</li><li>Bác sĩ khám cho người bệnh từ 16 tuổi trở lên</li></ul><h2><strong>Khám và điều trị</strong></h2><ul><li>Các bệnh đau đầu: Chứng đau nửa đầu, đau đầu căn nguyên mạch máu, đau đầu mạn tính hàng ngày,..</li><li>Bệnh đau vai gáy do thoái hóa cột sống cổ, thoát vị đĩa đệm cột sống cổ, …</li><li>Đau thắt lưng hông do thoái hóa, thoát vị, đau do viêm khớp cùng chậu…</li><li>Rối loạn tiền đình</li><li>Điều trị chóng mặt do thiếu máu não</li><li>Tư vấn và điều trị các bệnh lý rối loạn về giấc ngủ: mất ngủ cấp tính hoặc mạn tính</li><li>Liệt dây 7 ngoại vi: Viêm các dây thần kinh sọ não và các dây thần kinh ngoại vi khác như hội chứng ống cổ tay, đau vai khuỷu tay do chơi thể thao</li><li>Liệt nửa người do nhồi máu não</li><li>Các bệnh lý về sa sút trí tuệ: Suy giảm nhận thức nhẹ, suy giảm trí nhớ, sa sút trí tuệ nguyên nhân mạch máu (sa sút trí tuệ sau đột quỵ), Alzheimer</li><li>Bệnh rối loạn vận động như bệnh Parkinson</li></ul>', '', 'rưởng khoa Khám bệnh, Bệnh viện Đa khoa Quốc tế Thu Cúc\nNguyên chủ nhiệm khoa thần kinh, Bệnh viện Hữu Nghị Việt Xô\nBác sĩ có 40 năm kinh nghiệm làm việc chuyên khoa Nội Thần kinh\nBác sĩ khám cho người bệnh từ 16 tuổi trở lên ', 6, NULL, NULL, '2025-01-22 15:07:48', '2025-01-22 15:07:48'),
(8, '<h2><strong>Bác sĩ Chuyên khoa I Võ Thị Ngọc Thu</strong></h2><ul><li>Hơn 30 năm kinh nghiệm trong khám và điều trị Nội khoa, Nội thần kinh</li><li>Từng công tác tại nhiều bệnh viện lớn: Bệnh viện Phục hồi chức năng – Điều trị bệnh nghề nghiệp, Bệnh viện An Bình, Bệnh viện Nguyễn Trãi</li><li>Bác sĩ nhận khám mọi độ tuổi</li></ul><h2><strong>Khám và điều trị</strong></h2><ul><li>Chẩn đoán và điều trị các bệnh lý Nội khoa thường gặp: Tăng huyết áp, đái tháo đường, tim mạch, hô hấp,…</li><li>Chẩn đoán và điều trị các bệnh thần kinh cấp và mãn: Đột quỵ, tai biến mạch máu não, động kinh, bệnh dây thần kinh (do viêm hoặc do chèn ép,…)</li><li>Kỹ năng thăm dò chức năng: điện não và điện cơ</li></ul><h3><strong>Quá trình công tác</strong></h3><ul><li>Bác sĩ – Bệnh viện Đa khoa Quốc tế Nam Sài Gòn (2019 - Nay)</li><li>Bác sĩ Nội Thần kinh – Bệnh viện Phục hồi chức năng – Điều trị bệnh nghề nghiệp (2018 - 2019)</li><li>Bác sĩ Nội Thần kinh – Bệnh viện Nguyễn Trãi (2012 - 2018)</li><li>Bác sĩ&nbsp;Nội Thần kinh – Bệnh viện An Bình (2006 - 2011)</li><li>Bác sĩ Nội Thần kinh – Bệnh viện Phục hồi chức năng – Điều trị bệnh nghề nghiệp (1995 - 2005)</li><li>Phó trạm, Trạm y tế Phường 01, Quận 08 (1992)</li></ul><h3><strong>Quá trình đào tạo</strong></h3><ul><li>Đào tạo Điều trị và dự phòng Tai biến mạch máu não (2022)</li><li>Đào tạo điện cơ tại Đại học Y Khoa Phạm Ngọc Thạch (2006)</li><li>Đào tạo điện não tại Bệnh viện Chợ Rẫy (2005)</li><li>Tốt nghiệp Bác sĩ Chuyên khoa I Nội Thần kinh (1999)</li><li>Tốt nghiệp Bác sĩ Đa khoa (1992)</li></ul>', '', 'Hơn 30 năm kinh nghiệm trong khám và điều trị Nội khoa, Nội thần kinh\nTừng công tác tại nhiều bệnh viện lớn: Bệnh viện Phục hồi chức năng – Điều trị bệnh nghề nghiệp, Bệnh viện An Bình, Bệnh viện Nguyễn Trãi\nBác sĩ nhận khám mọi độ tuổi', 5, NULL, NULL, '2025-01-22 15:08:42', '2025-01-22 15:08:42'),
(9, '<h2><strong>Giáo sư, Tiến sĩ, Bác sĩ Hà Văn Quyết</strong></h2><ul><li>Giáo sư, Tiến sỹ, Bác sĩ chuyên khoa Ngoại Tiêu hóa</li><li>Chuyên gia đầu ngành trong lĩnh vực bệnh lý Tiêu hóa</li><li>Kinh nghiệm làm việc trên 35 năm trong lĩnh vực bệnh lý Tiêu hóa</li><li>Chuyên ngành Ngoại – Phẫu thuật Nội soi Tiêu hóa, Ổ bụng &amp;&nbsp;các bệnh lý hậu môn, trực tràng.</li><li>Bác sĩ Nội trú Bệnh viện Việt Đức&nbsp;</li><li>Nguyên Chủ nhiệm Bộ môn Ngoại - Đại học Y Hà Nội&nbsp;</li><li>Nguyên Giám đốc Bệnh viện Đại học Y Hà Nội</li><li>Nguyên Phó Giám đốc Bệnh viện Việt Đức.</li><li>Bác sĩ khám cho người bệnh từ 3 tuổi trở lên</li></ul><h2><strong>Khám và điều trị</strong></h2><ul><li>Giáo sư nhận khám, điều trị các bệnh lý khó về Tiêu hóa, hậu môn, trực tràng, gan mật.<br>&nbsp;</li><li>Trực tiếp tiến hành Nội soi tiêu hóa, dạ dày, đại tràng</li><li>Khám, Nội soi, Xét nghiệm sàng lọc ung thư đại trực tràng</li><li>Khám, Nội soi, Xét nghiệm sàng lọc ung thư dạ dày</li><li>Khám, Nội soi, Xét nghiệm sàng lọc bệnh lý ung thư đường tiêu hóa</li><li>Khám, Nội soi, tư vấn điều trị bệnh lý Hậu môn, Bệnh Trĩ Nội, Trĩ Ngoại.</li></ul><p><strong>Khám và điều trị các bệnh lý dạ dày</strong></p><ul><li>Gắp dị vật đường tiêu hóa</li><li>Đau dạ dày</li><li>Chảy máu dạ dày&nbsp;</li><li>Đau thượng vị&nbsp;</li><li>Viêm dạ dày</li><li>Loét dạ dày tá tràng</li><li>Nhiễm Helicobacter pylori dạ dày (HP)</li><li>Trào ngược dạ dày thực quản (Gerd)</li><li>Tắc ruột&nbsp;</li><li>Polyp dạ dày&nbsp;</li><li>Chảy máu dạ dày&nbsp;</li><li>Viêm dạ dày ruột Virus</li><li>Viêm ruột thừa</li><li>Polyp dạ dày</li><li>Ung thư dạ dày</li><li>Táo bón</li><li>Khó nuốt</li><li>Khó tiêu</li><li>Ợ nóng, Ợ chua</li><li>Táo bón</li></ul><p><strong>Bệnh lý đại tràng, trực tràng, hậu môn&nbsp;</strong></p><ul><li>Hội chứng ruột kích thích (viêm đại tràng co thắt)</li><li>Viêm đại tràng</li><li>Viêm đại tràng màng giả</li><li>Viêm loét đại tràng</li><li>Bệnh trĩ, trĩ chảy máu, rò hậu môn</li><li>Rò hậu môn, ngứa hậu môn</li><li>Nứt kẽ hậu môn, đại tiện ra máu, đại tiện khó</li><li>Apxe hậu môn</li><li>Đi ngoài ra máu&nbsp;</li></ul><p><strong>Khám và điều trị các bệnh lý về gan, mật&nbsp;</strong></p><ul><li>Viêm túi mật, sỏi mật&nbsp;</li><li>Viêm tụy</li><li>Viêm xơ đường mật</li><li>Viêm xơ gan do rượu</li><li>Xơ gan</li><li>U gan</li></ul><p><strong>Nội soi tiêu hóa&nbsp;</strong></p><ul><li>Gắp dị vật đường tiêu hóa&nbsp;</li><li>Khám, Nội soi, tư vấn điều trị bệnh lý Hậu môn, Bệnh Trĩ Nội, Trĩ Ngoại</li><li>Khám, Nội soi, Xét nghiệm sàng lọc ung thư đại trực tràng</li><li>Khám, Nội soi, Xét nghiệm sàng lọc bệnh lý ung thư đường tiêu hóa</li><li>Khám, nội soi dạ dày&nbsp;</li><li>Nội soi dạ dày (có gây mê)</li><li>Nội soi đại tràng (có gây mê)</li><li>Nội soi cắt polyp dạ dày</li><li>Nội soi cắt polyp đại trực tràng&nbsp;&nbsp;</li><li>Phẫu thuật nội soi cắt u dưới niêm mạc dạ dày – tá tràng, đại tràng</li><li>Phẫu thuật nội soi trào ngược dạ dày thực quản&nbsp;</li></ul><h3><strong>Quá trình Đào tạo</strong></h3><ul><li>Tốt nghiệp Bác sĩ Đa khoa, Đại học Y Hà Nội.</li><li>Bác sĩ Nội trú tại các bệnh viện ở Paris, Cộng hòa Pháp</li><li>Thực tập sinh khoa Tiêu hóa trường Đại học Tokai, Nhật Bản</li><li>Tu nghiệp về chuyên khoa Tiêu hóa tại Mỹ, Singapore, Hàn Quốc&nbsp;</li></ul><h3><strong>Sách và các công trình nghiên cứu, báo cáo khoa học</strong></h3><ul><li>Chủ biên nhiều bộ sách giáo khoa về Ngoại khoa phẫu thuật tiêu hóa và chuyên sâu về tiêu hóa.</li><li>Tham gia các đề tài nghiên cứu khoa học về ung thư dạ dày, đại trực tràng; các chủ đề về bệnh lý tụy; các loại phẫu thuật nội soi, nội soi can thiệp; bệnh lý về hậu môn trực tràng.&nbsp;</li></ul><h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3><ul><li>Nguyên Tổng thư kí Hội Ngoại khoa Việt Nam&nbsp;</li><li>Phó Chủ tịch Hội Khoa học về Hậu môn trực tràng&nbsp;</li></ul><h3><strong>Tham gia các chuyên đề sức khỏe&nbsp;</strong></h3><ul><li>Ban biên tập Tạp chí Y học thực hành</li><li>Ban biên tập Tạp chí Ngoại khoa</li><li>Ban biên tập Tạp chí Hậu môn Trực tràng</li></ul>', '', 'Chuyên gia trên 35 năm kinh nghiệm trong lĩnh vực bệnh lý Tiêu hóa\nChuyên gia đầu ngành trong lĩnh vực bệnh lý Tiêu hóa\nNguyên Giám đốc Bệnh viện Đại học Y Hà Nội\nBác sĩ khám cho người bệnh từ 3 tuổi trở lên', 14, NULL, NULL, '2025-01-22 15:12:26', '2025-01-22 15:12:26'),
(10, '<h2><strong>Bác sĩ Chuyên khoa II Lê Văn Hoài</strong></h2><ul><li>Bác sĩ có nhiều năm kinh nghiệm trong lĩnh vực Ngoại Tổng quát&nbsp;</li><li>Hiện là Giám đốc Bệnh viện Đa khoa Hồng Đức III</li><li>Trưởng khoa Ngoại Tổng quát Bệnh viện Hồng Đức III</li></ul><h2><strong>Khám và điều trị&nbsp;</strong></h2><ul><li>Áp xe gan</li><li>Áp xe hậu môn trực tràng</li><li>Nứt hậu môn</li><li>Phì đại tuyến tiền liệt</li><li>Rò hậu môn</li><li>Sỏi niệu quản</li><li>Sỏi ống mật chủ</li><li>Thủng, loét dạ dày – tá tràng</li><li>Tràn khí màng phổi tự phát</li><li>Viêm túi thừa đại tràng</li></ul>', '', 'Bác sĩ có nhiều năm kinh nghiệm trong lĩnh vực Ngoại Tổng quát \nHiện là Giám đốc Bệnh viện Đa khoa Hồng Đức III \nTrưởng khoa Ngoại tổng quát Bệnh viện Hồng Đức III ', 15, NULL, NULL, '2025-01-22 15:14:45', '2025-01-22 15:14:45');

-- --------------------------------------------------------

--
-- Table structure for table `schedulelists`
--

CREATE TABLE `schedulelists` (
  `id` int(11) NOT NULL,
  `currentNumber` int(11) DEFAULT NULL,
  `maxNumber` int(11) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `timeType` varchar(255) DEFAULT NULL,
  `doctorId` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `schedulelists`
--

INSERT INTO `schedulelists` (`id`, `currentNumber`, `maxNumber`, `date`, `timeType`, `doctorId`, `createdAt`, `updatedAt`) VALUES
(1, NULL, 3, '1736960400000', 'T1', 6, '2025-01-15 14:01:03', '2025-01-15 14:01:03'),
(2, NULL, 3, '1736960400000', 'T2', 6, '2025-01-15 14:01:03', '2025-01-15 14:01:03'),
(3, NULL, 3, '1736960400000', 'T3', 6, '2025-01-15 14:01:03', '2025-01-15 14:01:03'),
(4, NULL, 3, '1736960400000', 'T4', 6, '2025-01-15 14:01:03', '2025-01-15 14:01:03'),
(5, NULL, 3, '1736960400000', 'T5', 6, '2025-01-15 14:01:03', '2025-01-15 14:01:03'),
(6, NULL, 3, '1736960400000', 'T8', 6, '2025-01-15 14:01:03', '2025-01-15 14:01:03'),
(7, NULL, 3, '1736960400000', 'T6', 6, '2025-01-15 14:01:43', '2025-01-15 14:01:43'),
(8, NULL, 3, '1736960400000', 'T7', 6, '2025-01-15 14:01:43', '2025-01-15 14:01:43'),
(9, NULL, 3, '1736960400000', 'T8', 6, '2025-01-15 14:01:43', '2025-01-15 14:01:43'),
(10, NULL, 3, '1736960400000', 'T7', 6, '2025-01-15 14:03:36', '2025-01-15 14:03:36'),
(11, NULL, 3, '1737046800000', 'T1', 6, '2025-01-15 14:09:00', '2025-01-15 14:09:00'),
(12, NULL, 3, '1737046800000', 'T1', 6, '2025-01-15 14:09:13', '2025-01-15 14:09:13'),
(13, NULL, 3, '1737046800000', 'T2', 6, '2025-01-15 14:11:14', '2025-01-15 14:11:14'),
(14, NULL, 3, '1737046800000', 'T3', 6, '2025-01-15 14:11:19', '2025-01-15 14:11:19'),
(15, NULL, 3, '1737046800000', 'T4', 6, '2025-01-15 14:11:24', '2025-01-15 14:11:24'),
(16, NULL, 3, '1737046800000', 'T5', 6, '2025-01-15 14:24:37', '2025-01-15 14:24:37'),
(17, NULL, 3, '1737133200000', 'T1', 6, '2025-01-16 09:07:21', '2025-01-16 09:07:21'),
(18, NULL, 3, '1737219600000', 'T1', 6, '2025-01-16 09:07:39', '2025-01-16 09:07:39'),
(19, NULL, 3, '1737219600000', 'T2', 6, '2025-01-16 09:07:39', '2025-01-16 09:07:39'),
(20, NULL, 3, '1737219600000', 'T3', 6, '2025-01-16 09:07:39', '2025-01-16 09:07:39'),
(21, NULL, 3, '1740762000000', 'T1', 2, '2025-03-01 15:41:24', '2025-03-01 15:41:24'),
(22, NULL, 3, '1740762000000', 'T2', 2, '2025-03-01 15:41:24', '2025-03-01 15:41:24'),
(23, NULL, 3, '1740762000000', 'T3', 2, '2025-03-01 15:41:24', '2025-03-01 15:41:24'),
(24, NULL, 3, '1740762000000', 'T1', 3, '2025-03-01 15:41:30', '2025-03-01 15:41:30'),
(25, NULL, 3, '1740762000000', 'T2', 3, '2025-03-01 15:41:30', '2025-03-01 15:41:30'),
(26, NULL, 3, '1740762000000', 'T3', 3, '2025-03-01 15:41:30', '2025-03-01 15:41:30'),
(27, NULL, 3, '1740934800000', 'T1', 4, '2025-03-01 15:41:42', '2025-03-01 15:41:42'),
(28, NULL, 3, '1740934800000', 'T2', 4, '2025-03-01 15:41:42', '2025-03-01 15:41:42'),
(29, NULL, 3, '1740934800000', 'T3', 4, '2025-03-01 15:41:42', '2025-03-01 15:41:42'),
(30, NULL, 3, '1740934800000', 'T4', 4, '2025-03-01 15:41:42', '2025-03-01 15:41:42'),
(31, NULL, 3, '1740934800000', 'T5', 4, '2025-03-01 15:41:42', '2025-03-01 15:41:42'),
(32, NULL, 3, '1740934800000', 'T6', 4, '2025-03-01 15:41:42', '2025-03-01 15:41:42'),
(33, NULL, 3, '1740934800000', 'T1', 6, '2025-03-01 15:41:46', '2025-03-01 15:41:46'),
(34, NULL, 3, '1740934800000', 'T2', 6, '2025-03-01 15:41:46', '2025-03-01 15:41:46'),
(35, NULL, 3, '1740934800000', 'T3', 6, '2025-03-01 15:41:46', '2025-03-01 15:41:46'),
(36, NULL, 3, '1740934800000', 'T4', 6, '2025-03-01 15:41:46', '2025-03-01 15:41:46'),
(37, NULL, 3, '1740934800000', 'T5', 6, '2025-03-01 15:41:46', '2025-03-01 15:41:46'),
(38, NULL, 3, '1740934800000', 'T6', 6, '2025-03-01 15:41:46', '2025-03-01 15:41:46'),
(39, NULL, 3, '1740934800000', 'T1', 9, '2025-03-01 15:41:54', '2025-03-01 15:41:54'),
(40, NULL, 3, '1740934800000', 'T2', 9, '2025-03-01 15:41:54', '2025-03-01 15:41:54'),
(41, NULL, 3, '1740934800000', 'T3', 9, '2025-03-01 15:41:54', '2025-03-01 15:41:54'),
(42, NULL, 3, '1740934800000', 'T4', 9, '2025-03-01 15:41:54', '2025-03-01 15:41:54'),
(43, NULL, 3, '1740934800000', 'T5', 9, '2025-03-01 15:41:54', '2025-03-01 15:41:54'),
(44, NULL, 3, '1740934800000', 'T6', 9, '2025-03-01 15:41:54', '2025-03-01 15:41:54'),
(45, NULL, 3, '1741021200000', 'T1', 9, '2025-03-01 15:42:00', '2025-03-01 15:42:00'),
(46, NULL, 3, '1741021200000', 'T2', 9, '2025-03-01 15:42:00', '2025-03-01 15:42:00'),
(47, NULL, 3, '1741021200000', 'T3', 9, '2025-03-01 15:42:00', '2025-03-01 15:42:00'),
(48, NULL, 3, '1741021200000', 'T4', 9, '2025-03-01 15:42:00', '2025-03-01 15:42:00'),
(49, NULL, 3, '1741021200000', 'T5', 9, '2025-03-01 15:42:00', '2025-03-01 15:42:00'),
(50, NULL, 3, '1741021200000', 'T6', 9, '2025-03-01 15:42:00', '2025-03-01 15:42:00'),
(51, NULL, 3, '1741021200000', 'T1', 11, '2025-03-01 15:42:04', '2025-03-01 15:42:04'),
(52, NULL, 3, '1741021200000', 'T2', 11, '2025-03-01 15:42:04', '2025-03-01 15:42:04'),
(53, NULL, 3, '1741021200000', 'T3', 11, '2025-03-01 15:42:04', '2025-03-01 15:42:04'),
(54, NULL, 3, '1741021200000', 'T4', 11, '2025-03-01 15:42:04', '2025-03-01 15:42:04'),
(55, NULL, 3, '1741021200000', 'T5', 11, '2025-03-01 15:42:04', '2025-03-01 15:42:04'),
(56, NULL, 3, '1741021200000', 'T6', 11, '2025-03-01 15:42:04', '2025-03-01 15:42:04'),
(57, NULL, 3, '1741107600000', 'T1', 11, '2025-03-01 15:42:10', '2025-03-01 15:42:10'),
(58, NULL, 3, '1741107600000', 'T2', 11, '2025-03-01 15:42:10', '2025-03-01 15:42:10'),
(59, NULL, 3, '1741107600000', 'T3', 11, '2025-03-01 15:42:10', '2025-03-01 15:42:10'),
(60, NULL, 3, '1741107600000', 'T4', 11, '2025-03-01 15:42:10', '2025-03-01 15:42:10'),
(61, NULL, 3, '1741107600000', 'T5', 11, '2025-03-01 15:42:10', '2025-03-01 15:42:10'),
(62, NULL, 3, '1741107600000', 'T6', 11, '2025-03-01 15:42:10', '2025-03-01 15:42:10'),
(63, NULL, 3, '1741107600000', 'T1', 12, '2025-03-01 15:42:15', '2025-03-01 15:42:15'),
(64, NULL, 3, '1741107600000', 'T2', 12, '2025-03-01 15:42:15', '2025-03-01 15:42:15'),
(65, NULL, 3, '1741107600000', 'T3', 12, '2025-03-01 15:42:15', '2025-03-01 15:42:15'),
(66, NULL, 3, '1741107600000', 'T4', 12, '2025-03-01 15:42:15', '2025-03-01 15:42:15'),
(67, NULL, 3, '1741107600000', 'T5', 12, '2025-03-01 15:42:15', '2025-03-01 15:42:15'),
(68, NULL, 3, '1741107600000', 'T6', 12, '2025-03-01 15:42:15', '2025-03-01 15:42:15'),
(69, NULL, 3, '1741107600000', 'T1', 14, '2025-03-01 15:42:20', '2025-03-01 15:42:20'),
(70, NULL, 3, '1741107600000', 'T2', 14, '2025-03-01 15:42:20', '2025-03-01 15:42:20'),
(71, NULL, 3, '1741107600000', 'T3', 14, '2025-03-01 15:42:20', '2025-03-01 15:42:20'),
(72, NULL, 3, '1741107600000', 'T4', 14, '2025-03-01 15:42:20', '2025-03-01 15:42:20'),
(73, NULL, 3, '1741107600000', 'T5', 14, '2025-03-01 15:42:20', '2025-03-01 15:42:20'),
(74, NULL, 3, '1741107600000', 'T6', 14, '2025-03-01 15:42:20', '2025-03-01 15:42:20'),
(75, NULL, 3, '1740762000000', 'T1', 12, '2025-03-01 16:45:17', '2025-03-01 16:45:17'),
(76, NULL, 3, '1740762000000', 'T2', 12, '2025-03-01 16:45:17', '2025-03-01 16:45:17'),
(77, NULL, 3, '1740762000000', 'T3', 12, '2025-03-01 16:45:17', '2025-03-01 16:45:17');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('migration-blog.js'),
('migration-create-allcode.js'),
('migration-create-booking.js'),
('migration-create-clinic.js'),
('migration-create-doctor-infor.js'),
('migration-create-history.js'),
('migration-create-ScheduleList.js'),
('migration-create-specialization.js'),
('migration-create-user.js'),
('migration-doctor_clinic_specialization.js'),
('migration-markdown.js');

-- --------------------------------------------------------

--
-- Table structure for table `specialization`
--

CREATE TABLE `specialization` (
  `id` int(11) NOT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `specialization`
--

INSERT INTO `specialization` (`id`, `description`, `image`, `name`, `createdAt`, `updatedAt`) VALUES
(6, '<h2><strong>Bác sĩ Cơ Xương Khớp giỏi</strong></h2><p>Danh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại Việt Nam:</p><ul><li>Các chuyên gia có quá trình đào tạo bài bản, nhiều kinh nghiệm</li><li>Các giáo sư, phó giáo sư đang trực tiếp nghiên cứu và giảng dạy tại Đại học Y khoa Hà Nội</li><li>Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu Khoa Cơ Xương Khớp - Bệnh viện Bạch Mai, Bệnh viện Hữu nghị Việt Đức,Bệnh Viện E.</li><li>Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hiệp hội Cơ Xương Khớp, Hội Thấp khớp học,...</li><li>Được nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...</li></ul><h2><strong>Bệnh Cơ Xương Khớp</strong></h2><ul><li>Gout</li><li>Thoái hóa khớp: khớp gối, cột sống thắt lưng, cột sống cổ</li><li>Viêm khớp dạng thấp, Viêm đa khớp, Viêm gân</li><li>Tràn dịch khớp gối, Tràn dịch khớp háng, Tràn dịch khớp khủy, Tràn dịch khớp vai</li><li>Loãng xương, đau nhức xương</li><li>Viêm xương, gai xương</li><li>Viêm cơ, Teo cơ, chứng đau mỏi cơ</li><li>Yếu cơ, Loạn dưỡng cơ</li><li>Các chấn thương về cơ, xương, khớp</li></ul>', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1737557713/101627-co-xuong-khop_hpy4ty.png', 'Cơ Xương Khớp', '2025-01-22 14:55:14', '2025-01-22 14:55:14'),
(7, '<h2><strong>Bác sĩ Thần kinh giỏi</strong></h2><p>Danh sách các giáo sư, bác sĩ chuyên khoa Thần kinh giỏi:</p><ul><li>Các giáo sư, bác sĩ uy tín đầu ngành chuyên khoa Thần kinh đã và đang công tác tại các bệnh viện lớn như: Bệnh viện Bạch Mai, Bệnh viện Việt Đức, Bệnh viện 108, Bệnh viện Đại học Y Hà Nội, Bệnh viện 103.</li><li>Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hội Thần kinh Việt Nam, Hội Phẫu thuật Thần kinh...<br>&nbsp;</li><li>Được nhà nước công nhận các danh hiệu Thầy thuốc nhân dân, thầy thuốc ưu tú, bác sĩ cao cấp.</li></ul><h2><strong>Khám bệnh chuyên khoa Thần kinh</strong></h2><ul><li>Bại Não &nbsp;&nbsp;</li><li>Đau đầu, chóng mặt, buồn nôn&nbsp; &nbsp;</li><li>Bệnh Pakison, bệnh tiền đình &nbsp; &nbsp;</li><li>Bị co cơ, căng dây thần kinh &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;</li><li>Động kinh, có những cơn vãng ý thức &nbsp; &nbsp;</li><li>Bị tê bì nửa mặt, chèn dây thần kinh</li><li>Bồn chồn, lo lắng, hồi hộp, chân tay run &nbsp; &nbsp;</li><li>Có dấu hiệu tăng động &nbsp; &nbsp;&nbsp;<br>&nbsp;</li><li>Co rút cổ, đau đầu với mặt,&nbsp;chân tay, vã mồ hôi&nbsp; &nbsp;<br>&nbsp;</li><li>Chấn thương đầu, dây thần kinh</li></ul>', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1737557848/101739-than-kinh_rcxxwy.png', 'Thần kinh', '2025-01-22 14:57:29', '2025-01-22 14:57:29'),
(8, '<p>Danh sách các bác sĩ Tiêu hóa uy tín đầu ngành tại Việt Nam:</p><ul><li>Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên ngành Tiêu hóa tại Hà Nội</li><li>Các giáo sư, phó giáo sư là giảng viên Đại học Y khoa Hà Nội</li><li>Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu như Bệnh viện Bạch Mai, Bệnh Viện Việt Đức, Bệnh Viện Nhi Trung ương, Bệnh viện Y học Cổ truyền Việt Nam...</li><li>Được nhà nước công nhận các danh hiệu Thầy thuốc nhân dân, thầy thuốc ưu tú, bác sĩ cao cấp,...</li></ul><p><strong>Tư vấn, khám và điều trị các Bệnh Tiêu hóa</strong></p><ul><li>Ăn uống kém, không ngon</li><li>Rối loạn tiêu hóa, táo bón, trĩ</li><li>Nhiễm vi khuẩn HP (Helicobacter pylori)</li><li>Nội soi dạ dày, đại tràng, tiêu hóa</li><li>Buồn nôn, chướng bụng, đầy bụng ợ chua, đầy hơi</li><li>Co thắt thực quản,&nbsp;Hội chứng ruột kích thích</li><li>Đau bụng,&nbsp;dạ dày, đại tràng, thượng vị<br>&nbsp;</li><li>Viêm đại tràng, dạ dày,&nbsp;tá tràng<br>&nbsp;</li><li>Ung thư dạ dày, U nang tuyến tụy</li><li>Bệnh lý về gan, mật</li></ul>', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1737557942/101713-tieu-hoa_o614ze.png', 'Tiêu hoá', '2025-01-22 14:59:03', '2025-01-22 14:59:03'),
(9, '<h2><strong>Bác sĩ tim mạch giỏi</strong></h2><p>Danh dách các bác sĩ tim mạch uy tín đầu ngành tại Việt Nam:</p><ul><li>Các chuyên gia được đào tạo bài bản về chuyên ngành Tim mạch tại các trường đại học trong nước và quốc tế.</li><li>Các giáo sư, phó giáo sư nghiên cứu và giảng dạy tại Đại học Y Hà Nội</li><li>Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu như Viện Tim Mạch Quốc Gia, Bệnh viện Bạch Mai, Bệnh viện Việt Đức, Bệnh Viện E, Bệnh Viện Tim Hà Nội</li><li>Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hiệp hội Tim Mạch Việt Nam</li><li>Đạt danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...</li></ul><p><strong>Khám tư vấn tim mạch</strong></p><ul><li>Khó thở, Đau ngực, đau tim</li><li>Tăng huyết áp, hạ huyết áp</li><li>Rối loạn mỡ máu, cao huyết áp, chóng mặt</li><li>Bệnh van tim (Hẹp hở van tim),&nbsp;Hẹp động mạch chủ</li><li>Cảm giác hồi hộp, tim đập nhanh &nbsp; &nbsp;</li><li>Tim bẩm sinh, có tiền sử bệnh tim to,&nbsp;tiền sử tai biến &nbsp; &nbsp;</li><li>Đã đặt stent tim,&nbsp;nong động mạch vành</li><li>Giãn tĩnh mạch chân</li></ul>', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1737557968/101713-tim-mach_hztrqo.png', 'Tim mạch', '2025-01-22 14:59:29', '2025-01-22 14:59:29'),
(10, '<h2><strong>Bác sĩ Chuyên khoa Tai Mũi Họng</strong></h2><p>&nbsp;</p><p><strong>Danh sách các bác sĩ uy tín đầu ngành tại Việt Nam:</strong></p><ul><li>Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên ngành Tai Mũi Họng tại Hà Nội</li><li>Các giáo sư, phó giáo sư là giảng viên Đại học Y khoa Hà Nội</li><li>Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu như Bệnh viện Bạch Mai, Bệnh Viện Tai Mũi Họng Trung ương, Bệnh viện Quân Y 108...</li><li>Được nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ cao cấp,...</li></ul><p><strong>Các bệnh Tai Mũi Họng</strong></p><ul><li>Ù tai, đau tai, chảy máu tai</li><li>Thủng màng nhĩ, điếc đột ngột<br>&nbsp;</li><li>Viêm tai giữa</li><li>Amidan, V.A<br>&nbsp;</li><li>Viêm xoang</li><li>Nghẹt mũi</li><li>Hay bị chảy máu cam</li><li>Đau cổ họng, khó nuốt<br>&nbsp;</li><li>Ho kéo dài</li><li>Ngủ ngáy</li></ul>', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1737557994/101713-tai-mui-hong_wycf5t.png', 'Tai Mũi Họng', '2025-01-22 14:59:55', '2025-01-22 14:59:55'),
(11, '<h2><strong>Bác sĩ Chuyên khoa Cột sống</strong></h2><p>Danh sách các bác sĩ Cột sống uy tín đầu ngành tại Việt Nam.</p><ul><li>Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên khoa Thần kinh - Cột sống - Xương khớp tại Hà Nội</li><li>Các giáo sư, tiến sĩ, bác sĩ là giảng viên Đại học Y khoa Hà Nội, Học viện Quân Y.</li><li>Các bác sĩ đã, đang công tác tại chuyên Khoa Thần Kinh, Cột sống, Xương Khớp - Bệnh viện Bạch Mai, Bệnh Viện Việt Đức, Bệnh Viện Trung ương Quân đội 108, Bệnh viện 103...</li><li>Được nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...<br>&nbsp;</li></ul><p><strong>Bệnh Thần kinh - Cột sống</strong></p><ul><li>Đau cột sống, đau thắt lưng</li><li>Chấn thương cột sống</li><li>Cột sống bị đau, sưng, cong, vẹo<br>&nbsp;</li><li>Đau mỏi cổ vai gáy, bả vai</li><li>Đau tê mông xuống chân</li><li>Phồng đĩa đệm<br>&nbsp;</li><li>Tê bì tay chân</li><li>Thóa hóa đốt sống</li><li>Thoái hóa L4, L5<br>&nbsp;</li><li>Thoát vị đĩa đệm</li><li>Vôi hóa cột sống<br>&nbsp;</li><li>Xẹp cột sống</li></ul>', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1737558020/101627-cot-song_sh7jvz.png', 'Cột sống', '2025-01-22 15:00:21', '2025-01-22 15:00:21'),
(12, '<p><strong>Bác sĩ Y học Cổ truyền giỏi</strong></p><p>Danh sách các bác sĩ Y học Cổ truyền uy tín đầu ngành tại Việt Nam:</p><ul><li>Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên khoa Y học Cổ truyền</li><li>Các bác sĩ đã, đang công tác tại chuyên Khoa Y học Cổ truyền - Bệnh viện Y học Cổ truyền Trung ương, Bệnh viện Bạch Mai, Thanh Nhàn..</li><li>Được nhà nước công nhận các danh hiệu Thầy thuốc nhân dân, thầy thuốc ưu tú, bác sĩ cao cấp,..</li></ul><p>&nbsp;</p><p><strong>Tư vấn, khám và điều trị các vấn đề:</strong></p><ul><li>Bệnh lý thần kinh: đau đầu, mất ngủ, suy nhược thần kinh...</li><li>Bệnh lý cơ xương khớp: đau mỏi tay chân, thoái hóa khớp, viêm khớp...</li><li>Bệnh lý tim mạch: Tăng huyết áp, huyết áp thấp, đau thắt ngực...</li><li>Bệnh lý đường tiêu hóa: đau bụng, rối loạn chức năng tiêu hóa...</li></ul>', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1737558045/101739-y-hoc-co-truyen_ndfpul.png', 'Y học Cổ truyền', '2025-01-22 15:00:46', '2025-01-22 15:00:46'),
(13, '<p>Bác sĩ Y học Cổ truyền uy tín đầu ngành tại Việt Nam:</p><ul><li>Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên khoa Y học Cổ truyền</li><li>Các bác sĩ đã, đang công tác tại chuyên Khoa Y học Cổ truyền - Bệnh viện Y học Cổ truyền Trung ương, Bệnh viện Bạch Mai, Thanh Nhàn..</li><li>Được nhà nước công nhận các danh hiệu Thầy thuốc nhân dân, thầy thuốc ưu tú, bác sĩ cao cấp,..</li></ul><p><strong>Tư vấn, khám và điều trị các vấn đề:</strong></p><ul><li>Bệnh lý thần kinh: đau đầu, mất ngủ, suy nhược thần kinh...</li><li>Bệnh lý cơ xương khớp: đau mỏi tay chân, thoái hóa khớp, viêm khớp...</li><li>Bệnh lý tim mạch: Tăng huyết áp, huyết áp thấp, đau thắt ngực...</li><li>Bệnh lý đường tiêu hóa: đau bụng, rối loạn chức năng tiêu hóa</li></ul>', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1737558068/101627-cham-cuu_vsnpwp.png', 'Châm cứu', '2025-01-22 15:01:08', '2025-01-22 15:01:08'),
(14, '<h2><strong>Bác sĩ Sản phụ khoa</strong></h2><p>BookingCare cung cấp thông tin và lịch khám của các bác sĩ chuyên khoa sản giỏi tại Hà Nội.</p><ul><li>&nbsp;Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên ngành Sản phụ khoa tại Hà Nội</li><li>Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn tại Hà Nội&nbsp;như: Bệnh viện Phụ sản Trung ương, Bệnh viện Phụ sản Hà Nội, Khoa Sản - Bệnh viện Bạch Mai.</li></ul><p><strong>Khám và điều trị</strong><br>&nbsp;</p><ul><li>Rối loạn kinh nguyệt, chậm kinh, đau bụng kinh&nbsp; &nbsp;</li><li>Tắc hai vòi trứng, Đa nang buồng trứng, Chụp vòi trứng,&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</li><li>Khám hiếm muộn, vô sinh &nbsp; &nbsp;<br>&nbsp;</li><li>Khám Phụ Khoa &nbsp;&nbsp;&nbsp;</li><li>Khám thai sản &nbsp;&nbsp;&nbsp;</li><li>Khám tiền hôn nhân, Tiền sinh &nbsp; &nbsp;</li><li>Kiểm tra phụ khoa &nbsp; &nbsp;<br>&nbsp;</li><li>Loạn dưỡng vú &nbsp;&nbsp;&nbsp;</li><li>Rong kinh kéo dài &nbsp; &nbsp;<br>&nbsp;</li><li>Siêu âm thai định kỳ &nbsp;&nbsp;&nbsp;</li><li>Thai lưu<br>&nbsp;</li><li>U xơ tử cung,&nbsp;Viêm lộ tuyến</li></ul>', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1737558092/101713-san-phu-khoa_cnxcji.png', 'Sản Phụ khoa', '2025-01-22 15:01:33', '2025-01-22 15:01:33');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `positionId` varchar(255) DEFAULT NULL,
  `roleId` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `address`, `image`, `gender`, `phone`, `positionId`, `roleId`, `isActive`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'anh', 'nguyen', 'anhnguyen@gmail.com', '123456', '187a le van luong', '', '1', '0792207233', '', 'R1', 1, '2024-12-13 11:04:56', '2024-12-13 11:04:56', '0000-00-00 00:00:00'),
(2, 'Pham Nguyen', 'Quynh Nhu', 'nhupham@gmail.co', '$2a$10$dZRNF3fmZ52Ywnd1c3T4WOJsdqO4lHWAZbm3j7T5ZAgKfo/TPajBO', '187a le van luong, Nha be', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1736935534/143035-drtranthimaithy400x400_dypbvw.jpg', '1', '', 'P1', 'R2', NULL, '2024-12-13 11:12:00', '2025-01-15 10:05:35', '0000-00-00 00:00:00'),
(3, ' Nguyen', 'Hoang Anh', 'hoanganh@gmail.co', '$2a$10$dZOv/HkC13okRZTs5OzrSeoIxFcovXZ4NRtOBkyE1rcXAJpuEavEW', '187a le van luong, Nha be', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1736935473/162900-bs-duong-minh-tri1_so3sgc.jpg', '0', '', 'P4', 'R2', NULL, '2024-12-13 11:18:28', '2025-01-15 10:04:35', '0000-00-00 00:00:00'),
(4, 'Vu', 'Pham', 'vupham@gmail.co', '$2a$10$dZOv/HkC13okRZTs5OzrSeoIxFcovXZ4NRtOBkyE1rcXAJpuEavEW', '23 Điện Biên Phủ, Hồ Chí Minh', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1736935609/160559-161139-bs-huyen_llxxku.png', '0', '', 'P4', 'R2', NULL, '2024-12-13 11:19:36', '2025-01-15 10:06:51', '0000-00-00 00:00:00'),
(5, 'Vu', 'Pham', 'vupham@gmail.co', '$2a$10$dZOv/HkC13okRZTs5OzrSeoIxFcovXZ4NRtOBkyE1rcXAJpuEavEW', '187a le van luong, Nha be', NULL, '1', NULL, NULL, 'R2', NULL, '2024-12-13 11:19:40', '2024-12-13 11:19:40', '0000-00-00 00:00:00'),
(6, 'Vu', 'Quốc Anh', 'alnguyen00000@gmail.com', '$2a$10$TdnRUxLpZfLpYhvyE0eQI.DOXqCLO5E.xLAQYZtPHYgnVWiC9ZBTS', '31C Ly Tu Trong, Ho CHi inh', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1736935635/155618-1bsi-nghi-hung-viet_bpkryg.png', '0', '', 'P4', 'R2', NULL, '2024-12-17 07:06:22', '2025-01-15 10:07:17', '0000-00-00 00:00:00'),
(7, 'Nhu', 'Pham', 'nhupham@gmail.com', '$2a$10$PtT2J6A..WqbwHrak2NV6uAsy4BMJVU9FCNszWroG2PKXHQOPRoeO', '123 Hai ba trung', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1734493261/logo_qfavb3.png', '1', NULL, 'P3', 'R1', NULL, '2024-12-18 03:41:02', '2024-12-18 03:41:02', '0000-00-00 00:00:00'),
(8, 'nhu', 'pham', 'nhupham2402@gmail.com', '$2a$10$SYKD7kx82/JV.Mbv19Fvn.dwVtrUBhYSEfKyBw4UNf4bmEXXaOZP2', NULL, NULL, '0', NULL, NULL, NULL, NULL, '2025-01-15 05:24:25', '2025-01-15 05:24:25', '0000-00-00 00:00:00'),
(9, 'Quốc Bảo', 'nguyễn', 'hihi@gmail.com', '$2a$10$SYKD7kx82/JV.Mbv19Fvn.dwVtrUBhYSEfKyBw4UNf4bmEXXaOZP2', '98 Nguyễn Thiện Thuật, Hồ Chí  Minh', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1736935685/143327-bs-man1_yuad2u.jpg', '0', '', 'P1', 'R2', NULL, '2025-01-15 05:28:32', '2025-01-15 10:08:07', '0000-00-00 00:00:00'),
(11, 'Nguyễn ', 'Trần Trung', 'asadca@gmail.com', NULL, 'Hồ Chí Minh', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1737554455/114134-bs-nguyen-tran-trung1_ht7gqc.jpg', NULL, '0792345673', 'P4', 'R2', NULL, '2025-01-17 13:54:30', '2025-01-22 14:00:56', '0000-00-00 00:00:00'),
(12, 'Vũ', 'Văn Hòa', 'vuvanhoe@gmail.com', '$2a$10$xjL8BFJVUTTRTKabuyJuYuSXC58pst3.NUyh.x.Vqo0Xy3SdWwQ6e', 'HỒ Chí Minh', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1737554379/144127-bs-hoe1_s3835t.jpg', '0', '0792207233', 'P2', 'R2', NULL, '2025-01-22 13:52:41', '2025-01-22 13:59:40', '0000-00-00 00:00:00'),
(13, 'Nguyễn ', 'Quang Hải', 'patient@gmail.com', '$2a$10$xjL8BFJVUTTRTKabuyJuYuSXC58pst3.NUyh.x.Vqo0Xy3SdWwQ6e', 'Hà Nội', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1737554561/114134-bs-nguyen-tran-trung1_a67vqp.jpg', '0', NULL, NULL, 'R3', NULL, '2025-01-22 14:02:42', '2025-01-22 14:02:42', '0000-00-00 00:00:00'),
(14, 'Hà', 'Văn Quyết', 'havanquyet@gmail.com', '$2a$10$5HZxZ/TM5XUCbEx/kiLvtO7J14N8TyalEdPvdp8xAIvJ.M7pbzR1u', '34 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1737558686/155650-gs-ha-van-quyet_ihxeqz.jpg', '0', NULL, 'P4', 'R2', NULL, '2025-01-22 15:11:28', '2025-01-22 15:11:28', '0000-00-00 00:00:00'),
(15, 'Lê', 'Văn Hoài', 'doctor1@gmail.com', '$2a$10$5HZxZ/TM5XUCbEx/kiLvtO7J14N8TyalEdPvdp8xAIvJ.M7pbzR1u', '32/2 Thống Nhất, Phường 10, Q. Gò Vấp, Tp Hồ Chí Minh', 'https://res.cloudinary.com/dx3nwkh2i/image/upload/v1737558828/140137-bs-le-van-doai-hd1_a6vvhc.jpg', '0', NULL, 'P2', 'R2', NULL, '2025-01-22 15:13:49', '2025-01-22 15:13:49', '0000-00-00 00:00:00'),
(16, NULL, NULL, 'as', NULL, NULL, NULL, NULL, NULL, NULL, 'R3', NULL, '2025-03-01 21:10:37', '2025-03-01 21:10:37', '0000-00-00 00:00:00'),
(17, NULL, NULL, '34234', NULL, NULL, NULL, NULL, NULL, NULL, 'R3', NULL, '2025-03-01 21:11:32', '2025-03-01 21:11:32', '0000-00-00 00:00:00'),
(18, NULL, NULL, 'akjshkasd@gmail.com', '$2a$10$zHFqTHdOQGzMx1xMbo2MTeV.qZyK5yHufU/DpPS6CD7TIN7j.zmhi', 'sdfsdf', NULL, NULL, NULL, NULL, 'R3', NULL, '2025-03-01 21:52:40', '2025-03-01 21:52:40', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `allcode`
--
ALTER TABLE `allcode`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `clinic`
--
ALTER TABLE `clinic`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctor_clinic_specialization`
--
ALTER TABLE `doctor_clinic_specialization`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctor_infor`
--
ALTER TABLE `doctor_infor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `histories`
--
ALTER TABLE `histories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `markdowns`
--
ALTER TABLE `markdowns`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `schedulelists`
--
ALTER TABLE `schedulelists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `specialization`
--
ALTER TABLE `specialization`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `allcode`
--
ALTER TABLE `allcode`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `clinic`
--
ALTER TABLE `clinic`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `doctor_clinic_specialization`
--
ALTER TABLE `doctor_clinic_specialization`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `doctor_infor`
--
ALTER TABLE `doctor_infor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `histories`
--
ALTER TABLE `histories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `markdowns`
--
ALTER TABLE `markdowns`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `schedulelists`
--
ALTER TABLE `schedulelists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT for table `specialization`
--
ALTER TABLE `specialization`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
