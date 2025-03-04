import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./Components/Login/Login";
import Clients from "./Pages/Clients";
import Dashboard from "./Pages/Dashboard";
import CasinoControl from "./Pages/CasinoControl";
import ControlPage from "./Pages/ControlPage";
import AccountStatement from "./Pages/AccountStatement";
import SettlementReport from "./Pages/SettlementReport";
import CurrentBets from "./Pages/CurrentBets";
import ProfitLoss from "./Pages/ProfitLoss";
import BetHistory from "./Pages/BetHistory";
import ClientAccountForm from "./Pages/ClientAccountForm";
import { MasterPasswordProvider } from "./Context/MasterPassword";
import { AuthProvider } from "./Context/AuthProvider";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            element={
              // <ProtectedRoute>
                <MasterPasswordProvider>
                  <Layout />
                </MasterPasswordProvider>
              // </ProtectedRoute>
            }
          >
            <Route path="/" element={<Dashboard />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/edit-user/:user" element={<ClientAccountForm />} />
            <Route path="/gamebetlock" element={<ControlPage />} />
            <Route path="/casinocontrol" element={<CasinoControl />} />
            <Route path="/accountstatement" element={<AccountStatement />} />
            <Route path="/settlementreport" element={<SettlementReport />} />
            <Route path="/currentbets" element={<CurrentBets />} />
            <Route path="/profitloss" element={<ProfitLoss />} />
            <Route path="/bethistory" element={<BetHistory />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
