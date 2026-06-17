import { useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";

import { login } from "../api/auth.api";

export function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  async function handleSubmit(
    event: React.FormEvent
  ) {
    event.preventDefault();

    setError("");

    try {
      const result =
        await login({
          email,
          password,
        });

      localStorage.setItem(
        "accessToken",
        result.accessToken
      );

      localStorage.setItem(
        "role",
        result.role
      );

      localStorage.setItem(
        "userId",
        result.userId
      );

      if (result.role === "ADMIN") {
        navigate("/admin");
        return;
      }

      if (
        result.role ===
        "STORE_OWNER"
      ) {
        navigate("/store-owner");
        return;
      }

      navigate("/user");
    } catch {
      setError(
        "Invalid email or password"
      );
    }
  }

  return (
    <div className="login-container">
      <h1>
        Store Rating Platform
      </h1>

      <form
        onSubmit={handleSubmit}
      >
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) =>
              setEmail(
                event.target.value
              )
            }
            required
          />
        </div>

        <br />

        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) =>
              setPassword(
                event.target.value
              )
            }
            required
          />
        </div>

        <br />

        <button type="submit">
          Login
        </button>
      </form>

      {error && (
        <p>{error}</p>
      )}

      <br />

      <p>
        Don't have an account?
      </p>

      <Link to="/register">
        Register
      </Link>
    </div>
  );
}