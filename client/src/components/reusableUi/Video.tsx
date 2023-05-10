import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

export default function Video() {
    return (
        <Paper>
            <ReactPlayer url="https://www.youtube.com/watch?v=38M_OB9mAN0" width="100%" height={150}/>
            <Box sx={{padding:"0px 8px 16px"}}>
                <Link to="/videos/1">
                    <Typography sx={{marginTop:"12px",fontWeight:"700",fontSize:"15px"}}>ملف الهجرة يوتر العلاقات بين فرنسا و إيطاليا</Typography>
                </Link>
            </Box>
        </Paper>
    )
}
