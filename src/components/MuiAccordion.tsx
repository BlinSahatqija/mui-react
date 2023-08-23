import React from 'react'
import {Accordion, AccordionSummary, AccordionDetails, Typography} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {useState} from 'react'

const MuiAccordion = () => {

    const [expand, setExpand] = useState<string | false>(false);

  return (
    <div>
      <Accordion>
        <AccordionSummary
            id='panel1-header'
            aria-controls='panel1-content'
            expandIcon = {<ExpandMoreIcon/>}
        >
            <Typography>
                Summary
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, est. Laborum voluptas totam atque sapiente dicta nisi exercitationem! Veniam eius alias cum repellendus ipsa minus tenetur accusamus nobis ex incidunt!
            </Typography>
        </AccordionDetails>
      </Accordion>
    <br></br>
      <Accordion>
        <AccordionSummary
            id='panel2-header'
            aria-controls='panel2-content'
            expandIcon = {<ExpandMoreIcon/>}
        >
            <Typography>
                Summary2
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, est. Laborum voluptas totam atque sapiente dicta nisi exercitationem! Veniam eius alias cum repellendus ipsa minus tenetur accusamus nobis ex incidunt!
            </Typography>
        </AccordionDetails>
      </Accordion>
      <br></br>
      <Accordion>
        <AccordionSummary
            id='panel3-header'
            aria-controls='panel3-content'
            expandIcon = {<ExpandMoreIcon/>}
        >
            <Typography>
                Summary3
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, est. Laborum voluptas totam atque sapiente dicta nisi exercitationem! Veniam eius alias cum repellendus ipsa minus tenetur accusamus nobis ex incidunt!
            </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default MuiAccordion
