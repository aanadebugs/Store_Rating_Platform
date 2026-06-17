import {
  Link,
  useNavigate,
} from "react-router-dom";

export function UserDashboardPage() {
  const navigate =
    useNavigate();

  function logout() {
    localStorage.clear();

    navigate("/");
  }

  return (
    <div className="dashboard-card">
      <h1>
        User Dashboard
      </h1>

      <button
        onClick={logout}
      >
        Logout
      </button>

      <br />
      <br />

      <Link to="/stores">
        <button>
          Browse Stores
        </button>
      </Link>
    </div>
  );
}