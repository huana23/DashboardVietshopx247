export const mockDashboardData = {
  chart: [
    { time: "00:00", value: 42 },
    { time: "04:00", value: 55 },
    { time: "08:00", value: 47 },
    { time: "12:00", value: 66 },
    { time: "16:00", value: 59 },
    { time: "20:00", value: 73 },
    { time: "23:59", value: 64 },
  ],
  metrics: [
    {
      title: "Tổng số người dùng",
      icon: "person",
      value: "28.657",
      statusText: "+0.4",
      statusColor: "text-primary",
      progress: 25,
    },
    {
      title: "Tổng số đơn hàng",
      icon: "shopping_cart",
      value: "13.140",
      statusText: "2.4%",
      statusColor: "text-tertiary",
      progress: 45,
    },
    {
      title: "Tổng số đối tác",
      icon: "business", 
      value: "1.784",
      statusText: "0.8%",
      statusColor: "text-error",
      progress: 72,
    },
    {
      title: "Doanh thu hôm nay",
      icon: "attach_money",
      value: "450.000",
      suffix: "USD",
      statusText: "3.1%",
      statusColor: "text-primary",
      progress: 66,
    },
  ],
  alerts: [
    { 
      icon: "warning",
      label: "Lỗi nghiêm trọng",
      title: "Máy chủ 04 CPU > 90% - Cần hành động ngay",
      meta: "Kích hoạt cách đây 2 phút • Nút: US-EAST-01",
      tone: "error",
    },
    {
      icon: "error_outline",
      label: "Trì hoãn hiệu suất",
      title: "Phát hiện độ trễ cơ sở dữ liệu (2.5s)",
      meta: "Kích hoạt cách đây 14 phút • Nút: RDS-MASTER",
      tone: "tertiary",
    },
    {
      icon: "info",
      label: "Thông báo hệ thống",
      title: "Gia hạn chứng chỉ SSL thành công",
      meta: "Kích hoạt cách đây 1 giờ • Toàn cầu",
      tone: "primary",
    },
  ],
  servers: [
    {
      name: "Sentinel-Prod-01",
      ip: "192.168.1.104",
      health: "99.9%",
      tone: "text-primary",
      bars: ["bg-primary", "bg-primary", "bg-primary", "bg-primary", "bg-primary-container"],
    },
    {
      name: "Sentinel-Prod-02",
      ip: "192.168.1.105",
      health: "84.2%",
      tone: "text-tertiary",
      bars: [
        "bg-primary",
        "bg-primary",
        "bg-tertiary",
        "bg-outline-variant/20",
        "bg-outline-variant/20",
      ],
    },
    {
      name: "Sentinel-Backup-01",
      ip: "192.168.1.200",
      health: "Offline",
      tone: "text-error",
      bars: [
        "bg-error",
        "bg-outline-variant/20",
        "bg-outline-variant/20",
        "bg-outline-variant/20",
        "bg-outline-variant/20",
      ],
    },
  ],
  procedures: [
    {
      title: "Phát hiện & Cách ly",
      description:
        "Xác định các nút bị xâm nhập và cách ly chúng khỏi lưu lượng công cộng ngay lập tức thông qua Firewall Sentinel.",
    },
    {
      title: "Thông báo đến các bên liên quan",
      description: "Thông báo cho Quản trị viên chính và các liên hệ khẩn cấp phụ trong danh bạ.",
    },
    {
      title: "Bảo tồn chứng cứ pháp lý",
      description:
        "Chụp lại toàn bộ log và bộ nhớ tạm thời trước khi tiến hành các thủ tục phục hồi hệ thống.",
    },
  ],
  contacts: [
    { name: "Admin Root (Cấp độ 3)", role: "Chuyên gia công nghệ trưởng", phone: "+84 901 234 567" },
    { name: "Chuyên gia mạng", role: "Hạ tầng trực ca", phone: "+84 908 765 432" },
    { name: "Vận hành bảo mật", role: "Trung tâm phản ứng 24/7", phone: "+84 28 3333 4444" },
    { name: "Trưởng nhóm cơ sở dữ liệu", role: "Chuyên viên bảo mật dữ liệu", phone: "+84 902 000 111" },
  ],
  guidelines: [
    {
      icon: "build",
      title: "Khôi phục khi CPU quá tải",
      description:
        "Dừng các tiến trình nền không cần thiết và kiểm tra trình lập lịch tác vụ để phát hiện các công việc cron bị bỏ quên.",
    },
    {
      icon: "cloud_off",
      title: "Mất kết nối",
      description:
        "Kiểm tra các kiểm tra sức khỏe của Load Balancer và xác minh các điểm kết thúc SSL để tìm lỗi bắt tay (handshake).",
    },
    {
      icon: "layers_clear",
      title: "Khóa cơ sở dữ liệu",
      description:
        "Chạy câu lệnh SHOW PROCESSLIST để xác định các truy vấn bị treo và kết thúc các phiên làm việc vượt quá 60 giây.",
    },
  ]
};


// metrics: [
//     {
//       title: "System Load",
//       icon: "speed",
//       value: "2.5",
//       statusText: "+0.4",
//       statusColor: "text-primary",
//       progress: 25,
//     },
//     {
//       title: "CPU Utilization",
//       icon: "memory",
//       value: "45%",
//       statusText: "Stable",
//       statusColor: "text-tertiary",
//       progress: 45,
//     },
//     {
//       title: "Memory Usage",
//       icon: "storage",
//       value: "72%",
//       statusText: "High",
//       statusColor: "text-error",
//       progress: 72,
//     },
//     {
//       title: "Bandwidth",
//       icon: "swap_vert",
//       value: "450",
//       suffix: "Mbps",
//       statusText: "Peak Zone",
//       statusColor: "text-primary",
//       progress: 66,
//     },
//   ],