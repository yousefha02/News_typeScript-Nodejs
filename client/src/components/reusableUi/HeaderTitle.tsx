import React from 'react'
import {Box,Typography} from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

type props = {
    title:String
}

export default function HeaderTitle({title}:props) {
    return (
        <Box sx={{display:"flex",alignItems:"center",columnGap:"16px",marginBottom:"32px"}}>
            <Box className="header-title" sx={{position:"relative"}}>
                <Typography sx={{fontSize:"22px",fontWeight:"700",marginLeft:"12px"}}>{title}</Typography>
            </Box>
            <ArrowBackIosNewIcon sx={{fontSize:"18px"}}/>
        </Box>
    )
}
