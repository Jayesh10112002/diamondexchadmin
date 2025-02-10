import './App.css'
import DateFilter from './Components/DateFilter/DateFilter'
import ControlPage from './Components/EventControl/ControlPage'
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'
import TopDashboard from './Components/Topdashboard/TopDashboard'
import Layout from './Layout/Layout'
import ClientAccountForm from './Pages/ClientAccountForm'
import Clients from './Pages/Clients'
import Dashboard from './Pages/Dashboard'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Layout />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="edit-user/:user" element={<ClientAccountForm />} />
        </Routes>
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
