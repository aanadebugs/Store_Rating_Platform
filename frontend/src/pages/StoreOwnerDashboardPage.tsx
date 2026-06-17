import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

import { getStoreOwnerDashboard }
  from "../api/dashboard.api";

export function StoreOwnerDashboardPage() {
  const navigate =
    useNavigate();

  const [dashboard,
    setDashboard] =
    useState<any>(null);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const data =
          await getStoreOwnerDashboard();

        setDashboard(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadDashboard();
  }, []);

  function logout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div className="dashboard-card">
      <h1>
        Store Owner Dashboard
      </h1>

      <button
        onClick={logout}
      >
        Logout
      </button>

      <hr />

      <p>
        Store Name:
        {" "}
        {dashboard?.storeName ??
          "Not Created"}
      </p>

      <p>
        Total Stores:
        {" "}
        {dashboard?.totalStores ?? 0}
      </p>

      <p>
        Total Ratings:
        {" "}
        {dashboard?.totalRatings ?? 0}
      </p>

      <p>
        Average Rating:
        {" "}
        {dashboard?.averageRating ?? 0}
        /5
      </p>

      <br />

      <Link to="/create-store">
        <button>
          Create Store
        </button>
      </Link>

      <br />
      <br />

      <Link to="/stores">
        <button>
          View Stores
        </button>
      </Link>
    </div>
  );
}