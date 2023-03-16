import React, { useEffect, useContext, useState } from "react";
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import BankContext from "../context/bank";
import ModalPage from "./ModalPage";
import AccountForm from './AccountForm';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import { deletePostObject } from "../Http/DeleteAccount";
import WithdrawForm from "./WithdrawForm";
import DepositeForm from "./DepositeForm";


function AccountPage(props) {

    const location = useLocation();
    const { users, deleteAccount, fetchUsers } = useContext(BankContext);
    const [addAccountToggle, setaddAccountToggle] = useState(false);
    const [user, setUser] = useState();
    const [userId, setuserId] = useState(location.pathname.replace('/accounts/', ''));
    const [onDeposite, setDeposite] = useState(false);
    const [onWithdraw, setWithdraw] = useState(false);
    const [ssn, setSSN] = useState('');
    const [accountNumber, setAccountNumber] = useState('');


    const toggleAddAccount = () => {
        setaddAccountToggle(!addAccountToggle);
    }
    console.log(useContext(BankContext));

    useEffect(()=>{
        console.log(location.pathname.replace('/accounts/', ''));
        console.log(users);
        console.log('1111');
        const user = users.filter(user=>{
            return  user.id === userId;
        })
        console.log(user);
        setUser(user);
    }, [users])

    useEffect(()=>{
        console.log(location.pathname.replace('/accounts/', ''));
        console.log(users);
        const user = users.filter(user=>{
            return user.id === userId;
        })
        console.log(user);

        setUser(user);
    }, [])

    useEffect(()=>{
        fetchUsers();
    }, [])


    const onAccoutDelete = (userId, ssn, accountNumber) =>{
        const deleteObj = deletePostObject(userId, ssn, accountNumber);
        deleteAccount(deleteObj);
    }

    const onDepositeToggle = (accountNumber) =>{
        setAccountNumber(accountNumber);
        setDeposite(!onDeposite);
    }

    const onWithdrawToggle = (accountNumber) =>{
        setAccountNumber(accountNumber);
        setWithdraw(!onWithdraw);
    }

    const accountList = () => {
        return user[0].accounts.map(item => {
            return (<Card sx={{ minWidth: 350, margin:"1rem" }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Account Number
                  </Typography>
                  <Typography variant="h5" component="div">
                    {item.accountNumber}
                  </Typography>
                  <Typography sx={{ fontSize: 14, marginTop:'1rem' }} color="text.secondary" gutterBottom>
                    Current Balance 
                  </Typography>
                  <Typography variant="h5" component="div">
                    {item.balance}$
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button startIcon={<DeleteIcon />} onClick={() => onAccoutDelete(user[0].id, user[0].socialSecurityNumber, item.accountNumber)} variant="outlined" color="error" size="small">Delete</Button>
                  <Button variant="outlined" size="small" onClick={() => onWithdrawToggle(item.accountNumber)}>Withdraw</Button>
                  <Button variant="outlined" color="success" size="small" onClick={() => onDepositeToggle(item.accountNumber)}>Deposite</Button>
                </CardActions>
              </Card>);
        })
    }

    return <div style={{marginTop:"4rem"}}>
        <Box sx={{ width: '100%', maxWidth: 500 }} style={{display:'flex', justifyContent:'center'}}>
        <Typography variant="h5" gutterBottom >
            Welcome {user?.length ? user[0].name : null}
        </Typography>
        </Box>
        
        { addAccountToggle && 
        <ModalPage open={addAccountToggle} handleClose={toggleAddAccount} >
            <AccountForm users={users} user={user} handleClose={toggleAddAccount} />
        </ModalPage>}
        
        <div style={{display:"flex", flexDirection:"space-evenly", flexWrap:"wrap"}}>
            { user?.length > 0 && accountList()}
        </div>

        {onWithdraw &&  <ModalPage open={onWithdraw} handleClose={onWithdrawToggle}>
            <WithdrawForm users={users} accountNumber={accountNumber} user={user} handleClose={onWithdrawToggle} />
        </ModalPage>}

        {onDeposite &&  <ModalPage open={onDeposite} handleClose={onDepositeToggle} >
            <DepositeForm users={users} accountNumber={accountNumber} user={user} handleClose={onDepositeToggle} />
        </ModalPage>}
        <Button variant="contained" sx={{position:"absolute", right:"50%"}} onClick={toggleAddAccount}>Add account</Button>
        
        </div>
}
export default AccountPage;