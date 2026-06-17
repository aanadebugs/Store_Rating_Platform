import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export function RegisterPage() {
  const navigate = useNavigate();

  const [fullName, setFullName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [address, setAddress] =
    useState("");

  async function handleSubmit(
    event: React.FormEvent
  ) {
    event.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          fullName,
          email,
          password,
          address,
        }
      );

      alert(
        "Registration successful"
      );

      navigate("/");
    } catch (error) {
      console.error(error);

      alert(
        "Registration failed"
      );
    }
  }

  return (
    <div className="login-container">
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Full Name"
            value={fullName}
            onChange={(event) =>
              setFullName(
                event.target.value
              )
            }
          />
        </div>

        <br />

        <div>
          <input
            placeholder="Email"
            value={email}
            onChange={(event) =>
              setEmail(
                event.target.value
              )
            }
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
          />
        </div>

        <br />

        <div>
          <input
            placeholder="Address"
            value={address}
            onChange={(event) =>
              setAddress(
                event.target.value
              )
            }
          />
        </div>

        <br />

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
}