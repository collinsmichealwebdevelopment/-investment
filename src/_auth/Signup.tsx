import { SignUp } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";


const Signup = () => {
  return (
    <div className="w-full flex justify-center items-center min-h-screen">
    <SignUp appearance={{
      baseTheme: dark
    }}
    redirectUrl={'/'} path="/sign-up" signInUrl="/sign-in" />
    </div>
  );
}

export default Signup;
