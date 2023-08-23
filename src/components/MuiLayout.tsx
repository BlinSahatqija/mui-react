import React, {useState} from 'react'
import {Box, Stack, Divider, Grid, Paper} from '@mui/material'

const MuiLayout = () => {
  return (
    <Paper elevation={10} sx = {{
        padding: '50px'
    }}>
        <Stack
        sx = {{
            border: '1px solid'
        }}
        // direction='row'
        // direction='row-reverse'
        direction='row'
        spacing={2}
        divider = {<Divider orientation='vertical' flexItem/>}
        >
            <Box
                sx = {{
                    backgroundColor: 'secondary.main',
                    color: 'white',
                    height: '100px',
                    width: '100px',
                    padding: '16px',
                    marginBottom: '1px',
                    transition: '0.5s ease',
                    '&:hover':{
                        backgroundColor: 'primary.light',
                        padding: '26px',
                    }
                }}
            >
            hello
            </Box>
                <Box
                sx = {{
                    backgroundColor: 'primary.light',
                    color: 'white',
                    height: '100px',
                    width: '100px',
                    padding: '16px',
                    marginBottom: '1px',
                    transition: '0.5s ease',
                
                    '&:hover':{
                        backgroundColor: 'secondary.main',
                        padding: '26px',
                    }
                }}
            >
            hello
            </Box>
            <Box
                display='flex'
                height='100px'
                width='100px'
                bgcolor='success.light'
                p={2} 
                color='white'
            >
                hello
            </Box>
            
        </Stack>

        <Grid
            container
            my={4}
            spacing={5}
            rowSpacing={2}
            columnSpacing={1}
        >
            <Grid item xs = {12} sm = {6}>
                <Box bgcolor='primary.light' p = {2}>
                    Item 1
                </Box>
            </Grid>
            
            <Grid item xs = {12} sm = {6}>
                <Box bgcolor='secondary.light' p = {2}>
                    Item 2
                </Box>
            </Grid>
            <Grid item xs = {12} sm = {6}>
                <Box bgcolor='success.light' p = {2}>
                    Item 3
                </Box>
            </Grid>
            <Grid item xs = {12} sm = {6}>
                <Box bgcolor='warning.light' p = {2}>
                    Item 4
                </Box>
            </Grid>
        </Grid>
    </Paper>
  )
}

export default MuiLayout
