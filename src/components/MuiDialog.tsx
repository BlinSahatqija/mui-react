import React, {useState} from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'


const MuiDialog = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={()=> setOpen(true)}>Open Dialog</Button>
    
        <Dialog open = {open} onClose={()=>setOpen(false)} aria-labelledby='dialog' aria-describedby='dialog-description'>
            <DialogTitle id='dialog-title'>
                Submit the test
            </DialogTitle>

            <DialogContent id='dialog-content'>
                <DialogContentText>Are you sure you want to submit the test?</DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={()=> setOpen(false)}>Cancel</Button>
                <Button autoFocus onClick={()=> setOpen(false)}>Save</Button>
            </DialogActions>
        </Dialog>
    </>
  )
}

export default MuiDialog
