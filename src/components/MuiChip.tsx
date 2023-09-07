import React, {useState} from 'react'
import { Stack, Chip, Avatar } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'

const MuiChip = () => {
    const [chips, setChips] = useState(['Chip1','Chip2','Chip3']);

    const handleDelete = (chipToDelete: string)=>{
        setChips(chips => chips.filter(chip => chip !== chipToDelete))
    }
  return (
    
    <Stack direction='row' spacing={1} className='Chip1'>
        <Chip label='Chip' color='primary' size='small' icon={<FaceIcon/>}/>

        <Chip label='Chip outlined' color='success' size='small' variant='outlined' avatar={<Avatar>V</Avatar>}/>

        <Chip label='Click' color='info' onClick={()=> alert('Eshte klikuar')}/>

        <Chip label='Delete' color='error' onClick={()=>alert('Eshte klikuar brenda chip')} onDelete={()=>alert('Eshte klikuar X')}/>

        
        {
            chips.map(chip => (
                <Chip key={chip} label={chip} onDelete = {() => handleDelete(chip)} />
            ))
        }
    </Stack>
    

  )
}

export default MuiChip
