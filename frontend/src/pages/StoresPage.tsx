import { useEffect, useState } from "react";

import { getStores } from "../api/store.api";

interface Store {
  id: string;
  name: string;
  email: string;
  address: string;
}

export function StoresPage() {
  const [stores, setStores] =
    useState<Store[]>([]);

  useEffect(() => {
    async function loadStores() {
      try {
        const data =
          await getStores();

        setStores(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadStores();
  }, []);

  return (
    <div>
      <h1>Stores</h1>

      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>
          {stores.map((store) => (
            <tr key={store.id}>
              <td>{store.name}</td>
              <td>{store.email}</td>
              <td>{store.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}