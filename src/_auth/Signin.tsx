import { SignIn } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";


const Signin = () => {
  return (
    <div className="w-full flex justify-center items-center min-h-screen">
    <SignIn 
    appearance={{
      baseTheme: dark
    }}
    redirectUrl={'/'} path="/sign-in" signUpUrl="/sign-up" />
    </div>
  );
}

export default Signin;
