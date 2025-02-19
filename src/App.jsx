import "./App.css";
import DateFilter from "./Components/DateFilter/DateFilter";
import ControlPage from "./Pages/ControlPage";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import TopDashboard from "./Components/Topdashboard/TopDashboard";
import Layout from "./Layout/Layout";
import ClientAccountForm from "./Pages/ClientAccountForm";
import Clients from "./Pages/Clients";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CasinoControl from "./Pages/CasinoControl";
import { MasterPasswordProvider } from "./Context/MasterPassword";
import AccountStatement from "./Pages/AccountStatement";
import SettlementReport from "./Pages/SettlementReport";
import CurrentBets from "./Pages/CurrentBets";
import ProfitLoss from "./Pages/ProfitLoss";
import BetHistory from "./Pages/BetHistory";

function App() {
  return (
    <>
      <Router>
        <MasterPasswordProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/edit-user/:user" element={<ClientAccountForm />} />
              <Route path="gamebetlock" element={<ControlPage />} />
              <Route path="casinocontrol" element={<CasinoControl />} />
              <Route path="accountstatement" element={<AccountStatement />} />
              <Route path="settlementreport" element={<SettlementReport />} />
              <Route path="currentbets" element={<CurrentBets />} />
              <Route path="profitloss" element={<ProfitLoss />} />
              <Route path="bethistory" element={<BetHistory />} />
            </Route>
          </Routes>
        </MasterPasswordProvider>
      </Router>

      {/* <Header/>
    <TopDashboard/>
    <Dashboard/>
    <ControlPage/> */}
      {/* <Login/> */}
    </>
  );
}

export default App;
