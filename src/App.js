import React, { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import BankContext from './context/bank';
import Home from './components/Home';
import AccountPage from './components/AccountPage';
import NavBar from './components/NavBar';

function App() {
  const { fetchUsers  } = useContext(BankContext);
      useEffect(()=>{
            fetchUsers();
        }, [])
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/accounts/:id' element={<AccountPage/>} />
      </Routes>
    </div>
  );
}

export default App;
