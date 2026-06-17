import { useState } from "react";

import { createStore } from "../api/store.api";

export function CreateStorePage() {
  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [address, setAddress] =
    useState("");

  async function handleSubmit(
    event: React.FormEvent
  ) {
    event.preventDefault();

    try {
      await createStore({
        name,
        email,
        address,
      });

      alert(
        "Store created successfully"
      );

      setName("");
      setEmail("");
      setAddress("");
    } catch (error) {
      console.error(error);

      alert(
        "Failed to create store"
      );
    }
  }

  return (
    <div>
      <h1>Create Store</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Store Name"
            value={name}
            onChange={(event) =>
              setName(
                event.target.value
              )
            }
          />
        </div>

        <br />

        <div>
          <input
            placeholder="Store Email"
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
            placeholder="Store Address"
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
          Create Store
        </button>
      </form>
    </div>
  );
}