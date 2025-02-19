import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";
import useSWR from "swr";
import { fetchData } from "../api/ClientFunction";
import { useEffect } from "react";

export default function ProtectedRoute() {
  const { setIsAuthenticated, setManager } = useAuth();
  const token = localStorage.getItem("token");
  const { data, error, isValidating } = useSWR(
    token ? "/manager/get-manager-info" : null,
    fetchData
  );

  useEffect(() => {
    if (data?.data) {
      setManager(data.data);
      setIsAuthenticated(true);
    } else if (error) {
      localStorage.removeItem("token");
      setIsAuthenticated(false);
    }
  }, [data, error, setManager, setIsAuthenticated]);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Show a loading spinner while validating
  // if (isValidating) {
  //   // return <Loader />;
  //   return <div>Loading...</div>;
  // }

  return <Outlet />;
}
