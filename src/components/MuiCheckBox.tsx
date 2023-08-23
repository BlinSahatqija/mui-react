import React, {useState} from 'react'
import {Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup} from '@mui/material'

import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'


const MuiCheckBox = () => {
    const [acceptTnC, setAcceptTnC] = useState(false);

    const [skills, setSkills] = useState<String[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setAcceptTnC(e.target.checked)
    }

     const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const index = skills.indexOf(e.target.value)
        if(index === -1){
            setSkills([...skills, e.target.value])
        }else{
            setSkills(skills.filter((skill) => skill !== e.target.value))
        }
     }

    console.log(acceptTnC)
    console.log([skills])

  return (
    <div className='mainDiv'>
      <Box>
        <FormControlLabel
            label= 'I accept terms and conditions'
            control={<Checkbox checked = {acceptTnC} onChange={handleChange}/>}/>
      </Box>
      
      <Box>
        <Checkbox
            icon ={<BookmarkBorderIcon/>}
            checkedIcon={<BookmarkIcon/>}
            checked={acceptTnC}
            onChange={handleChange}
        />
      </Box>

      <Box>
        <FormControl>
          <FormLabel>SKills</FormLabel>
          <FormGroup>
              <FormControlLabel 
              label='HTML'
              control={<Checkbox value='html' checked={skills.includes('html')} onChange={handleSkillChange}/>}
              />
              <FormControlLabel 
              label='CSS'
              control={<Checkbox value='css' checked={skills.includes('css')} onChange={handleSkillChange}/>}
              />
              <FormControlLabel 
              label='Javascript'
              control={<Checkbox value='javascript' checked={skills.includes('javascript')} onChange={handleSkillChange}/>}
              />
          </FormGroup>
        </FormControl>
      </Box>
    </div>
  )
}

export default MuiCheckBox
