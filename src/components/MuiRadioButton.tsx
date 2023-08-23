import React, {useState} from 'react'
import {Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from '@mui/material'


const MuiRadioButton = () => {
    const [vlera, setVlera] = useState('');
    console.log(vlera)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setVlera(e.target.value)
    }

  return (
    <div className='mainDiv'>
      <Box>
        <FormControl>
            <FormLabel id='job-expreience-group-label'>Years of experience</FormLabel>
            <RadioGroup 
                name='job-experience-group'
                aria-labelledby='job-expreience-group-label'
                value={vlera}
                onChange={handleChange}
            >
                <FormControlLabel control={<Radio color='success'></Radio>} label="0-2" value='0-2'></FormControlLabel>
                <FormControlLabel control={<Radio></Radio>} label="3-5" value='3-5'></FormControlLabel>
                <FormControlLabel control={<Radio></Radio>} label="0-10" value='0-10'></FormControlLabel>
            </RadioGroup>
        </FormControl>
      </Box>
    </div>
  )
}

export default MuiRadioButton
