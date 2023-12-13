import {  useSession,  } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router-dom";
import Topbar from "../shared/Topbar";
import Leftsidebar from "../shared/Leftsidebar";
import Bottombar from "../shared/Bottombar";


const Protected = () => {
  const { isLoaded, session } = useSession()

  if (!isLoaded) {
    return
  }

  if (!session?.user) {
    return<Navigate to='/home'/>
  }

  return (
    <div className="w-full md:flex">
    <Topbar />
    <Leftsidebar/>

    <section className="flex flex-1 h-full">
    <Outlet />
    </section>

    <Bottombar/>
    </div>
   
  );
}


export default Protected;
