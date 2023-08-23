import React, {useState} from 'react'
import {Box, TextField, MenuItem} from '@mui/material'

const MuiSelect = () => {
    const [country, setCountry] = useState('');
        console.log({country})
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value as string)

    }
  return (
    <div className='mainDiv'>
        <Box width='25%'>
            <TextField
                label='Select Country'
                select
                fullWidth
                value={country}
                onChange={handleChange}
            >
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='DE'>Germany</MenuItem>
                <MenuItem value='AU'>Australia</MenuItem>
            </TextField>
        </Box>
    </div>
    
  )
}

export default MuiSelect
