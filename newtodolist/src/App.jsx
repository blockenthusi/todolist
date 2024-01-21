
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Alltask from './Components/Alltask/Alltask'
import Login from './Components/Login/Login'
import Main from './Components/Main/Main'
import Signup from './Components/Signup/Signup'
import Splash from './Components/Splash/Splash'
// import Calender from './Components/Calender/Calender'
import Theme from './Components/Theme/Theme'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Splash/>
  },

  {
    path: "/signup",
    element: <Signup/>
  },

  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/main",
    element: <Main/>
  },
  // {
  //   path: "/calender",
  //   element: <Calender/>
  // },
  {
    path: "/theme",
    element: <Theme/>
  },
  {
    path: "/alltask",
    element: <Alltask/>
  }
])
  



function App() {
  
  return (
    <>
      <RouterProvider router={router}/>

    </>
  )
}

export default App
