import { createBrowserRouter } from 'react-router-dom'
import WebsiteLayout from './view/frontend/layouts/WebsiteLayout'
import Home from './view/frontend/pages/Home'
import WithdrawApplication from './view/frontend/pages/Profile/WithdrawApplication'
import MemberCenter from './view/frontend/pages/MemberCenter'
import Deposit from './view/frontend/pages/Profile/Deposit'
import WebsiteProfile from './view/frontend/layouts/WebsiteProfile'
import WithdrawMoney from './view/frontend/pages/Profile/WithdrawMoney'
import TheThaoLayout from './view/frontend/pages/TheThao/TheThaoLayout'
import CasinoLayout from './view/frontend/pages/Casino/CasinoLayout'
import NoHuLayout from './view/frontend/pages/NoHu/NoHuLayout'
import BanCaLayout from './view/frontend/pages/BanCa/BanCaLayout'
import Silbar from './view/frontend/pages/Profile/Silbar'
import DaGaLayout from './view/frontend/pages/DaGa/DaGaLayout'
const routers = createBrowserRouter([
  {
    path: '/',
    element: <WebsiteLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'thethao', element: <TheThaoLayout /> },
      { path: 'casino', element: <CasinoLayout /> },
      { path: 'nohu', element: <NoHuLayout /> },
      { path: 'banca', element: <BanCaLayout /> },
      { path: 'daga', element: <DaGaLayout /> }
    ]
  },
  {
    path: '/profile',
    element: <WebsiteProfile />,
    children: [
      { path: 'silbar', element: <Silbar /> },
      { path: 'withdraw-application', element: <WithdrawApplication /> },
      { path: 'member-center', element: <MemberCenter /> },
      { path: 'deposit', element: <Deposit /> },
      { path: 'withdraw-money', element: <WithdrawMoney /> }
    ]
  }
])

export default routers
