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
      title: "System Load",
      icon: "speed",
      value: "2.5",
      statusText: "+0.4",
      statusColor: "text-primary",
      progress: 25,
    },
    {
      title: "CPU Utilization",
      icon: "memory",
      value: "45%",
      statusText: "Stable",
      statusColor: "text-tertiary",
      progress: 45,
    },
    {
      title: "Memory Usage",
      icon: "storage",
      value: "72%",
      statusText: "High",
      statusColor: "text-error",
      progress: 72,
    },
    {
      title: "Bandwidth",
      icon: "swap_vert",
      value: "450",
      suffix: "Mbps",
      statusText: "Peak Zone",
      statusColor: "text-primary",
      progress: 66,
    },
  ],
  alerts: [
    {
      icon: "warning",
      label: "Critical Failure",
      title: "Server 04 CPU > 90% - Action Required",
      meta: "Triggered 2m ago • Node: US-EAST-01",
      tone: "error",
    },
    {
      icon: "error_outline",
      label: "Performance Lag",
      title: "Database latency spikes detected (2.5s)",
      meta: "Triggered 14m ago • Node: RDS-MASTER",
      tone: "tertiary",
    },
    {
      icon: "info",
      label: "System Notice",
      title: "SSL Certificate renewal successful",
      meta: "Triggered 1h ago • Global",
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
      title: "Detection & Isolation",
      description:
        "Identify compromised nodes and isolate from public traffic immediately via Sentinel Firewall.",
    },
    {
      title: "Stakeholder Notification",
      description: "Alert the Root Admin and secondary emergency contacts listed in the registry.",
    },
    {
      title: "Forensic Preservation",
      description:
        "Snapshot all logs and volatile memory before initiating system recovery procedures.",
    },
  ],
  contacts: [
    { name: "Admin Root (Level 3)", role: "Chief Technologist", phone: "+84 901 234 567" },
    { name: "Network Specialist", role: "On-call Infrastructure", phone: "+84 908 765 432" },
    { name: "Security Operations", role: "24/7 Response Center", phone: "+84 28 3333 4444" },
    { name: "Database Lead", role: "Data Integrity Officer", phone: "+84 902 000 111" },
  ],
  guidelines: [
    {
      icon: "build",
      title: "CPU Spike Recovery",
      description:
        "Kill non-essential background processes and verify task scheduler for orphan cron jobs.",
    },
    {
      icon: "cloud_off",
      title: "Connection Outage",
      description:
        "Check Load Balancer health checks and verify SSL termination points for handshake errors.",
    },
    {
      icon: "layers_clear",
      title: "Database Lock",
      description:
        "Run SHOW PROCESSLIST to identify stalled queries and terminate sessions exceeding 60 seconds.",
    },
  ],
};
