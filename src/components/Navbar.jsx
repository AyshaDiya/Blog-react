import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <div sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BLOGIN!
          </Typography>
          {/* <Button variant="contained">HOME</Button>&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="contained">ADD BLOG</Button> */}
           <Button variant='contained'> 
                    <Link to ='/' style={{color:'white'}} >Addblog</Link>
                </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    
                  <Button variant='contained'>
                    <Link to ='/t' style={{color:'white'}}>Home</Link>
                </Button> 
                {/* <Button>
                    <Link to ='/c' style={{color:'white'}}>StudentList</Link>
                </Button>  */}
                            
        </Toolbar>
      </AppBar>

        
    </div>
  )
}

export default Navbar