import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Opinion } from '../../types/Opinion'

type Props = {
    opinion : Opinion
}

export default function OpinionAuthor({opinion}: Props) {
    return (
        <Link to="/opinon/:id">
            <Box sx={{backgroundColor:"#cfdde233",padding:"16px"}}>
                <Typography sx={{fontSize:"24px",fontWeight:"600",marginBottom:"16px"}}>{opinion.title}</Typography>
                <Typography sx={{fontSize:"15px"}}>{opinion.description?.slice(0,250)}</Typography>
            </Box>
        </Link>
    )
}
