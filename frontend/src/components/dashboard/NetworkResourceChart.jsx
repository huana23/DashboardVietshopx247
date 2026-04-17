function NetworkResourceChart({ data }) {
  return (
    <div className="bg-surface-container p-6 rounded-xl space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold font-headline">Lưu lượng Mạng & Tài nguyên</h2>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-surface-container-high rounded text-[10px] font-bold text-on-surface-variant border border-outline-variant/20">
            LIVE
          </span>
          <span className="px-3 py-1 bg-surface-container-high rounded text-[10px] font-bold text-on-surface-variant border border-outline-variant/20">
            24H
          </span>
        </div>
      </div>

      {/* Chart Area */}
      <div className="h-[280px] relative w-full flex items-end gap-1 overflow-hidden">
        <svg
          className="absolute inset-0 h-full w-full opacity-30"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <path
            d="M0 80 Q 10 70, 20 85 T 40 60 T 60 75 T 80 50 T 100 65 L 100 100 L 0 100 Z"
            fill="url(#grad1)"
          ></path>
          <defs>
            <linearGradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#00dfc1", stopOpacity: 1 }}></stop>
              <stop offset="100%" style={{ stopColor: "#00dfc1", stopOpacity: 0 }}></stop>
            </linearGradient>
          </defs>
        </svg>

        {/* Grid Lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-5">
          <div className="border-t border-white w-full"></div>
          <div className="border-t border-white w-full"></div>
          <div className="border-t border-white w-full"></div>
          <div className="border-t border-white w-full"></div>
        </div>

        {/* Data Bars */}
        <div className="flex-1 bg-primary/20 h-[60%] rounded-t-sm"></div>
        <div className="flex-1 bg-primary/20 h-[75%] rounded-t-sm"></div>
        <div className="flex-1 bg-primary/20 h-[45%] rounded-t-sm"></div>
        <div className="flex-1 bg-primary/20 h-[80%] rounded-t-sm"></div>
        <div className="flex-1 bg-primary/20 h-[65%] rounded-t-sm"></div>
        <div className="flex-1 bg-primary/20 h-[90%] rounded-t-sm"></div>
        <div className="flex-1 bg-primary/20 h-[55%] rounded-t-sm"></div>
        <div className="flex-1 bg-primary/20 h-[70%] rounded-t-sm"></div>
        <div className="flex-1 bg-primary/20 h-[85%] rounded-t-sm"></div>
        <div className="flex-1 bg-primary/20 h-[50%] rounded-t-sm"></div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-outline-variant/10">
        <div>
          <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-tighter">
            Network Traffic
          </p>
          <p className="text-sm font-headline font-bold text-primary">
            {data?.traffic || "8.4 Gbps / 2.1 Gbps"}
          </p>
        </div>
        <div>
          <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-tighter">
            I/O Disk
          </p>
          <p className="text-sm font-headline font-bold text-on-surface">
            {data?.diskIO || "1.2k Ops/s"}
          </p>
        </div>
        <div>
          <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-tighter">
            Thread Count
          </p>
          <p className="text-sm font-headline font-bold text-on-surface">
            {data?.threadCount || "14,204 Active"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NetworkResourceChart;
