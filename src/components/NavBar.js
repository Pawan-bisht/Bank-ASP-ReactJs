import React from "react";
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button'

function Navigation() {
    return (
        <Box sx={{ display: 'flex', height:'30px', display:'flex', flexDirection:'row-reverse' }}>
            <AppBar component="nav">
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            
            <div style={{ padding:'10px', fontSize:'1.2rem', display: 'flex'}}>
                <div><HomeIcon style={{ paddingTop:'0px', fontSize:'1.3rem' }} />
                </div>
                <div >
                    <Link style={{textDecoration:'none', color:'#fff'}} to='/'>Home</Link></div>
            </div>
            </Box>
            </AppBar>
        </Box>
    )

}

export default Navigation;