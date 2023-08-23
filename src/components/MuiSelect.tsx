import React, {useState} from 'react'
import {Box, TextField, MenuItem} from '@mui/material'

const MuiSelect = () => {
    const [countries, setCountries] = useState<string[]>([]);
    console.log({countries})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const teksti = e.target.value
        setCountries(typeof teksti === 'string' ? teksti.split(',') : teksti)
    }
  return (
    <div className='mainDiv'>
        <Box width='50%'>
            <TextField
                label='Select Country'
                select
                fullWidth
                value={countries}
                onChange={handleChange}
                SelectProps={{
                    multiple: true
                }}
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
