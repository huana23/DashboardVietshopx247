# DashboardVietshopx247

Dashboard giám sát và vận hành hệ thống thương mại điện tử, tập trung tài liệu cho **Frontend**.

---

## Mục tiêu dự án

- Xây dựng giao diện quản trị trực quan, hiệu suất tốt và dễ mở rộng.
- Chuẩn hóa kiến trúc Frontend để đội ngũ phát triển đồng bộ.
- Tách biệt rõ phần Frontend và Backend trong tài liệu.

---

## Frontend Stack

- `React` + `Vite`
- `React Router`
- `Axios`
- `Tailwind CSS` + `SCSS`

---

## Cấu trúc thư mục (Frontend)

```text
frontend/
├── public/
├── src/
│   ├── components/     # Các UI component tái sử dụng
│   ├── pages/          # Các màn hình chính
│   ├── layouts/        # Khung layout chung
│   ├── services/       # Gọi API, xử lý request/response
│   ├── hooks/          # Custom hooks
│   ├── utils/          # Hàm tiện ích
│   └── styles/         # Tailwind, SCSS và style dùng chung
├── tailwind.config.js
└── package.json
```

---

## Yêu cầu môi trường (Frontend)

- `Node.js >= 18`
- `npm >= 9`
- Trình duyệt hiện đại: Chrome, Edge, Firefox

---

## Biến môi trường (Frontend)

Tạo file `frontend/.env`:

```env
VITE_API_URL=http://localhost:8000/api
```

Gợi ý: tạo thêm `frontend/.env.example` để đồng bộ cấu hình cho team.

---

## Cài đặt và chạy Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend mặc định chạy tại: `http://localhost:5173`

---

## Scripts chính (Frontend)

| Script | Mô tả |
| --- | --- |
| `npm run dev` | Chạy môi trường phát triển |
| `npm run build` | Build production |
| `npm run preview` | Preview bản build |
| `npm run lint` | Kiểm tra lint |

---

## Quy ước phát triển Frontend

- Ưu tiên component tái sử dụng, tránh lặp logic.
- Tách riêng tầng gọi API trong `services`.
- Không hard-code endpoint, luôn dùng biến môi trường.
- Giữ code style nhất quán và chạy lint trước khi merge.

---

## Backend (để team Backend bổ sung)

> Phần này được giữ chỗ cho tài liệu Backend.
>
> Team Backend vui lòng cập nhật các mục sau:
> - Kiến trúc backend
> - Công nghệ và phiên bản sử dụng
> - Biến môi trường cần thiết
> - Hướng dẫn chạy local
> - Danh sách API và chuẩn response/error
> - Quy tắc authentication/authorization

---

## Triển khai

- Frontend: Vercel hoặc Netlify
- Backend: *đang chờ cập nhật từ team Backend*
