import './App.css'
import DateFilter from './Components/DateFilter/DateFilter'
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'
import TopDashboard from './Components/Topdashboard/TopDashboard'
import Dashboard from './Pages/Dashboard'

function App() {

  return (
    <>
    <Header/>
    <TopDashboard/>
    <Dashboard/>
    {/* <Login/> */}
    </>
  )
}

export default App
