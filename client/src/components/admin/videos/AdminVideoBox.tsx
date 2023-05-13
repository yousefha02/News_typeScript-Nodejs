import { Box, Divider, Grid, IconButton, Tooltip, Typography } from '@mui/material'
import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ReactPlayer from 'react-player'

function AdminVideoBox() {
  return (
    <>
    <Grid container justifyContent={"space-between"} spacing={1}>
        <Grid item xs={11}>
            <ReactPlayer url="https://www.youtube.com/watch?v=38M_OB9mAN0" width="100%" height={250}/>
            <Box sx={{padding:"0px 8px 16px"}}>
                <Typography sx={{marginTop:"12px",fontWeight:"700",fontSize:"15px"}}>ملف الهجرة يوتر العلاقات بين فرنسا و إيطاليا</Typography>
            </Box>
        </Grid>
        <Grid item xs={1}>
            <Tooltip title="حذف">
                <IconButton sx={{minWidth:"10px"}} color="error">
                    <DeleteOutlineIcon />
                </IconButton>
            </Tooltip>
        </Grid>
    </Grid>
    <Divider sx={{marginBottom:"30px"}}/>
    </>
  )
}

export default AdminVideoBox