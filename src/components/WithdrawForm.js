import React, { useContext, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import BankContext from "../context/bank";
import { withdrawMoneyObject } from '../Http/WithdrawMoney';

export default function WithdrawForm({ user, accountNumber, handleClose }){

    const [amount, setAmount] = useState('');
    const { withdrawMoney } = useContext(BankContext);
    const formValidation = (e) =>{
        e.preventDefault();
        if(amount === '' || parseInt(amount) === NaN){
            alert('Wrong Amount Entry')
        } else {
            const postBody = withdrawMoneyObject(user[0].id, accountNumber, parseInt(amount), user[0].socialSecurityNumber);
                withdrawMoney(postBody);
                handleClose();
        }
    }
    console.log(user);
    return (<div >
        <Box sx={{ width: '100%', maxWidth: 500 }} style={{display:'flex', justifyContent:'center'}}>
        <Typography variant="h5" gutterBottom >
            Withdraw Amount Form
        </Typography>
        </Box>
        <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    onSubmit={formValidation}
  >
    <InputLabel>Amount</InputLabel>
    <TextField style={{width:'25rem'}} required id="outlined-basic" label="Amount" variant="outlined" value={amount} onChange={(e) => setAmount(e.target.value)} />
    <div><Button variant="contained" type="submit" >Submit</Button></div>
   </Box>
   </div>)
}