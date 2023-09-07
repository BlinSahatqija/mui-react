import React, {useState} from 'react'
import { Stack, Alert, AlertTitle, Button } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import IconButton from '@mui/material/IconButton';

const MuiAlert = () => {
    const [showAlert, setShowAlert] = useState(false);


    const [showAlert2, setShowAlert2] = useState(true);

    const handleButtonClick = () => {
        setShowAlert(true);
    
        setTimeout(() => {
          setShowAlert(false);
        }, 3000); // 3000 milliseconds = 3 seconds
      };


  return (
    <Stack spacing={2}>
        <Alert severity='error'>This is an error alert</Alert>
        <Alert severity='warning'>This is a warning alert</Alert>
        <Alert severity='info'>This is an info alert</Alert>
        <Alert severity='success'>This is a success alert</Alert>

        <Alert variant='outlined' severity='error'>This is an error alert</Alert>
        <Alert variant='outlined' severity='warning'>This is a warning alert</Alert>
        <Alert variant='outlined' severity='info'>This is an info alert</Alert>
        <Alert variant='outlined' severity='success'>This is a success alert</Alert>


        {/* <Alert variant='filled' severity='error' onClose={()=> alert('eshte klikuaar')} >
            <AlertTitle>Error</AlertTitle>
            This is an error alert
        </Alert> */}

        <Button onClick={handleButtonClick}>teste</Button>
        <Alert variant='filled' severity='error' sx={{display: showAlert ? "" : "none"}} onClose={()=>setShowAlert(false)} >
          <AlertTitle>Error</AlertTitle>
          This is an error alert
        </Alert>





        <Alert 
            variant='filled' 
            severity='warning'   
            sx={{display: showAlert2 ? "" : "none"}} 
            action={
                <Button onClick={()=>setShowAlert2(false)} color="inherit" size="small">
                    Mbylle
                </Button>
            }
            icon = {<CheckIcon fontSize='inherit'/>}
        >
            <AlertTitle>Warning</AlertTitle>
            This is a warning alert    
        </Alert>

        <Alert variant='filled' severity='info'>
            <AlertTitle>Warning</AlertTitle>
            This is an info alert
        </Alert>
        <Alert variant='filled' severity='success'>        
            <AlertTitle>Warning</AlertTitle>
            This is a success alert
        </Alert>

    </Stack>
  )
}

export default MuiAlert
