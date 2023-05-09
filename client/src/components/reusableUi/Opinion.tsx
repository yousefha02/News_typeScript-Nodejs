import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'

export default function Opinion() {
    return (
        <Box sx={{backgroundColor:"#cfdde233",padding:"16px"}}>
            <Typography sx={{fontSize:"18px",marginBottom:"16px",fontWeight:"700"}}
                >أسباب موضوعية للذهب 
            </Typography>   
            <Box sx={{display:"flex",alignItems:"center",columnGap:"12px"}}>
                <Avatar sx={{width:"55px",height:"55px"}} src="https://mui.com/static/images/avatar/1.jpg"/>    
                <Typography sx={{color:"#41798c",fontSize:"15px"}}>يوسف أبوهاني</Typography>
            </Box>
        </Box>
    )
}
