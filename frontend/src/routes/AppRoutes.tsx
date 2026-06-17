import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import { ProtectedRoute } from "../components/ProtectedRoute";

import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

import { AdminDashboardPage } from "../pages/AdminDashboardPage";
import { StoreOwnerDashboardPage } from "../pages/StoreOwnerDashboardPage";
import { UserDashboardPage } from "../pages/UserDashboardPage";

import { UsersPage } from "../pages/UsersPage";
import { StoresPage } from "../pages/StoresPage";

import { CreateStoreOwnerPage } from "../pages/CreateStoreOwnerPage";
import { CreateStorePage } from "../pages/CreateStorePage";

import { RateStorePage } from "../pages/RateStorePage";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LoginPage />}
        />

        <Route
          path="/register"
          element={
            <RegisterPage />
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute
              allowedRoles={[
                "ADMIN",
              ]}
            >
              <AdminDashboardPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/store-owner"
          element={
            <ProtectedRoute
              allowedRoles={[
                "STORE_OWNER",
              ]}
            >
              <StoreOwnerDashboardPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user"
          element={
            <ProtectedRoute
              allowedRoles={[
                "USER",
              ]}
            >
              <UserDashboardPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/users"
          element={
            <ProtectedRoute
              allowedRoles={[
                "ADMIN",
              ]}
            >
              <UsersPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/create-store-owner"
          element={
            <ProtectedRoute
              allowedRoles={[
                "ADMIN",
              ]}
            >
              <CreateStoreOwnerPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/stores"
          element={
            <ProtectedRoute
              allowedRoles={[
                "ADMIN",
                "STORE_OWNER",
                "USER",
              ]}
            >
              <StoresPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/create-store"
          element={
            <ProtectedRoute
              allowedRoles={[
                "STORE_OWNER",
              ]}
            >
              <CreateStorePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/rate-store/:storeId"
          element={
            <ProtectedRoute
              allowedRoles={[
                "USER",
              ]}
            >
              <RateStorePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}