

import {Stack, TextField, InputAdornment} from "@mui/material";

import React, { useState } from "react";



const MuiTextField = () => {
    const [vlera, setvlera] = useState('');
  return (
    <div >
        <div className="divKryesor">
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField label='Name' variant="outlined"></TextField>
                <TextField label='Name' variant="filled"></TextField>
                <TextField label='Name' variant="standard"></TextField>
            </Stack>
        </Stack>             
        </div>

        <div className="divKryesor">
            <Stack direction='row' spacing={2}>
                <TextField label='Small secondary' size="small" color="secondary"></TextField>
            </Stack>            
        </div>
       
        <div className="divKryesor">
            <Stack direction='row' spacing={2}>
                <TextField label='Form input' required></TextField>
                <TextField label='Password' type="password" helperText='mos e shkembe fjalen'></TextField>
                <TextField label='Read only' InputProps={{readOnly: true}}></TextField>
            </Stack>
        </div>

        <div className="divKryesor">
            <Stack direction='row' spacing={2}>
                <TextField 
                    label='Amount' 
                    InputProps={{ 
                        startAdornment : <InputAdornment position="start"> $ </InputAdornment>
                    }}>
                </TextField>
            
                <TextField 
                    label='Weight' 
                    InputProps={{ 
                        endAdornment : <InputAdornment position="end"> kg </InputAdornment>
                    }}>
                </TextField>    
            </Stack>
        </div>

        <div className="divKryesor">
            <Stack direction='row' spacing={2}>
                <TextField 
                    label='Form input'
                    required
                    value={vlera}
                    onChange={e => setvlera(e.target.value)}
                    error = {!vlera}
                    helperText= {vlera ? 'Required' : 'Dont share'}
                >

                </TextField>
            </Stack>
        </div>
    </div>

  )
}

export default MuiTextField
