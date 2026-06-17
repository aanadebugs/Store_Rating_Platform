import { useEffect, useState } from "react";

import { getUsers } from "../api/user.api";

interface User {
  id: string;
  fullName: string;
  email: string;
  role: string;
  address: string;
}

export function UsersPage() {
  const [users, setUsers] =
    useState<User[]>([]);

  useEffect(() => {
    async function loadUsers() {
      try {
        const data =
          await getUsers();

        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>

      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
