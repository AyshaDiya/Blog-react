import { TableContainer, TableHead, TableRow,TableCell,Table, TableBody} from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Api = () => {
    var[user,setUsers]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            console.log(response.data)
            setUsers(response.data)
        })
    })
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><h1>USERID</h1></TableCell>
                        <TableCell><h1>ID</h1></TableCell>
                        <TableCell><h1>TITLE</h1></TableCell>
                        <TableCell><h1>BODY</h1></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {user.map((val,i)=>{
                        return(
                            <TableRow>
                                <TableCell key={i}>{val.userId}</TableCell>
                                <TableCell key={i}>{val.id}</TableCell>
                                <TableCell key={i}>{val.title}</TableCell>
                                <TableCell key={i}>{val.body}</TableCell>

                                
                            </TableRow>
                        )
                    }
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Api