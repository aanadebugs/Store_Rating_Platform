import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import { LoginPage } from "../pages/LoginPage";
import { AdminDashboardPage } from "../pages/AdminDashboardPage";
import { StoreOwnerDashboardPage } from "../pages/StoreOwnerDashboardPage";
import { UserDashboardPage } from "../pages/UserDashboardPage";
import { UsersPage } from "../pages/UsersPage";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LoginPage />}
        />

        <Route
          path="/admin"
          element={
            <AdminDashboardPage />
          }
        />

        <Route
          path="/store-owner"
          element={
            <StoreOwnerDashboardPage />
          }
        />

        <Route
          path="/user"
          element={
            <UserDashboardPage />
          }
        />
        <Route
          path="/users"
          element={<UsersPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}