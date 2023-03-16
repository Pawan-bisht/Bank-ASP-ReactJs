import React, { useContext, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import BankContext from "../context/bank";
import { depositeMoneyObject } from '../Http/DepositeMoney';

export default function DepositeForm({ user, accountNumber, handleClose }){

    const [amount, setAmount] = useState('');
    const { depositeMoney } = useContext(BankContext);
    const formValidation = (e) =>{
        e.preventDefault();
        if(amount === '' || parseInt(amount) === NaN){
            alert('Wrong Amount Entry')
        } else {
            const postBody = depositeMoneyObject(user[0].id, accountNumber, parseInt(amount), user[0].socialSecurityNumber);
            console.log(postBody);
            depositeMoney(postBody);
            handleClose();
        }
    }
    console.log(user);
    return (<div >
        <Box sx={{ width: '100%', maxWidth: 500 }} style={{display:'flex', justifyContent:'center'}}>
        <Typography variant="h5" gutterBottom >
            Deposite Amount Form
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