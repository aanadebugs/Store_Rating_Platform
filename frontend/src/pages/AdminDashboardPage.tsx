import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getAdminDashboard }
from "../api/dashboard.api";

interface DashboardData {
  totalUsers: number;
  totalStores: number;
  totalRatings: number;
}

export function AdminDashboardPage() {
  const [dashboardData,
    setDashboardData] =
    useState<DashboardData | null>(
      null
    );

  useEffect(() => {
    async function loadDashboard() {
      const data =
        await getAdminDashboard();

      setDashboardData(data);
    }

    loadDashboard();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>

      {dashboardData && (
        <>
          <h3>
            Total Users: {dashboardData.totalUsers}
          </h3>

          <h3>
            Total Stores: {dashboardData.totalStores}
          </h3>

          <h3>
            Total Ratings: {dashboardData.totalRatings}
          </h3>
        </>
      )}

      <div>
        <Link to="/users">
          <button>
            View Users
          </button>
        </Link>
      </div>
    </div>
  );
}