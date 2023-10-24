import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Main } from './components/home/Main.jsx'
import './index.css'

import { ThemeProvider } from '@material-tailwind/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Budgets } from './components/budgets/Budgets'
import { ProfileDetails } from './components/profile/ProfileDetails'
import { Rewards } from './components/rewards/Rewards'
import { Analytics } from './components/analytics/Analytics'
import { AllChallenges } from './components/challenges/AllChallenges'
import { EditProfile } from './components/editprofile/EditProfile'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Main />,
      },
      {
        path: "/budgets",
        element: <Budgets />,
      },
      {
        path: "/challenges",
        element: <AllChallenges />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/rewards",
        element: <Rewards />,
      },
      {
        path: "/profile",
        element: <ProfileDetails />
      },
      {
        path: "/editprofile",
        element: <EditProfile />
      }
    ]
  } 
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>,
)
