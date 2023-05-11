import { Box, IconButton, Paper, Stack, Tooltip, Typography, styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

const Image = styled('img')({
    width:"100%",
    maxWidth:"100%"
});

type NewProps = {
    isAdmin?:boolean
}

export default function NewBox({isAdmin}:NewProps) {
    return (
        <Paper sx={{overflow:"hidden"}}>
            <Image src={'https://images.skynewsarabia.com/images/v1/2023/05/05/1618319/1100/619/1-1618319.jpg'}/>
            <Box sx={{padding:"0px 8px 10px"}}>
                <Link to="/news/1">
                    <Typography sx={{marginTop:"12px",fontWeight:"700",fontSize:"15px"}}>ملف الهجرة يوتر العلاقات بين فرنسا و إيطاليا</Typography>
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
