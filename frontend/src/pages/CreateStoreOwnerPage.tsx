import { useState } from "react";

import { createStoreOwner } from "../api/user.api";

export function CreateStoreOwnerPage() {
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
      await createStoreOwner({
        fullName,
        email,
        password,
        address,
      });

      alert(
        "Store Owner Created Successfully"
      );

      setFullName("");
      setEmail("");
      setPassword("");
      setAddress("");
    } catch (error: any) {
      console.error(error);

      alert(
        error?.response?.data?.message ||
        "Failed to create store owner"
      );
    }
  }

  return (
    <div>
      <h1>Create Store Owner</h1>

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
            type="email"
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
          Create Store Owner
        </button>
      </form>
    </div>
  );
}