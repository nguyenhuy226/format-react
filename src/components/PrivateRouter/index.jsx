import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRouter({ redirect = "/" }) {
  const { user } = useAuth();
  if (!user) return <Navigate to={redirect} />;
  return <Outlet />;
}