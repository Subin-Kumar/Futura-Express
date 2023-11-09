import { useSelector } from "react-redux";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import FormatAccount from "./FormatAccount";
import 'bootstrap/dist/css/bootstrap.min.css';
import Update from "./Update";
import ForPass from "./ForPass";

function App() {
  const Userdata=useSelector(state=>state.usData.Pass)
  if(Userdata[0]){
    var token=Userdata[0].accesstoken
  }
console.log("Logindata--",Userdata);
console.log("token--",token);
  const router=createBrowserRouter([
    { 
      path:'/signup',
      element:<SignUp/>
     },
     { 
      path:'/',
      element:token?<Home/>:<Login/>
     },
     { 
      path:'/del',
      element:token?<FormatAccount/>:<Login/>
     },
     { 
      path:'/up',
      element:token?<Update/>:<Login/>
     },
     { 
      path:'otp',
      element:<ForPass/>
     }
   ])
  return (
    
    <RouterProvider router={router}></RouterProvider>
  
  );
}

export default App;
