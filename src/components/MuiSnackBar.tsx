import React, {useState} from 'react'
import { Snackbar, Alert, AlertProps, Button } from '@mui/material'


const MuiSnackBar = () => {
    const [open, setOpen] = useState(false);

    const handleClose=()=>{
        setOpen(false)
    }
  return (
    <>
        <Button onClick={()=>setOpen(true)}>Submit</Button>

        <Snackbar
        message='Form submitted successfully'
        autoHideDuration={4000}
        open = {open}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
        }}></Snackbar>
    </>
  )
}

export default MuiSnackBar
