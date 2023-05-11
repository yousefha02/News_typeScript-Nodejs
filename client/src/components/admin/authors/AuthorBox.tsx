import { Avatar, Box, IconButton, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';

export default function AdminAuthorBox() {
    return (
        <Box sx={{backgroundColor:"#cfdde233",padding:"16px" , width:"100%"}}>
            <Box sx={{display:"flex" , alignItems:"center" , justifyContent:"space-between"}}>
                <Box sx={{display:"flex",alignItems:"center",columnGap:"12px"}}>
                    <Avatar sx={{width:"50px",height:"50px"}} src="https://mui.com/static/images/avatar/1.jpg"/>    
                    <Typography sx={{color:"#41798c",fontSize:"15px"}}>يوسف أبوهاني</Typography>
                </Box>
                <Link to={'/admin/authors/edit/1'}>
                    <Tooltip title="تعديل">
                        <IconButton sx={{minWidth:"10px"}} color="info">
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                </Link>
            </Box>
            <Typography sx={{fontSize:"14px",marginTop:"12px",fontWeight:"500"}}>
                وصف مختصر عن المؤلف
            </Typography>   
        </Box>
    )
}
