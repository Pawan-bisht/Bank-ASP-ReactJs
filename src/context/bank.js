import { createContext, useState } from "react";
import axios from 'axios';
import { HttpEndpointUrl } from "../Http/Endpoint";
import ErrorModalPage from "../components/ErrorModalPage";
const BankContext = createContext();

function Provider({children}) {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
  const fetchUsers = async ()=>{
    const result = await axios.get(`${HttpEndpointUrl}/Bank/all-users`);
    setUsers([...result.data]);
  }

  const createUser = async (user) => {
    try{
      const result = await axios.post(`${HttpEndpointUrl}/Bank/create-user`, user);
      const updatedUsers = [...result.data];
      setUsers(updatedUsers);
    } catch(e) {
      console.log(e);
      let errorMsg = e.response.data.split("\n")[0].replace('System.Exception: ', '');
      setErrorMsg(errorMsg)
      setError(!error);
    }
    
  }

  const createAccount = async (account) => {
    try{
      const result = await axios.post(`${HttpEndpointUrl}/Bank/create-account`, account);
      const updatedUsers = [...result.data];
      setUsers(updatedUsers);
    } catch(e) {
      console.log(e);
      let errorMsg = e.response.data.split("\n")[0].replace('System.Exception: ', '');
      setErrorMsg(errorMsg)
      setError(!error);
    }
  }

  const deleteAccount = async (account) => {
    const result = await axios.post(`${HttpEndpointUrl}/Bank/delete-account`, account);
    const updatedUsers = [...result.data];
    setUsers(updatedUsers);
  }

  const depositeMoney = async (account) => {
    
  try{
      const result = await axios.post(`${HttpEndpointUrl}/Bank/deposite-amount`, account);
      const updatedUsers = [...result.data];
      setUsers(updatedUsers);
    } catch(e) {
      console.log(e);
      let errorMsg = e.response.data.split("\n")[0].replace('System.Exception: ', '');
      setErrorMsg(errorMsg)
      setError(!error);
    }
  }

  const withdrawMoney = async (account) => {
    try{
      const result = await axios.post(`${HttpEndpointUrl}/Bank/withdraw-amount`, account);
      const updatedUsers = [...result.data];
      setUsers(updatedUsers);
    } catch(e) {
      console.log(e);
      let errorMsg = e.response.data.split("\n")[0].replace('System.Exception: ', '');
      setErrorMsg(errorMsg)
      
      setError(!error);
    }
    
  }

  const provider = {
    fetchUsers,
    createUser,
    createAccount,
    deleteAccount,
    depositeMoney,
    withdrawMoney,
    users,
  }

  const toggleErrorModal = () => {
    setError(!error);
  }


  return (
    <BankContext.Provider value={provider}>
          {children}
          {error && <ErrorModalPage open={error} handleClose={toggleErrorModal}  message={errorMsg}>
            </ErrorModalPage>}
      </BankContext.Provider>)
  }
export { Provider };
export default BankContext;