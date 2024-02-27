
import { Typography,Button,TextField } from '@mui/material'
import React,{useState} from 'react'


const Addblog = () => {
    // var[data,setData]= useState();
    // const inputHandler=(e)=>{
    //     setData({...data,[e.target.name]:e.target.value});
    //     console.log(data);
    // }



  return (
    <div  sx={{Flexgrow:1}} align='center' >
         <h1>Blog Form</h1>
        <TextField variant='outlined' label='Blog name' name='fname' />&nbsp;
        <br /><br />
        <TextField variant='outlined' label='Description' name='desc' />&nbsp;&nbsp;
        <br /><br />
        <TextField variant='outlined'label='Author' name='auth'/>
        <br /><br />
        <Button variant='contained'>submit</Button>
        
    </div>
  )
}

export default Addblog
