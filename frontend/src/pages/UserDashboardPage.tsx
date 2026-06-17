import { Link } from "react-router-dom";

export function UserDashboardPage() {
  return (
    <div>
      <h1>User Dashboard</h1>

      <br />

      <div>
        <Link to="/stores">
          <button>
            Browse Stores
          </button>
        </Link>
      </div>
    </div>
  );
}