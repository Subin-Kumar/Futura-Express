
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import AdminHome from './AdminHome';
import AdminLogin from './AdminLogin';
import AdminSignup from './AdminSignup';
import { useSelector } from 'react-redux';
import AdminList from './AdminList';

function App() {
  const AdminALLdata=useSelector(state=>state.AdminData.AdlogD)
  if(AdminALLdata[0]){
    var tokenAd=AdminALLdata[0].accesstoken
  }
  console.log("tokennnn====",tokenAd);
  const router=createBrowserRouter([
    {
      path:'/',
      element:tokenAd?<AdminHome/>:<AdminLogin/>
      
    },
    {
      path:'AHome',
      element:<AdminHome/>
    },
    {
      path:'Asignup',
      element:<AdminSignup/>
    },
    {
      path:'AList',
      element:<AdminList/>
    }
  ])
  return (
    <div className="App">
   <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
