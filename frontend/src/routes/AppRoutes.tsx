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
import { CreateStoreOwnerPage } from "../pages/CreateStoreOwnerPage";
import { StoresPage } from "../pages/StoresPage";
import { CreateStorePage } from "../pages/CreateStorePage";

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
        <Route
          path="/create-store-owner"
          element={<CreateStoreOwnerPage />}
        />
        <Route
          path="/stores"
          element={<StoresPage />}
        />
        <Route
          path="/create-store"
          element={<CreateStorePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}