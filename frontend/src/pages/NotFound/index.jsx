import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="p-6 md:p-8">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Không tìm thấy trang</h1>
        <p className="mt-2 text-sm text-slate-600">
          Đường dẫn bạn truy cập không tồn tại hoặc đã được thay đổi.
        </p>
        <Link
          to="/dashboard"
          className="mt-4 inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
        >
          Quay về Dashboard
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
