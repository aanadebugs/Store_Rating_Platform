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

      alert("Store created successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to create store");
    }
  }

  return (
    <div>
      <h1>Create Store</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Store Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <br />
        <br />

        <input
          placeholder="Store Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <br />
        <br />

        <input
          placeholder="Store Address"
          value={address}
          onChange={(e) =>
            setAddress(e.target.value)
          }
        />

        <br />
        <br />

        <button type="submit">
          Create Store
        </button>
      </form>
    </div>
  );
}