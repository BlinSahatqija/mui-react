import React, {useState} from 'react'
import {Box, Paper, Card, CardContent, Typography, CardActions, Button, CardMedia} from '@mui/material'

const MuiCard = () => {
  return (
 
        <Box width= '300px'>
            <Card>
                <CardMedia
                    component= 'img'
                    width='120'
                    image='https://source.unsplash.com/random'
                    alt='card img'
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        React
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        React is a JS framework.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Share</Button>
                    <Button size='small'>Learn More</Button>
                </CardActions>
            </Card>            
        </Box>

  )
}

export default MuiCard
