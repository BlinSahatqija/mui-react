import React from 'react'
import {Stack, Link, Typography} from '@mui/material'

const MuiLink = () => {
    return(
        <Stack spacing = {2} direction = 'row' m = {4}>
            <Link href= 'https://www.google.com'>
                Link
            </Link>
            <Typography variant='h5'>
                <Link href= '#' color='secondary'>Linku i dyte</Link>
            </Typography>

            <Link href='#' color='error' underline= 'hover'>Linku i trete</Link>
            <Link href='#' color='info' underline= 'none'>Linku i katert</Link>
        </Stack>
    )
}

export default MuiLink
