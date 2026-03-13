# 🌤️ Weather Forecast - Dự Báo Thời Tiết

Một trang web dự báo thời tiết đẹp và sang trọng với giao diện hiện đại, sử dụng dữ liệu thời tiết thực từ OpenWeatherMap API, hiển thị thông tin thời tiết chi tiết và hình ảnh thành phố theo điều kiện thời tiết.

## ✨ Tính năng

- **Dự báo thời tiết hiện tại**: Nhiệt độ, cảm giác như, độ ẩm, gió, tầm nhìn, áp suất
- **Dự báo 5 ngày**: Thông tin thời tiết chi tiết cho 5 ngày tới
- **Thời tiết 3 thành phố chính**: Hiển thị thời tiết của Vũng Tàu, Hồ Chí Minh, Hà Nội cùng lúc
- **Hình ảnh thành phố**: Background thay đổi theo thành phố và điều kiện thời tiết
- **Giao diện đẹp**: Thiết kế hiện đại với hiệu ứng mượt mà
- **Responsive**: Tương thích với mọi thiết bị
- **Đa ngôn ngữ**: Hỗ trợ tiếng Việt
- **Thông tin bổ sung**: Giờ bình minh, hoàng hôn
- **API Status Check**: Kiểm tra trạng thái API real-time
- **Dữ liệu thực**: Sử dụng dữ liệu thời tiết thực từ OpenWeatherMap API

## 🚀 Cách sử dụng

1. **Mở trang web**: Mở file `index.html` trong trình duyệt
2. **Kiểm tra API**: Xem trạng thái API ở cuối trang
3. **Xem 3 thành phố chính**: Tự động hiển thị thời tiết Vũng Tàu, Hồ Chí Minh, Hà Nội
4. **Tìm kiếm thành phố khác**: Nhập tên thành phố vào ô tìm kiếm
5. **Xem thông tin**: Nhấn Enter hoặc click nút tìm kiếm
6. **Khám phá**: Xem dự báo 5 ngày và thông tin chi tiết

## 🛠️ Công nghệ sử dụng

- **HTML5**: Cấu trúc trang web
- **CSS3**: Styling và animations
- **JavaScript ES6+**: Logic và API calls
- **OpenWeatherMap API**: Dữ liệu thời tiết
- **Font Awesome**: Icons
- **Google Fonts**: Typography

## 📊 API Key & Dữ liệu

### ✅ API Key đã được tích hợp
```javascript
const API_KEY = 'b65a36943fbf04ea6a566473945591af';
```

**Trạng thái API**: ✅ Working (đã kiểm tra và hoạt động)

### 📋 Dữ liệu thực từ API
Trang web sử dụng dữ liệu thời tiết thực từ OpenWeatherMap API:
- **Dữ liệu hiện tại**: Nhiệt độ, độ ẩm, gió, tầm nhìn, áp suất
- **Dự báo 5 ngày**: Thông tin chi tiết cho 5 ngày tới
- **Cập nhật real-time**: Dữ liệu được cập nhật liên tục

**Lợi ích**:
- Dữ liệu thời tiết chính xác và cập nhật
- Thông tin chi tiết từ các trạm thời tiết
- Hỗ trợ mọi thành phố trên thế giới

## 📱 Responsive Design

Trang web được thiết kế để hoạt động tốt trên:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (480px - 767px)
- Small Mobile (< 480px)

## 🎨 Thiết kế

- **Gradient backgrounds**: Sử dụng gradient đẹp mắt
- **Glassmorphism**: Hiệu ứng kính mờ hiện đại
- **Smooth animations**: Chuyển động mượt mà
- **Color themes**: Thay đổi màu sắc theo thời tiết
- **Card-based layout**: Bố cục card dễ nhìn

## 🔧 Cài đặt

1. Clone hoặc download project
2. Mở file `index.html` trong trình duyệt
3. Không cần cài đặt thêm dependencies
4. Đảm bảo có kết nối internet để sử dụng API

## 🌍 Hỗ trợ thành phố

Trang web hỗ trợ tìm kiếm thời tiết cho mọi thành phố trên thế giới và tự động hiển thị thời tiết của **3 thành phố chính Việt Nam**:

### 🏙️ Thành phố Việt Nam được hiển thị:
- **Vũng Tàu**: Thành phố biển miền Nam
- **TP. Hồ Chí Minh**: Thành phố lớn nhất Việt Nam
- **Hà Nội**: Thủ đô Việt Nam

### 🔍 Tìm kiếm thành phố khác:
- Sử dụng thanh tìm kiếm để tìm thời tiết của các thành phố khác
- Hỗ trợ tìm kiếm thời tiết cho mọi thành phố trên thế giới

### 🌍 Thành phố quốc tế:
- Hỗ trợ tìm kiếm thời tiết cho mọi thành phố trên thế giới
- Một số thành phố Việt Nam có hình ảnh background đặc biệt

## 🎯 Tính năng nâng cao

- **Weather-based themes**: Màu sắc thay đổi theo thời tiết
- **Smooth transitions**: Chuyển đổi mượt mà giữa các trạng thái
- **Error handling**: Xử lý lỗi thân thiện với người dùng
- **Loading states**: Hiển thị trạng thái tải
- **Auto-refresh**: Tự động cập nhật ngày hiện tại
- **API Status Monitoring**: Kiểm tra trạng thái API real-time
- **Real-time Data**: Dữ liệu thời tiết cập nhật liên tục

## 📝 Cấu trúc file

```
web6/
├── index.html          # Trang chính
├── style.css           # Styling và animations
├── script.js           # Logic và API calls
└── README.md           # Hướng dẫn sử dụng
```

## 🔍 Kiểm tra API

Trang web tự động kiểm tra trạng thái API khi khởi động:
- ✅ **Working**: API hoạt động bình thường
- ❌ **Error**: API gặp lỗi
- ❌ **Network Error**: Lỗi kết nối mạng

## 🚨 Xử lý lỗi

- **API Error**: Hiển thị thông báo lỗi chi tiết
- **Network Error**: Hiển thị thông báo lỗi thân thiện
- **City Not Found**: Gợi ý kiểm tra tên thành phố

## 📝 License

Project này được tạo cho mục đích học tập và sử dụng cá nhân.

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Hãy tạo issue hoặc pull request nếu bạn muốn cải thiện project.

---

**Lưu ý**: 
- API key đã được tích hợp sẵn và hoạt động
- Sử dụng dữ liệu thời tiết thực từ OpenWeatherMap API
- Chỉ hiển thị 3 thành phố chính: Vũng Tàu, Hồ Chí Minh, Hà Nội
- Các thành phố khác có thể tìm kiếm qua thanh tìm kiếm
- Đảm bảo có kết nối internet để sử dụng API thời tiết và tải hình ảnh từ Unsplash
