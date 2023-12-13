import { UserButton } from "@clerk/clerk-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { sidebarLinks } from "../constants";
import { INavLink } from "../types";
import Signout from "../_auth/Signout";
import { dark } from "@clerk/themes";


const Leftsidebar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-5">
      <Link to="/"className="flex gap-1 items-center">
      <UserButton 
      appearance={{
        baseTheme: dark
      }} afterSignOutUrl="/sign-in"/>
        <h1 className="ml-2 text-light-3 h2-bold md:h2-bold pt-2 sm:pt-0">Profile</h1>
        </Link>

        <div className='flex gap-2 items-center'>
        </div>

        <ul className='flex flex-col gap-2'>
                {sidebarLinks.map((link: INavLink) => {
                    const isActive = pathname === link.route;

                    return (
                        <li key={link.label}
                        className={`leftsidebar-link group ${
                            isActive && '#1e40af'
                        }`}>
                    <NavLink 
                    to={link.route}
                    className="flex gap-4 items-center p-4"
                    >
                        <img
                        src={link.imgURL}
                        alt={link.label}
                        className={`group-hover:invert-white $
                        {isActive && 'invert-white'}`}
                        />
                        {link.label}
                    </NavLink>
                    </li>
                    )
                })}
            </ul>
    </div>
<div>
    <Signout />
    </div>
    </nav>
  );
}

export default Leftsidebar;
