import { Avatar, Box, Stack, Typography , Tooltip , IconButton } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

export default function AdminOpinionBox() {
    return (
        <Box sx={{backgroundColor:"#cfdde233",padding:"16px"}}>
            <Typography sx={{fontSize:"17px",marginBottom:"24px",fontWeight:"700"}}
                >أسباب موضوعية للذهب 
            </Typography>   
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                <Box sx={{display:"flex",alignItems:"center",columnGap:"12px"}}>
                    <Avatar sx={{width:"45px",height:"45px"}} src="https://mui.com/static/images/avatar/1.jpg"/>    
                    <Typography sx={{color:"#41798c",fontSize:"15px"}}>يوسف أبوهاني</Typography>
                </Box>
                <Stack direction={"row"}>
                    <Link to={'/admin/opinions/edit/1'}>
                        <Tooltip title="تعديل">
                            <IconButton sx={{minWidth:"10px"}} color="info">
                                <EditIcon sx={{fontSize:"20px"}}/>
                            </IconButton>
                        </Tooltip>
                    </Link>
                    <Tooltip title="حذف">
                        <IconButton sx={{minWidth:"10px"}} color="error">
                            <DeleteOutlineIcon sx={{fontSize:"20px"}}/>
                        </IconButton>
                    </Tooltip>
                </Stack>
            </Stack>
        </Box>
    )
}
