import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    // Redirect to login if no token is found
    return <Navigate to="/login" replace />;
  }

  // If 'children' exists, render it (Individual wrapping)
  // Otherwise, render 'Outlet' (Nested routing)
  return children ? children : <Outlet />;
}