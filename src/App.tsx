import { ClerkProvider, SignedIn, SignedOut,  } from "@clerk/clerk-react";
import { Route, Routes, useNavigate} from 'react-router-dom';
import './globals.css'
import Protected from "./_auth/Protected";
import Signin from "./_auth/Signin";
import Signup from "./_auth/Signup";
import Withdrawal from "./shared/Withdrawal";
import Deposit from "./shared/Deposit";
import Myplan from "./shared/Myplan";
import Home from "./shared/Home";
import Homepage from "./Homepage/Homepage";
import Depositmanual from "./shared/Depositmanual";
import Referral from "./shared/Referral";


if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const App = () => {
  const navigate = useNavigate();
  
  return (
    <main className='flex h-screen'>
      <ClerkProvider publishableKey={clerkPubKey} 
      navigate={(to) => navigate(to)}>
        <Routes>
        <Route path="/" element={<Protected />}>
          <Route index element={<Home />}/>
        <Route path="/withdrawal" element={<Withdrawal />} />
        <Route path="/deposit" element={<Deposit/>} />
        <Route path="/deposit-manual/:id/*" element={<Depositmanual/>} />
        <Route path="/my-plan" element={<Myplan />} />
        <Route path="/referrals" element={<Referral />}/>
        </Route>
        <Route 
        path="/home"
        element={<Homepage />}/>
        
          <Route
          path="/sign-in/*"
          element={<Signin />}/>

          <Route
          path="/sign-up/*"
          element={<Signup />} />
          
          <Route
          path="/"
          element={
            <>
            <SignedIn>
              <Protected/>
            </SignedIn>
            <SignedOut>
            <Signin />
          </SignedOut>
            </>
          }/>
        </Routes>
        </ClerkProvider>
        
    </main>
  );
}

export default App;

