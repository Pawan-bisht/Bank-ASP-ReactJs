import React, { useState, useContext } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import ErrorModalPage from './ErrorModalPage';
import { Button } from "@mui/material";
import { createPostObject } from '../Http/CreateUser';
import BankContext from "../context/bank";
import Typography from '@mui/material/Typography';


function UserForm ({handleClose}) {

    const { createUser } = useContext(BankContext);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [ssn, setssn] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dob, setdob] = useState('');
    const [age, setAge] = useState();
    const [errorPage, setErrorPage] = useState(false);


    const formValidation = (e) => {
        e.preventDefault();
        if(name === '' || address=== '' || ssn === '' || phoneNumber === '' || dob === '' || age === ''){
            return alert('Please fill all the entries!');
        }
        const postBody = createPostObject(name, ssn, phoneNumber, address, dob, age);
        createUser(postBody);
        console.log(e.target);
        handleClose();
    }

    return (<div >
        <Box sx={{ width: '100%', maxWidth: 500 }} style={{display:'flex', justifyContent:'center'}}>
        <Typography variant="h5" gutterBottom >
            User Details
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
    <InputLabel>Name</InputLabel>
    <TextField style={{width:'25rem'}} required id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
    <InputLabel>Social Security Number</InputLabel>
    <TextField style={{width:'25rem'}} required id="outlined-basic" label="Social Security Number" variant="outlined" value={ssn} onChange={(e) => setssn(e.target.value)}  />
    <InputLabel>Phone Number</InputLabel>
    <TextField style={{width:'25rem'}} required id="outlined-basic" type="number" label="Phone Muber" variant="outlined" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
    <InputLabel>Address</InputLabel>
    <TextField style={{width:'25rem'}} required id="outlined-basic" label="Address" variant="outlined" value={address} onChange={(e) => setAddress(e.target.value)} />
    <InputLabel>Date Of Birth</InputLabel>
    <TextField style={{width:'25rem'}} required id="outlined-basic" type="date" label="" variant="outlined" value={dob} onChange={(e) => setdob(e.target.value)} />
    <InputLabel>Age</InputLabel>
    <TextField style={{width:'25rem'}} required id="outlined-basic" type="number" label="Age" variant="outlined" value={age} onChange={(e) => setAge(e.target.value)} />
    <div><Button variant="contained" type="submit" >Submit</Button></div>
  </Box>
  </div>)
}

export default UserForm