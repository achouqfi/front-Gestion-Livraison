import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormManager() {  
    return (
        <div>
            <Box
                component="form"
                sx={{
                '& > :not(style)': { m: 1, width: '90%' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                id="outlined-name"
                label="Nom et prenom"
                />
                <TextField
                id="outlined-name"
                label="Email"
                type="email"
                />
                <TextField
                id="outlined-name"
                label=""
                type="date"
                />
                <TextField
                id="outlined-name"
                label="Name"
                />
            </Box>
        </div>
    );
}
