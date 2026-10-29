# ☕ Starbucks Rewards Vietnam · Real-time Inventory & Kitchen Display System (KDS)

> **Đồ án môn Hệ thống Thông tin Quản lý (Management Information Systems - MIS)**  
> **Chủ đề:** Giải quyết bài toán *"Tồn kho ảo" (Phantom Inventory)*, Tối ưu hóa Dòng chảy Đơn hàng và Phân tích Khả thi Kinh tế (ROI) cho chuỗi **150 cửa hàng Starbucks tại Việt Nam**.  
> 🌐 **Website Prototype:** [https://minhvovojunmin-cpu.github.io/starbucks-rewards-vn-mis/](https://minhvovojunmin-cpu.github.io/starbucks-rewards-vn-mis/)

---

## 📌 1. Bối cảnh & Vấn đề Doanh nghiệp (Business Pain Points)

Tại chuỗi cửa hàng cà phê cao cấp như Starbucks Việt Nam, sự bùng nổ của tính năng đặt hàng trước trên ứng dụng di động (*Mobile Order & Pay*) dẫn đến hai điểm nghẽn nghiêm trọng:
1. **"Phantom Inventory" (Tồn kho ảo):** Khách đặt và thanh toán thành công món (ví dụ: *Matcha Latte*, *Caramel Macchiato*) trên app, nhưng khi đến quầy thì nguyên liệu đã hết. Việc hủy đơn phút chót gây trải nghiệm thất vọng và tổn thất doanh thu.
2. **Nghẽn quầy vào giờ cao điểm:** Barista xử lý lẫn lộn giữa đơn khách đang đứng chờ tại quầy (*Walk-in*) và đơn đổ về từ ứng dụng (*Mobile Order*), dẫn đến trễ hẹn và quá tải cục bộ.

---

## 🚀 2. Các Sản phẩm Bàn giao trong Đề án (Deliverables)

Dự án đề xuất giải pháp hệ thống tích hợp toàn diện gồm 4 thành phần chính:

### ⚡ 0. Màn hình Demo Song Song App ⇄ KDS ([demo.html](./demo.html))
- Đặt **App Khách hàng** và **Màn hình Barista KDS** cạnh nhau trên cùng một màn hình để kiểm thử đồng bộ 2 chiều thời gian thực mà không cần chuyển tab.

### 📱 A. Ứng dụng Khách hàng Mới ([customer-app.html](./customer-app.html))
- **Thực đơn 18 món chuẩn Starbucks VN (4 danh mục):** Cà phê (8 món), Trà (4 món), Frappuccino (3 món), Bánh & Đồ ăn (3 món) kèm tùy chỉnh Size, Độ ngọt, Sữa và Hâm nóng.
- **Đặt đơn đẩy thẳng sang KDS kèm tên khách hàng:** Khi khách nhập tên và bấm Đặt hàng, vé đơn xuất hiện ngay ở cột **ĐƠN APP** bên màn hình Barista kèm tên khách và chuông báo.
- **Theo dõi tiến độ đơn trực tiếp (Tab "Đơn của tôi"):** Trạng thái tự động chuyển từ *Chờ pha* → *Barista đang pha chế* → *Sẵn sàng – mời nhận món!* khi Barista bấm nút trên KDS.
- **Thời gian chờ động (Dynamic Wait Time Banner):** Banner cảnh báo tự động tính toán theo tải trọng thời gian thực: *"Cửa hàng hiện đang đông. Thời gian nhận món dự kiến: 15 phút nữa"*.
- **Khóa món tự động khi hết nguyên liệu:** Khi Barista báo hết nguyên liệu trên KDS (trong 13 nguyên liệu cốt lõi), mọi món liên quan trên App tự động khóa kèm thẻ đỏ báo rõ nguyên liệu đang tạm hết.

### 🖥️ B. Màn hình Điều phối Quầy Barista KDS ([kds.html](./kds.html))
- **Giao diện High-Contrast chuẩn Quầy Bar:** Tương phản rõ ràng giữa 2 luồng đơn và trạng thái thời gian.
- **Tách luồng đơn 50/50 rõ rệt kèm Tên khách hàng (`👤 Tên khách`):**
  - **Cột Trái (Vàng hổ phách):** *ĐƠN TẠI QUẦY (WALK-IN)* – Ưu tiên phục vụ khách đang đứng tại cửa hàng (có nút **+ Đơn tại quầy** để tạo nhanh đơn POS).
  - **Cột Phải (Xanh Starbucks):** *ĐƠN APP (MOBILE ORDER)* – Nhận đơn trực tiếp từ App khách hàng theo thời gian thực.
- **Quản lý Tồn kho 13 nguyên liệu (`📦 Tồn kho`):** Bật/tắt trạng thái Còn/Hết của từng nguyên liệu, đồng bộ khóa/mở món tức thời trên App khách hàng.
- **Bộ đếm thời gian mã hóa màu (Color-Coded Timers):**
  - 🟢 **Xanh:** < 4 phút (Đúng tiến độ)
  - 🟡 **Vàng:** 4 – 10 phút (Cần chú ý)
  - 🔴 **Đỏ:** > 10 phút (Khẩn cấp)

### 📈 C. Bảng Đánh giá Khả thi Kinh tế ROI 3 Năm ([roi.html](./roi.html))
Mô hình tài chính đầu tư cho **150 cửa hàng Starbucks tại Việt Nam** (300 màn hình KDS):

| Hạng mục tài chính | Năm 0 (Đầu tư) | Năm 1 | Năm 2 | Năm 3 |
| :--- | :---:| :---:| :---:| :---:|
| **CAPEX (Phần mềm $270k + KDS $240k + Lắp đặt + Dự phòng)** | **$651,750** | – | – | – |
| **OPEX (Cloud, Bảo trì SLA, Giấy phép SaaS, Bảo hành)** | – | **$168,600** | **$168,600** | **$168,600** |
| **Tổng Chi phí (Total Costs)** | **$651,750** | **$168,600** | **$168,600** | **$168,600** |
| Giữ lại doanh thu đơn hủy app | – | $166,944 | $238,491 | $238,491 |
| Giữ chân khách hàng thân thiết | – | $141,750 | $202,500 | $202,500 |
| Tiết kiệm giờ công Barista | – | $61,320 | $87,600 | $87,600 |
| Phục vụ thêm ly nhờ KDS tách luồng | – | $126,473 | $180,675 | $180,675 |
| Cắt giảm lãng phí nguyên liệu realtime | – | $132,300 | $189,000 | $189,000 |
| **Tổng Lợi ích (Total Benefits)** | – | **$628,786** | **$898,266** | **$898,266** |
| **Dòng tiền thuần (Net Cash Flow)** | **-$651,750** | **+$460,186** | **+$729,666** | **+$729,666** |
| **Dòng tiền lũy kế (Cumulative Cash Flow)** | **-$651,750** | **-$191,564** | **+$538,102** | **+$1,267,768** |

- 🎯 **Thời gian hoàn vốn (Payback Period):** **1.26 năm** (Đạt điểm hòa vốn ngay đầu Năm 2).
- 💰 **Dòng tiền dương Năm 3:** **$1,267,768 USD** (Vượt mốc 1.2 triệu USD).
- 📊 **Tỷ suất hoàn vốn 3 năm (ROI):** **109.5%**.
- 💎 **NPV (@10% WACC):** **$917,643 USD**.

---

## ⚡ 3. Phân tích Lợi thế nhờ Quy mô (Economies of Scale)

Một phát hiện quan trọng trong bài toán kinh tế của dự án:
- **Biến phí phần cứng:** Khi số lượng cửa hàng tăng từ 100 lên 150 cửa hàng, chi phí mua màn hình KDS tăng tương ứng từ **$160k (200 màn) lên $240k (300 màn)**.
- **Định phí phần mềm không đổi:** Chi phí phát triển phần mềm API & tích hợp WMS/CRM được **giữ nguyên ở mức $270k**.
- **Hiệu ứng quy mô:** Chi phí phần mềm phân bổ bình quân giảm từ **$2,700/cửa hàng xuống còn $1,800/cửa hàng (-33.3%)**. Trong khi đó, doanh thu giữ lại và hiệu quả năng suất tăng 50%, giúp rút ngắn thời gian hoàn vốn xuống đầu Năm 2 và đưa dòng tiền tích lũy Năm 3 vượt mốc $1.26M USD.

---

## 🛠️ 4. Công nghệ & Kiến trúc Hệ thống

- **Frontend:** HTML5, Tailwind CSS, JavaScript ES6+.
- **UX/UI Design:** Chuẩn màu thương hiệu Starbucks (`#00704A`, Dark Green `#1E3932`, Warm Cream `#F2F0EB`, Neon Green `#2BEE9B`).
- **Real-time Synchronization:** Cơ chế chia sẻ trạng thái tức thời giữa hai tab App Khách hàng và KDS Barista qua Web Storage Event.
- **Thiết kế Responsive:** Tương thích trên cả Mobile, Tablet ngang (iPad/Android KDS) và Màn hình Laptop/Desktop.

---

## 💻 5. Hướng dẫn Chạy Thử nghiệm

1. Clone repository về máy:
   ```bash
   git clone https://github.com/minhvovojunmin-cpu/starbucks-rewards-vn-mis.git
   cd starbucks-rewards-vn-mis
   ```
2. Mở file `index.html` bằng trình duyệt bất kỳ (Chrome, Safari, Edge, Firefox).
3. **Mẹo trình diễn:** Mở 2 tab song song:
   - Tab 1: [customer-app.html](./customer-app.html) (Màn hình App khách hàng).
   - Tab 2: [kds.html](./kds.html) (Màn hình Barista KDS).
   - Khi bạn bấm báo *Hết nguyên liệu* hoặc đổi *Mức tải trọng* trên KDS, tab App Khách hàng sẽ lập tức cập nhật thời gian chờ và khóa món theo thời gian thực!

---
*Đồ án MIS thực hiện cho chuỗi Starbucks Rewards Vietnam.*
