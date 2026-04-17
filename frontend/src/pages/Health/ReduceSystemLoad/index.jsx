import PageContainer from "../../../components/common/PageContainer";
import Section from "../../../components/common/Section";
import Table from "../../../components/common/Table";
import Checklist from "../../../components/common/Checklist";

function ReduceSystemLoad() {
  return (
    <section className="flex flex-col gap-6 p-6 w-full h-full overflow-y-auto">
      <PageContainer
        title="Quy Trình Giảm Tải Hệ Thống"
        description="Quy trình này giúp giảm thiểu thời gian gián đoạn dịch vụ, hạn chế mất mát dữ liệu và đảm bảo hệ thống được khôi phục nhanh chóng, an toàn. Đồng thời, quy trình còn giúp duy trì tính toàn vẹn của dữ liệu trong suốt quá trình phục hồi."
      />

      {/* SCOPE */}
      <Section title="📌 Phạm vi áp dụng">
        <ul className="text-sm space-y-1">
          <li>Hệ thống API / Backend services</li>
          <li>Database (primary / replica)</li>
          <li>Cache layer (Redis / CDN)</li>
          <li>Background jobs / queue workers</li>
        </ul>
      </Section>

      {/* KEY METRICS */}
      <Section title="📊 Chỉ số giám sát chính">
        <ul className="text-sm space-y-1">
          <li>CPU / RAM / Network / Disk usage</li>
          <li>RPS (Requests per second)</li>
          <li>Latency (P95 / P99)</li>
          <li>Error rate (4xx / 5xx)</li>
          <li>Database connections / slow query count</li>
        </ul>
      </Section>

      {/* PHASE 1 */}
      <Section title="⚡ Giai đoạn 1: Đánh giá nhanh (0–5 phút)">
        <Checklist
          items={[
            "Xác định phạm vi ảnh hưởng (service / toàn hệ thống)",
            "Kiểm tra CPU / RAM / Network",
            "Kiểm tra RPS, latency, error rate",
            "Kiểm tra database (connection pool, slow query)",
            "Ghi nhận thời điểm bắt đầu sự cố",
          ]}
        />
      </Section>

      {/* PHASE 2 */}
      <Section title="🚨 Giai đoạn 2: Giảm tải khẩn cấp (Immediate Mitigation)">
        <Checklist
          items={[
            "Kích hoạt rate limiting / throttling",
            "Chặn hoặc giới hạn endpoint gây tải cao",
            "Tạm dừng cron job / background job không quan trọng",
            "Tắt tính năng không critical (feature flag)",
            "Ưu tiên traffic cho chức năng core business",
          ]}
        />
      </Section>

      {/* PHASE 3 */}
      <Section title="⚙️ Giai đoạn 3: Tối ưu cache & DB relief">
        <Checklist
          items={[
            "Bật cache cho endpoint đọc nhiều",
            "Sử dụng Redis / CDN cho dữ liệu tĩnh",
            "Giảm truy vấn trực tiếp vào database",
            "Kiểm tra và tối ưu slow query",
            "Giảm external API calls",
          ]}
        />
      </Section>

      {/* PHASE 4 */}
      <Section title="📈 Giai đoạn 4: Mở rộng hệ thống (Scaling)">
        <Checklist
          items={[
            "Scale horizontal (thêm instance / pod / container)",
            "Kích hoạt auto-scaling theo CPU / RPS",
            "Thêm database read replica",
            "Tách read/write nếu cần",
            "Offload static assets sang CDN",
          ]}
        />
      </Section>

      {/* PHASE 5 */}
      <Section title="🛠 Giai đoạn 5: Tối ưu hiệu năng (Post-stabilization)">
        <Checklist
          items={[
            "Phân tích slow query và tối ưu index",
            "Kiểm tra memory leak",
            "Tối ưu business logic",
            "Chuyển tác vụ nặng sang queue / async",
            "Giảm xử lý đồng bộ không cần thiết",
          ]}
        />
      </Section>

      {/* PHASE 6 */}
      <Section title="✅ Giai đoạn 6: Xác nhận ổn định hệ thống">
        <Checklist
          items={[
            "CPU / latency / error rate trở về bình thường",
            "Kiểm tra endpoint quan trọng",
            "Theo dõi hệ thống 30–60 phút",
            "Bật lại cron job / feature đã tắt",
          ]}
        />
      </Section>

      {/* POSTMORTEM */}
      <Section title="📌 Báo cáo sau sự cố (Post-mortem)">
        <Checklist
          items={[
            "Phân tích nguyên nhân gốc (Root Cause Analysis)",
            "Ghi lại timeline chi tiết",
            "Xác định bottleneck chính",
            "Đề xuất cải tiến hệ thống",
            "Cập nhật runbook / alert threshold",
          ]}
        />
      </Section>

      {/* ESCALATION */}
      <Section title="📡 Quy trình leo thang (Escalation)">
        <Table
          headers={["Mức độ", "Hành động"]}
          rows={[
            ["SEV-1", "Thông báo ngay DevOps + Tech Lead (0–5 phút)"],
            ["SEV-2", "On-call engineer xử lý trong 15 phút"],
            ["SEV-3", "Đưa vào backlog xử lý"],
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

export default ReduceSystemLoad;
