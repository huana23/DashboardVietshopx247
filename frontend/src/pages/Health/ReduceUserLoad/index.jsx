import PageContainer from "../../../components/common/PageContainer";
import Section from "../../../components/common/Section";
import CodeBlock from "../../../components/common/CodeBlock";
import Table from "../../../components/common/Table";
import Checklist from "../../../components/common/Checklist";

function ReduceUserLoad() {
    return (
        <section className="space-y-6 p-6">
            <PageContainer
                title="Quy Trình Giảm Tải Người Dùng"
                description="Quy trình này giúp giảm thiểu thời gian gián đoạn dịch vụ, hạn chế mất mát dữ liệu và đảm bảo hệ thống phục hồi nhanh chóng, an toàn. Đồng thời, quy trình cũng duy trì tính toàn vẹn dữ liệu trong suốt quá trình khôi phục."
            />
            {/* CHIẾN LƯỢC TỔNG THỂ */}
            <Section title="🏗 Chiến lược kiểm soát tải (đa tầng)">
                <ul className="text-sm space-y-1">
                    <li>🌐 Tầng biên (Edge): CDN, WAF, chống bot</li>
                    <li>🚪 Tầng API: giới hạn tốc độ, hàng đợi truy cập</li>
                    <li>⚙️ Tầng ứng dụng: bật/tắt tính năng (feature flag)</li>
                    <li>🖥 Tầng giao diện: giảm chức năng hiển thị cho người dùng</li>
                </ul>
            </Section>

            {/* NGUYÊN TẮC */}
            <Section title="📌 Nguyên tắc vận hành">
                <ul className="text-sm space-y-1">
                    <li>Ưu tiên duy trì hệ thống thay vì đầy đủ tính năng</li>
                    <li>Giữ các chức năng cốt lõi (đăng nhập, đọc dữ liệu, giao dịch nếu có)</li>
                    <li>Giảm tải theo từng tầng, không tắt toàn bộ hệ thống</li>
                    <li>Minh bạch trạng thái hệ thống với người dùng</li>
                </ul>
            </Section>

            {/* GIAI ĐOẠN 1 */}
            <Section title="⚡ Giai đoạn 1: Bảo vệ hệ thống ngay lập tức (0–3 phút)">
                <Checklist
                    items={[
                        "Kích hoạt giới hạn truy cập theo IP / người dùng",
                        "Chặn bot và lưu lượng bất thường",
                        "Giới hạn các API tiêu tốn tài nguyên cao",
                        "Tạm dừng các endpoint không quan trọng",
                    ]}
                />
            </Section>

            {/* GIAI ĐOẠN 2 */}
            <Section title="🚨 Giai đoạn 2: Điều tiết lưu lượng truy cập">
                <Checklist
                    items={[
                        "Kích hoạt hàng đợi truy cập (waiting room)",
                        "Phân loại người dùng theo mức độ ưu tiên",
                        "Ưu tiên người dùng trả phí / quản trị viên",
                        "Giới hạn người dùng chưa đăng nhập",
                    ]}
                />
            </Section>

            {/* GIAI ĐOẠN 3 */}
            <Section title="🧠 Giai đoạn 3: Giảm chức năng hệ thống (Degradation)">
                <Table
                    headers={["Mức tải", "Hành vi hệ thống"]}
                    rows={[
                        ["Thấp", "Đầy đủ chức năng"],
                        ["Trung bình", "Tắt tính năng nâng cao (search nâng cao, export)"],
                        ["Cao", "Chỉ giữ chức năng cốt lõi"],
                        ["Rất cao", "Chế độ chỉ đọc (read-only)"],
                    ]}
                />
            </Section>

            {/* GIAI ĐOẠN 4 */}
            <Section title="⚙️ Giai đoạn 4: Điều chỉnh hành vi người dùng">
                <Checklist
                    items={[
                        "Hiển thị thông báo hệ thống đang quá tải",
                        "Giảm tần suất tự động làm mới dữ liệu",
                        "Thêm độ trễ (debounce) cho tìm kiếm và bộ lọc",
                        "Chuyển sang phân trang thay vì tải toàn bộ dữ liệu",
                        "Giới hạn thao tác liên tục của người dùng",
                    ]}
                />
            </Section>

            {/* GIAI ĐOẠN 5 */}
            <Section title="🖥 Giai đoạn 5: Tối ưu phía giao diện người dùng">
                <Checklist
                    items={[
                        "Lưu cache dữ liệu phía client",
                        "Giảm số lượng request không cần thiết",
                        "Tải chậm (lazy loading) các thành phần không quan trọng",
                        "Kiểm soát prefetch dữ liệu",
                        "Giảm kích thước dữ liệu trả về",
                    ]}
                />
            </Section>

            {/* GIAI ĐOẠN 6 */}
            <Section title="📈 Giai đoạn 6: Khôi phục trạng thái bình thường">
                <Checklist
                    items={[
                        "Theo dõi khi tải hệ thống giảm về mức an toàn",
                        "Giảm dần giới hạn truy cập (rate limit)",
                        "Bật lại từng nhóm tính năng",
                        "Khôi phục toàn bộ chức năng theo từng bước",
                    ]}
                />
            </Section>

            {/* GIAO TIẾP NGƯỜI DÙNG */}
            <Section title="💬 Giao tiếp với người dùng">
                <ul className="text-sm space-y-1">
                    <li>Hiển thị rõ ràng trạng thái hệ thống đang quá tải</li>
                    <li>Tránh thông báo lỗi chung chung gây khó hiểu</li>
                    <li>Cung cấp thời gian dự kiến nếu có thể</li>
                    <li>Giữ giọng điệu bình tĩnh, không gây hoang mang</li>
                </ul>
            </Section>

            {/* ESCALATION */}
            <Section title="📡 Quy trình leo thang">
                <Table
                    headers={["Mức độ", "Hành động"]}
                    rows={[
                        ["SEV-1", "DevOps + Trưởng nhóm kỹ thuật xử lý ngay lập tức"],
                        ["SEV-2", "Kỹ sư trực ca phối hợp xử lý"],
                        ["SEV-3", "Theo dõi và tối ưu dần"],
                    ]}
                />
            </Section>

            {/* LIÊN HỆ KHẨN CẤP */}
            <Section title="📞 Liên hệ khẩn cấp">
                <div className="space-y-3 text-sm">
                    {/* SEV-1: Sự cố nghiêm trọng */}
                    <div className="bg-red-50 border border-red-300 p-3 rounded-lg">
                        <p className="font-semibold text-red-800">🚨 Sự cố nghiêm trọng (SEV-1)</p>
                        <p className="text-red-900">📱 Backend trực ca: +84 90x xxx xxx</p>
                        <p className="text-red-900">📱 DevOps trực ca: +84 91x xxx xxx</p>
                        <p className="text-red-900">👤 Trưởng nhóm kỹ thuật: +84 93x xxx xxx</p>
                    </div>

                    {/* SEV-2: Sự cố mức cao */}
                    <div className="bg-yellow-50 border border-yellow-300 p-3 rounded-lg">
                        <p className="font-semibold text-yellow-800">⚠️ Sự cố mức cao (SEV-2)</p>
                        <p className="text-yellow-900">📱 Kỹ sư trực ca</p>
                        <p className="text-yellow-900">💬 Kênh liên lạc: Slack / Telegram</p>
                    </div>

                    {/* Lưu ý */}
                    <p className="text-xs text-gray-600">
                        ⚠️ Chỉ gọi điện trực tiếp với sự cố SEV-1. Các trường hợp khác ưu tiên liên lạc qua chat.
                    </p>
                </div>
            </Section>
        </section>
    );
}

export default ReduceUserLoad;