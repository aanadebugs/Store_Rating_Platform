import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: string[];
}

export function ProtectedRoute({
  children,
  allowedRoles,
}: ProtectedRouteProps) {
  const token =
    localStorage.getItem(
      "accessToken"
    );

  const role =
    localStorage.getItem(
      "role"
    );

  if (!token) {
    return <Navigate to="/" />;
  }

  if (
    role &&
    !allowedRoles.includes(role)
  ) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}