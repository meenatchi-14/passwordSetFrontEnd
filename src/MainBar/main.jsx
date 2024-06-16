/* eslint-disable react/prop-types */
import { AppBar, Box, IconButton, Toolbar, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import {  useNavigate } from 'react-router-dom';
export const Main = ({title,children})=>{
  const navigate = useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem("token");
    navigate("/register",{replace:true})
  }
return(
<div>
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=>navigate("/")}>Home</IconButton>
            
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Password Set</Typography>
        
          <Button color="inherit" onClick={()=>navigate("/register")}>
            Login/signup</Button>
          <Button color="inherit" onClick={()=>navigate("/profile")}>Profile</Button>
          <Button color="inherit" onClick={()=>handleLogout()}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
     <div className="Form">
         <div className='title'>{title}</div>
         <div>{children}</div>
    </div>
</div>
)
}