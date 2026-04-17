import PageContainer from "../../../components/common/PageContainer";
import Section from "../../../components/common/Section";
import CodeBlock from "../../../components/common/CodeBlock";
import Table from "../../../components/common/Table";
import Checklist from "../../../components/common/Checklist";

function DataRescue() {
  return (
    <section className="flex flex-col gap-6 p-6 w-full h-full overflow-y-auto">
      <PageContainer
        title="Quy Trình Ứng Cứu Dữ Liệu"
        description="Giảm thiểu thời gian gián đoạn dịch vụ (downtime), hạn chế mất mát dữ liệu,
        đảm bảo hệ thống được khôi phục nhanh chóng, an toàn và duy trì tính toàn vẹn dữ liệu."
      />

      {/* SLA */}
      <Section title="📊 Chỉ số cam kết (RTO / RPO)">
        <Table
          className="border border-outline-variant bg-color-surface-container-high text-color-on-surface"
          headers={["Mức độ", "Mô tả", "Thời gian khôi phục (RTO)", "Mất dữ liệu cho phép (RPO)"]}
          rows={[
            ["SEV-1", "Sự cố nghiêm trọng", "≤ 30 phút", "≤ 5 phút"],
            ["SEV-2", "Sự cố mức cao", "≤ 2 giờ", "≤ 30 phút"],
            ["SEV-3", "Sự cố mức trung bình", "≤ 24 giờ", "Tối đa có thể"],
          ]}
        />
      </Section>

      {/* VAI TRÒ */}
      <Section title="👥 Vai trò & trách nhiệm">
        <Table
          className="border border-outline-variant bg-color-surface-container-high text-color-on-surface"
          headers={["Vai trò", "Trách nhiệm"]}
          rows={[
            ["Chỉ huy sự cố (Incident Commander)", "Điều phối và đưa ra quyết định cuối cùng"],
            ["Trưởng nhóm kỹ thuật", "Hướng dẫn xử lý kỹ thuật"],
            ["DevOps", "Quản lý hạ tầng, triển khai, rollback"],
            ["Backend Engineer", "Phân tích và sửa lỗi"],
            ["Thư ký sự cố (Scribe)", "Ghi nhận timeline và diễn biến"],
          ]}
        />
      </Section>

      {/* PHASE 1 */}
      <Section title="⚡ Giai đoạn 1: Ứng cứu khẩn cấp (0–10 phút)">
        <Checklist
          className="text-on-surface-variant"
          items={[
            "Xác định phạm vi ảnh hưởng",
            "Kiểm tra nhanh trạng thái DB / API / Queue",
            "Tạm dừng deploy và các job tự động (cron, sync)",
            "Ghi nhận thời điểm bắt đầu sự cố",
            "Chỉ định người điều phối sự cố",
          ]}
        />
      </Section>

      {/* COMMUNICATION */}
      <Section title="📡 Quy trình thông báo">
        <CodeBlock className="bg-color-surface-container-high text-color-on-surface">
          {`[SEV-1] Sự cố hệ thống cơ sở dữ liệu
Thời gian bắt đầu: 10:02
Ảnh hưởng: Không truy cập được API
Trạng thái: Đang điều tra
Phụ trách: @oncall`}
        </CodeBlock>
        <p className="text-xs text-gray-500 mt-2">
          Cập nhật trạng thái mỗi 10–15 phút đối với sự cố nghiêm trọng.
        </p>
      </Section>

      {/* PHASE 2 */}
      <Section title="🔍 Giai đoạn 2: Phân tích sự cố">
        <Checklist
          className="text-on-surface-variant"
          items={[
            "Kiểm tra log hệ thống (ứng dụng, database, hạ tầng)",
            "Đối chiếu thay đổi gần nhất (deploy, cấu hình)",
            "Xác định nguyên nhân gốc (root cause)",
          ]}
        />
      </Section>

      {/* RUNBOOK */}
      <Section title="🛠 Hướng dẫn xử lý nhanh (Runbook)">
        <CodeBlock className="bg-color-surface-container-high text-color-on-surface">
          {`# Khởi động lại service
kubectl rollout restart deployment api

# Kiểm tra trạng thái pod
kubectl get pods

# Khôi phục database
pg_restore -U user -d db backup.dump`}
        </CodeBlock>
      </Section>

      {/* DECISION TREE */}
      <Section title="🌳 Hướng dẫn xử lý nhanh theo triệu chứng">
        <Table
          className="border border-outline-variant bg-color-surface-container-high text-color-on-surface"
          headers={["Hiện tượng", "Hướng xử lý"]}
          rows={[
            ["Không kết nối được database", "Kiểm tra service DB / network"],
            ["API lỗi hàng loạt (500)", "Rollback phiên bản ngay"],
            ["Dữ liệu sai lệch", "Tạm dừng job đồng bộ"],
            ["Hệ thống chậm", "Kiểm tra CPU / truy vấn DB"],
          ]}
        />
      </Section>

      {/* VALIDATION */}
      <Section title="✅ Kiểm tra sau khôi phục">
        <Checklist
          className="text-on-surface-variant"
          items={[
            "API hoạt động bình thường",
            "Số lượng bản ghi chính xác",
            "Kiểm tra chức năng cơ bản (login, tạo dữ liệu)",
            "Theo dõi hệ thống 30–60 phút",
          ]}
        />
      </Section>

      {/* POSTMORTEM */}
      <Section title="🧾 Báo cáo sau sự cố (Post-mortem)">
        <Checklist
          className="text-on-surface-variant"
          items={[
            "Phân tích nguyên nhân gốc",
            "Ghi nhận timeline chi tiết",
            "Đánh giá điểm tốt và chưa tốt",
            "Đề xuất cải tiến và hành động tiếp theo",
          ]}
        />
      </Section>

      {/* SECURITY */}
      <Section title="🔐 Xử lý sự cố bảo mật">
        <Checklist
          className="text-on-surface-variant"
          items={[
            "Thu hồi quyền truy cập",
            "Thay đổi mật khẩu / API key",
            "Kiểm tra và audit log hệ thống",
          ]}
        />
      </Section>

      {/* DRILL */}
      <Section title="🧪 Diễn tập khôi phục hệ thống">
        <p className="text-sm text-on-surface-variant">
          Thực hiện định kỳ mỗi quý với các kịch bản: mất database, mất dữ liệu, hoặc lỗi toàn hệ
          thống.
        </p>
      </Section>

      {/* ESCALATION */}
      <Section title="📡 Quy trình leo thang">
        <Table
          className="border border-outline-variant bg-color-surface-container-high text-color-on-surface"
          headers={["Mức độ", "Hành động"]}
          rows={[
            ["SEV-1", "Thông báo và xử lý ngay lập tức"],
            ["SEV-2", "Xử lý trong vòng 15 phút"],
            ["SEV-3", "Đưa vào kế hoạch xử lý"],
          ]}
        />
      </Section>

      {/* CONTACT */}
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
            ⚠️ Chỉ gọi điện trực tiếp với sự cố SEV-1. Các trường hợp khác ưu tiên liên lạc qua
            chat.
          </p>
        </div>
      </Section>
    </section>
  );
}

export default DataRescue;
