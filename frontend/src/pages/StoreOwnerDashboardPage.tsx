import { Link } from "react-router-dom";

export function StoreOwnerDashboardPage() {
  return (
    <div>
      <h1>Store Owner Dashboard</h1>

      <br />

      <div>
        <Link to="/create-store">
          <button>
            Create Store
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