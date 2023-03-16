import React, { useState, useContext, useEffect } from "react";
import Button from '@mui/material/Button';
import ModalPage from "./ModalPage";
import UserForm from './UserForm';
import BankContext from "../context/bank";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
function Home(){

    const { users } = useContext(BankContext);
    console.log(users);
    const toggleAddUserModal = () => {
        setAddUserModal(!adduserModal);
    }

    const { fetchUsers  } = useContext(BankContext);
        useEffect(()=>{
            fetchUsers();
        }, [])

    const usersMap = users.map(user=> {
        let redirectRoute = `/accounts/${user.id}`;
        return (
              <TableRow
                key={user.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="right">{user.socialSecurityNumber}</TableCell>
                <TableCell align="right">{user.phoneNumber}</TableCell>
                <TableCell align="right">{user.accounts?.length}</TableCell>
                <TableCell align="right"><Button variant="contained"><Link to={redirectRoute} state={{userId:user.id}} style={{textDecoration:"none", color:"#fff"}}>View</Link></Button></TableCell>
              </TableRow>
            
        )});

    const [adduserModal, setAddUserModal] = useState(false);
    
    return <div style={{marginTop:'4rem'}}>
    <Button variant="contained" onClick={toggleAddUserModal}>Add user</Button>
    { adduserModal && 
    <ModalPage open={adduserModal} handleClose={toggleAddUserModal} >
        <UserForm handleClose={toggleAddUserModal} />
    </ModalPage> }

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">SSN</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Number Of accounts</TableCell>
            <TableCell align="right">View</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {usersMap}
        </TableBody>
        </Table>
    </TableContainer>
    </div>
}

export default Home;