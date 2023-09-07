import React from 'react'
import { Stack, CircularProgress, LinearProgress } from '@mui/material'


const MuiProgress = () => {

  return (
    <Stack spacing={2}>
        <div>
           <CircularProgress/> 
           Loading...
        </div>
        
        <CircularProgress color='success'/>
        <CircularProgress variant='determinate' value={60}/>

        <LinearProgress/>
        <LinearProgress color='success' sx={{maxWidth: '300px'}}/>
        <LinearProgress variant='determinate' value={60}/>
    </Stack>
  )
}

export default MuiProgress
