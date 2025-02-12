import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Dashboard from "./Pages/Dashboard";
import Clients from "./Pages/Clients";
import ClientAccountForm from "./Pages/ClientAccountForm";
import ControlPage from "./Components/EventControl/ControlPage";
import Login from "./Components/Login/Login";
import { AuthProvider } from "./Context/AuthProvider";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/edit-user/:user" element={<ClientAccountForm />} />
              <Route path="/gamebetlock/:user" element={<ControlPage />} />
            </Route>
          </Route>

          {/* Redirect unknown routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
