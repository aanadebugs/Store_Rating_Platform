import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getAdminDashboard } from "../api/dashboard.api";

interface DashboardData {
  totalUsers: number;
  totalStores: number;
  totalRatings: number;
}

export function AdminDashboardPage() {
  const [dashboardData, setDashboardData] =
    useState<DashboardData | null>(null);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const data =
          await getAdminDashboard();

        setDashboardData(data);
      } catch (error) {
        console.error(error);
      }
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

      <br />

      <div>
        <Link to="/users">
          <button>
            View Users
          </button>
        </Link>
      </div>

      <br />

      <div>
        <Link to="/create-store-owner">
          <button>
            Create Store Owner
          </button>
        </Link>
      </div>

      <br />

      <div>
        <Link to="/stores">
          <button>
            View Stores
          </button>
        </Link>
      </div>
    </div>
  );
}