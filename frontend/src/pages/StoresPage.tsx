import {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";

import { getStores } from "../api/store.api";
import { getAverageRating } from "../api/rating.api";

interface Store {
  id: string;
  name: string;
  email: string;
  address: string;
}

interface StoreWithRating
  extends Store {
  averageRating: number;
}

export function StoresPage() {
  const [stores, setStores] =
    useState<
      StoreWithRating[]
    >([]);

  useEffect(() => {
    async function loadStores() {
      try {
        const storeData =
          await getStores();

        const storesWithRatings =
          await Promise.all(
            storeData.map(
              async (
                store: Store
              ) => {
                const averageRating =
                  await getAverageRating(
                    store.id
                  );

                return {
                  ...store,
                  averageRating,
                };
              }
            )
          );

        setStores(
          storesWithRatings
        );
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
            <th>
              Average Rating
            </th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {stores.map(
            (store) => (
              <tr
                key={store.id}
              >
                <td>
                  {store.name}
                </td>

                <td>
                  {store.email}
                </td>

                <td>
                  {store.address}
                </td>

                <td>
                  {
                    store.averageRating
                  }
                  /5
                </td>

                <td>
                  <Link
                    to={`/rate-store/${store.id}`}
                  >
                    Rate Store
                  </Link>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}