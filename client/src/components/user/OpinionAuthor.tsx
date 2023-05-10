import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function OpinionAuthor() {
    return (
        <Link to="/opinon/:id">
            <Box sx={{backgroundColor:"#cfdde233",padding:"16px"}}>
                <Typography sx={{fontSize:"24px",fontWeight:"600",marginBottom:"16px"}}>العراء بانتظارنا</Typography>
                <Typography sx={{fontSize:"15px"}}>ستمر الإنسانية هذا العام بواحدة من أخطر المراحل في تاريخها، حيث ستتضاءل فيها الحاجة إلى الإنسان، وسيزيد الاعتماد على الآلة، وتحكمها بكل مجريات حياتنا، بعد أن كنا المتحكمين، حيث ستكون لها قدرات إبداع...</Typography>
            </Box>
        </Link>
    )
}
