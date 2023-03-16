import React from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '25rem',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
function ErrorModalPage(props){
    return <div style={{textAlign:"center"}}>
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
        
        <Alert severity="error"><Typography variant="h6" gutterBottom >
        {props.message}
        </Typography></Alert>
        <Button onClick={props.handleClose} sx={{textAlign:'center', marginLeft:"10rem", marginTop:"1rem"}} variant="outlined" color="error" size="medium">Close</Button>
        
        </Box>
        </Modal>
        
  </div>
}

export default ErrorModalPage;