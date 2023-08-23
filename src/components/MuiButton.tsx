import React from 'react'
import {Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton} from "@mui/material"
import SendIcon from '@mui/icons-material/Send'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'

import {useState} from 'react'

const MuiButton = () => {
    const [formats, setFormats] = useState<string[]>([]);
    const handleFormatChange=(_event: React.MouseEvent<HTMLElement>, updatedFormats:string[])=>{
        setFormats(updatedFormats)
    }
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <Button variant='text' href='#'>Kliko</Button>
            <Button variant='contained' href='#'>Contained</Button>
            <Button variant='outlined' href='#'>Outlined</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='contained' color='primary'>primary</Button>
            <Button variant='contained' color='secondary'>secondary</Button>
            <Button variant='outlined' color='error'>eror</Button>
            <Button variant='outlined' color='warning'>warnign</Button>
            <Button variant='outlined' color='info'>info</Button>
            <Button variant='outlined' color='success'>success</Button>
        </Stack>

        <Stack display='block' spacing={2} direction='row'>
            <Button variant='contained' size='small'>small</Button>
            <Button variant='contained' size='medium'>medium</Button>
            <Button variant='contained' size='large'>larg</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='contained' startIcon={<SendIcon/>} onClick={()=>alert('clicked')}>clicked</Button>
            <Button variant='contained' endIcon={<SendIcon/>}>Send</Button>

            <IconButton aria-label='send' color='success' size='small'>
                <SendIcon/>
            </IconButton>
        </Stack>

        <Stack direction='row'>
            <ToggleButtonGroup
            aria-label='text formating'
            value={formats}
            onChange={handleFormatChange}
            size='small'
            color='info'
            />
        </Stack>
    </Stack>
  )
}

export default MuiButton
