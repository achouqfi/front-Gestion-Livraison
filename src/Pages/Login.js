import React, { useState, useEffect } from 'react';
import { Grid,Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export default function Login() {
    const [api, setApi]= useState({api:''})
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if(window.location.pathname === "/RouteManager"){
            setApi({ api: "http://localhost:4000/api/manager/login" })
        }else if(window.location.pathname === "/admin"){
            setApi({ api: "http://localhost:4000/api/admin/login" })
        }else if(window.location.pathname === "/RouteLivreur"){
            setApi({ api: "http://localhost:4000/api/chauffeur/login" })
        } 
    }, [])
    
    function login(){
        console.log('ana f login');
    }

    console.log(api);

    const paperStyle={padding :20,height:'34vh',width:580, margin:"190px 30vw"}
    const avatarStyle={backgroundColor:'#003f5c'}
    const btnstyle={margin:'20px 0px', backgroundColor:"#003f5c"}
    const container = {backgroundColor:"black"}
    return(
        <Grid className={container} >
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Login In</h2>
                </Grid>
                <TextField label='Email' placeholder='Enter email' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <Button type='submit' onClick={(e)=>login()} color='primary' variant="contained" style={btnstyle} fullWidth>Login</Button>
                <Typography >
                    Authentifiez vous
                </Typography>
            </Paper>
        </Grid>
    )
}