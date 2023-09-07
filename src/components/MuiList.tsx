import React from 'react'
import {Stack, Box, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, ListItemButton, Divider} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

const MuiList = () => {
  return (
    <Stack className='List1'>
      <Box sx={{width: '400px', bgcolor:'#efefef'}}>
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <MailIcon/>
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary='List Item1' secondary='Secondary text'/>
                </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <MailIcon/>
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary='List Item2' secondary='Secondary text'/>
                </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <MailIcon/>
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary='List Item3' secondary='Secondary text'/>
                </ListItemButton>
            </ListItem>
        </List>
      </Box>
    </Stack>
  )
}

export default MuiList
