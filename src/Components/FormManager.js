import React, { useState }  from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios"

export default function FormManager() {  
    // const url ="";
    const [status, setStatus] = useState(undefined);
    const [data , setData] = useState({
        name:"",
        email:"",
        datenaissance:""
    });

    function submit(e){
        e.preventDefault();
        axios
            .post("http://localhost:4000/api/manager/add",{
                name:data.name,
                email:data.email,
                datenaissance: data.datenaissance
            })
            .then(res=>{
                console.log(res)
                setStatus({ type: 'success' });
            })
            .catch(err=>{
                console.log(err)
                setStatus({ type: 'error', err });
            })
    }

    function add(e){
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData);   
    }

    return (
        <div>
            <Box
                component="form"
                sx={{
                '& > :not(style)': { m: 1, width: '90%' },
                }}
                onSubmit={(e)=>submit(e)}
                noValidate
                autoComplete="off"
            >
                <TextField
                onChange={(e)=>add(e)}
                value={data.name}
                id="name"
                label="Nom et prenom"
                />
                <TextField
                value={data.email}
                onChange={(e)=>add(e)}
                id="email"
                label="Email"
                type="email"
                />
                <TextField
                value={data.datenaissance}
                onChange={(e)=>add(e)}
                id="datenaissance"
                label=""
                type="date"
                />
                <Button className='btn-ajout' variant="outlined" type='submit' size="large">Ajouter</Button>
                {status?.type === 'success' && <p className='add-success'>le manager a été ajouter</p>}
                {status?.type === 'error' && (
                    <p className='err-message'>erreur</p>
                )}
            </Box>
        </div>
    );
}
