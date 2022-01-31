import React, { useState, useEffect } from 'react';
import { Grid,Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useCookies } from 'react-cookie';
import axios from 'axios';


export default function Login() {
    const [api, setApi]= useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cookies, setCookie,] = useCookies(['user']);


    useEffect(() => {
        if(window.location.pathname === "/RouteManager"){
            setApi("http://localhost:4000/api/manager/login" )
        }else if(window.location.pathname === "/admin"){
            setApi("http://localhost:4000/api/adminG/login" )
        }else if(window.location.pathname === "/RouteLivreur"){
            setApi("http://localhost:4000/api/chauffeur/login")
        }else if(window.location.pathname === "/RouteResLivraison"){
            setApi("http://localhost:4000/api/ResLivraison/login")
        } 
    }, [])
    
    function login(){
        axios
            .post(api,{
                email:email,
                password:password
            })
            .then(res=>{
                setCookie('token', res.data.token);
                setCookie('role', res.data.role);
                setCookie('id_livreur', res.data.id_livreur)
                // if (cookies.role === 'adminG') {
                    window.location="/"
                // }else if(cookies.role === 'manager') {
                //     window.location="/reslivraison"
                // }else if(cookies.role === 'resLivraison'){
                //     window.location="/livreur"
                // }else if(cookies.role === 'livreur'){
                //     window.location="/commande"
                // }
            })
            .catch(err=>{
                console.log(err);
            })
    }

    console.log(cookies);

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
                <TextField 
                    label='Email' 
                    placeholder='Enter email' 
                    onChange={(e)=>{setEmail(e.target.value)}}      
                    fullWidth 
                    required/>
                <TextField 
                    label='Password' 
                    placeholder='Enter password' 
                    onChange={(e)=>{setPassword(e.target.value)}}      
                    type='password' 
                    fullWidth 
                    required/>
                <Button type='submit' onClick={(e)=>login()} color='primary' variant="contained" style={btnstyle} fullWidth>Login</Button>
                <Typography >
                    Authentifiez vous
                </Typography>
            </Paper>
        </Grid>
    )
}