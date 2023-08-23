import React from 'react'
import {Stack, Avatar, AvatarGroup} from '@mui/material'

const MuiAvatar = () => {
  return (
    <>
    <Stack spacing={4} p={2} className='Avatar1'>
        <Stack direction='row' spacing={1}>
            <Avatar sx={{bgcolor:'primary.light'}}>BT</Avatar>
            <Avatar sx={{bgcolor:'success.light'}}>GE</Avatar>
        </Stack>

        <AvatarGroup>
            <Stack direction='row' spacing={1}>
                <Avatar src='https://randomuser.me/api/portraits/men/45.jpg' alt='John'/>
                <Avatar src='https://randomuser.me/api/portraits/women/64.jpg' alt='Melisa'/>
            </Stack>   
        </AvatarGroup>

        <Stack direction='row' spacing={1}>
            <Avatar variant='square' onClick = {() => alert('Prsh')} sx={{bgcolor:'prmary.light', width: 48, height:48}}/>
            <Avatar variant='rounded' sx={{bgcolor:'success.light', width: 48, height:48}}/>
        </Stack>
    </Stack>


    </>
  )
}

export default MuiAvatar
