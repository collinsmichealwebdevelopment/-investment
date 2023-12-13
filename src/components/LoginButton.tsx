import { Link } from "react-router-dom";


const LoginButton = ({ styles }) => {
  return (
    <Link to="/sign-in" >
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium
    text-[18px] text-primary outline-none 
    ${styles} rounded-[10px]`}>Login now
    </button>
    </Link>
  );
}

export default LoginButton;
