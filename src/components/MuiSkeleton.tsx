import React, {useState, useEffect} from 'react'
import { Stack, Skeleton, Box, Avatar, Typography } from '@mui/material'

const MuiSkeleton = () => {

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
    }, [])

  return (
    // <Stack spacing={1} width="250px" className='skeleton'>
    //   <Skeleton variant='text'/>
    //   <Skeleton variant='circular' width={40} height={40} animation={false}/>
    //   <Skeleton variant='rectangular' width={250} height={125} animation='wave' />
    // </Stack>

    <Box sx={{width:'250px'}} className='skeleton'>
        {
            loading ? (
                <Skeleton variant='rectangular' width={256} height={144} animation='wave'/>

                ) : (
                    <img src='https://source.unsplash.com/random/256x144' alt='skeleton'/>
                )
        }
    </Box>
  )
}

export default MuiSkeleton
