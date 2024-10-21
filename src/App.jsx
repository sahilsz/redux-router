import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage'

import EnergySync from './pages/EnergySync/EnergySync';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />
  },
  // {
  //   path: "/device",
  //   element: <DeviceDetails />
  // },
  {
    path: "/device", 
    element: <EnergySync />
  },
  
])
function App() {

  


  
  return (

      <RouterProvider router={router} />

  )
}
export default App
