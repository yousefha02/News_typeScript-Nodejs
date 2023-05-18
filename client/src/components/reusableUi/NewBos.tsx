import { Box, IconButton, Paper, Stack, Tooltip, Typography, styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { New } from '../../types/News';

const Image = styled('img')({
    width:"100%",
    maxWidth:"100%",
    height:"200px",
    objectFit:"fill"
});

type NewProps = {
    isAdmin?:boolean
    news?:New
}

export default function NewBox({isAdmin, news}:NewProps) {
    return (
        <Paper sx={{overflow:"hidden"}}>
            <Image src={`${process.env.REACT_APP_API_KEY}/images/${news?.image}`}/>
            <Box sx={{padding:"0px 8px 10px"}}>
                <Link to="/news/1">
                    <Typography sx={{marginTop:"12px",fontWeight:"700",fontSize:"15px"}}>{news?.title}</Typography>
                </Link>
            </Box>
            {
                isAdmin &&
                <Stack direction={"row"} paddingBottom={"12px"}>
                    <Link to={'/admin/news/edit/1'}>
                        <Tooltip title="تعديل">
                            <IconButton sx={{minWidth:"10px"}} color="info">
                                <EditIcon />
                            </IconButton>
                        </Tooltip>
                    </Link>
                    <Tooltip title="حذف">
                        <IconButton sx={{minWidth:"10px"}} color="error">
                            <DeleteOutlineIcon />
                        </IconButton>
                    </Tooltip>
                </Stack>
            }
        </Paper>
    )
}
