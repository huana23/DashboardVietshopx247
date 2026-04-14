import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { mockDashboardData } from "../../data/mockDashboardData";
import { useDashboardData } from "../useDashboardData";

vi.mock("../../../../services/dashboardService", () => ({
  getDashboardOverview: vi.fn(),
}));

import { getDashboardOverview } from "../../../../services/dashboardService";

describe("useDashboardData", () => {
  it("uses API data when request succeeds", async () => {
    getDashboardOverview.mockResolvedValueOnce({
      ...mockDashboardData,
      metrics: [{ ...mockDashboardData.metrics[0], title: "API Metric" }],
    });

    const { result } = renderHook(() => useDashboardData());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBe("");
    expect(result.current.metrics[0].title).toBe("API Metric");
  });

  it("falls back to local mock data when request fails", async () => {
    getDashboardOverview.mockRejectedValueOnce(new Error("Network down"));

    const { result } = renderHook(() => useDashboardData());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toContain("Network down");
    expect(result.current.metrics.length).toBe(mockDashboardData.metrics.length);
  });
});
