import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Opinion() {
    return (
        <Box sx={{backgroundColor:"#cfdde233",padding:"16px"}}>
            <Typography sx={{fontSize:"18px",marginBottom:"24px",fontWeight:"700"}}
                >أسباب موضوعية للذهب 
            </Typography>   
            <Link to="/authors/yousef">
                <Box sx={{display:"flex",alignItems:"center",columnGap:"12px"}}>
                    <Avatar sx={{width:"50px",height:"50px"}} src="https://mui.com/static/images/avatar/1.jpg"/>    
                    <Typography sx={{color:"#41798c",fontSize:"15px"}}>يوسف أبوهاني</Typography>
                </Box>
            </Link>
        </Box>
    )
}
