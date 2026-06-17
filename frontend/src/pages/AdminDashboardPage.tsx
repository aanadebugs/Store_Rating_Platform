import {
  Link,
  useNavigate,
} from "react-router-dom";

export function AdminDashboardPage() {
  const navigate =
    useNavigate();

  function logout() {
    localStorage.clear();

    navigate("/");
  }

  return (
    <div>
      <h1>
        Admin Dashboard
      </h1>

      <button
        onClick={logout}
      >
        Logout
      </button>

      <br />
      <br />

      <Link to="/users">
        <button>
          View Users
        </button>
      </Link>

      <br />
      <br />

      <Link to="/create-store-owner">
        <button>
          Create Store Owner
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