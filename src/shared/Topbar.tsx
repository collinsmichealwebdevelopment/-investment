import {  UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

import { dark } from "@clerk/themes";


const Topbar = () => {
  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
      <Link to="/" className="flex gap-1 items-center ">
      <UserButton 
      appearance={{
        baseTheme: dark
      }} afterSignOutUrl="/home" />
        <h1 className="ml-2 text-light-3 h3-bold md:h3-bold pt-2 sm:pt-0">Profile</h1>
        </Link>
        
        <div className="flex gap-4">
               
                <div  className='flex-center gap-3'>
                    <img 
                    src='/assets/images/biglogo.svg'
                    alt="profile"
                    className='h-12 w-17 rounded-full'
                    />
                </div>
            
    </div>
    </div>
    </section>
  );
}

export default Topbar;
