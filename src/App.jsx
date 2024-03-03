import React from 'react';
import UserProfile from './Organismos/UserProfile';
import Register from './Organismos/Register';
import LoginX from './Organismos/Login';
import Feed from './Organismos/feed';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginX />,
  },
{
  path:"/crearCuenta",
  element:<Register/>,
},
{
  path:"/perfil",
  element:<UserProfile/>,
},
{
  path:"/inicio",
  element:<Feed/>,
},
])
function App() {
  return (
    // <div className="App">
    //   <UserProfile />
    // </div>
    <>
       <RouterProvider router={router} />
    </>
  );
}

export default App;