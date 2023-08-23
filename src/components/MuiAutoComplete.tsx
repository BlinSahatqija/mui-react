import React, {useState} from 'react'
import {Box, Stack, Autocomplete, TextField} from '@mui/material'


const skills = ['HTML', 'CSS', 'JS']

type Skill = {
    id: number,
    label: string
}

const skillsOptions = skills.map((skill, index) =>({
    id: index +1,
    label: skill
}))

const MuiAutoComplete = () => {
    const [vlera, setVlera] = useState<string | null>(null);
    const [lloji, setLloji] = useState<Skill | null>(null);
    // console.log({vlera})
    console.log({lloji})
  return (
    <Stack className='mainDiv' spacing={2} width='250px'>
        <Autocomplete 
            options={skills}
            renderInput={(params) => <TextField {...params} label='Skills'/>}
            value={vlera}
            onChange={(event: any, vleraRe: string | null)=> setVlera(vleraRe)}
        />

        <Autocomplete
            options={skillsOptions}
            renderInput={(params) => <TextField {...params} label='Skills Options'/>}
            value={lloji}
            onChange={(event: any, vleraRe: Skill | null)=> setLloji(vleraRe)}
        />
    </Stack>
  )
}

export default MuiAutoComplete
