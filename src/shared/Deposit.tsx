// @ts-nocheck
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./UserReducer";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";


const Deposit = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser({id: users[users.length - 1].id + 1, name, email}))
    navigate(`/deposit-manual/${users.id}`);
  }


  return (
    <div className="sticky top-0 z-50 w-full overflow-scroll custom-scrollbar justify-center items-center ">
      <div className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8 flex  justify-center items-center">
      <div className="w-96 border shadow-lg bg-white rounded-md p-6">
        <h1 className="text-3xl block text-center font-semibold text-black">deposit here</h1>
        <hr className="mt-3"/>
        <form onSubmit={handleSubmit} >
          <div className="mt-3">
            <label htmlFor="number" className="block text-base mb-2 text-black font-semibold">Amount</label>
            <Input type="number" placeholder="enter amount" className="text-black" 
            name="number" onChange={e => setName(e.target.value)}
            />
            </div>
            <div className="mt-3">
            <label htmlFor="name" className="block text-base mb-2 text-black font-semibold">Select Gateway</label>
             <select id="gatway"
             className="text-light-4 boder w-full text-base px-4 py-2 focus:outline-none focus:ring-0 
             focus:border-grey-600 " 
             placeholder="enter wallet" onChange={e => setEmail(e.target.value)}>
              <option value="gateway">Select Gateway</option>
              <option value="btc">btc</option>
              <option value="eth">eth</option>
              <option value="usdt">usdt</option>
             </select>
             </div>
             <div className="mt-3">
          <Button>Submit</Button>
          </div>
        </form>
    </div>
    </div>
    </div>
  );
}

export default Deposit;
