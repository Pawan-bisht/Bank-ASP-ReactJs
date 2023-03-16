import React, { useState, useContext } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import BankContext from "../context/bank";
import { createAccountBody } from '../Http/CreateAccount';

export default function AccountForm(props){

    const { createAccount } = useContext(BankContext);
    const [deposite, setDeposite] = useState('');

    const formValidation = (e) => {
        e.preventDefault();
        if(deposite == '' || parseInt(deposite) === NaN) {
            console.log("Plase fill the proper details")
        }
        else {
            console.log(props.user[0].id, props.user[0].socialSecurityNumber, deposite)
            const postBody = createAccountBody(props.user[0].id, props.user[0].socialSecurityNumber, parseInt(deposite));
            try{
                createAccount(postBody);
                console.log("we reached here");
                props.handleClose();
            } catch(e) {
                console.log(e);
            }


        }
    }

    return (<div >
    <Box sx={{ width: '100%', maxWidth: 500 }} style={{display:'flex', justifyContent:'center'}}>
    <Typography variant="h5" gutterBottom >
        Account Details
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
    <InputLabel>Amoun to be deposite</InputLabel>
    <TextField style={{width:'25rem'}} required id="outlined-basic" label="Ammout" variant="outlined" value={deposite} onChange={(e) => setDeposite(e.target.value)} />
    <div><Button variant="contained" type="submit" >Submit</Button></div>
    </Box>
    </div>)
}