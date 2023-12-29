// @ts-nocheck
import { useSelector } from "react-redux";
import { princingPlans } from "../constants/Plansforpayment";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Uploader from "@/components/Uploader";


const Depositmanual = () => {
  const users = useSelector((state) => state.users);

  const location = useLocation();

  useEffect(() => {
    if (window.location.pathname !== location.pathname) {
      window.location.reload();
    }
  }, [location.pathname]);

  return (
    <div className="sticky top-0 z-50 w-full overflow-scroll custom-scrollbar bg-white">
        <div className="mx-auto max-w-7xl px-4 pt-7 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-blue-900 sm:text-5xl sm:leading-tight sm:tracking-tight">
          Deposit Manual
        </h2>
      </div>
      <div className="mx-auto max-w-7xl px-4 pt-0 sm:px-6 lg:px-8">
      <p className="mt-4 mb-2 text-sm leading-6 text-blue-400 font-semibold items-center">Make a deposit of eth, btc,
       usdt depending on your selection</p>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-2 sm:px-6 lg:px-8">
        <table className="shadow-2xl font-[poppins] border-2 border-cyan-900 w-6/12">
            <tbody className="text-cyan-900 text-center">
                {users.map((user, index) => (
                    <tr key={index} className="bg-blue-200 cursor-pointer duration-300">
                        <td className="py-1 px-2 text-lg font-semibold text-slate-700 leading-5">{user.name} </td>
                        <td className="py-1 px-2 text-lg font-semibold text-slate-700 leading-5">{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
      
        <div className="mx-auto max-w-7xl grid lg:grid-cols-3 gap-12 lg:gap-8 py-4 px-4 sm:px-6 lg:px-8">
      {princingPlans.map((plan) => (
        <div key={plan.title} className="border border-slate-200 shadow-lg p-8 bg-white rounded-2xl relative"
        >
          <h3 className="text-lg font-semibold text-slate-700 leading-5">{plan.title}</h3>
          
          <p className="mt-4 text-sm leading-6 text-slate-700">{plan.description}
          </p>
          <div className="mt-4 -mx-6 rounded-lg bg-slate-200 p-6">
            <p className="flex text-sm font-semibold text-slate-500 items-center">
              {plan.wallet}
            </p>
          </div>
          </div>
          ))}
          </div>
          <p className="font-bold text-slate-950 text-1xl mt-3 ml-9">Transaction proof*</p>
          <p className="text-sm text-slate-950 mt-1 ml-9">Send the screenshot of your payment here!</p>
          <Uploader/>
    </div>
  );
}

export default Depositmanual;
