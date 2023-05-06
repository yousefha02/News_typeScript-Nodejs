import { Box, Container, Divider, Typography } from '@mui/material'
import React from 'react'

export default function Navbar() {
    return (
        <Box>
            <Container sx={{paddingY:"6px",overflowX:"auto",width:"100%",marginY:"6px"}}>
                <Box sx={{display:"flex",columnGap:"28px",width:"700px"}}>
                    <Typography>الرئيسية</Typography>
                    <Typography>الرئيسية</Typography>
                    <Typography>الرئيسية</Typography>
                    <Typography>الرئيسية</Typography>
                    <Typography>الرئيسية</Typography>
                    <Typography>الرئيسية</Typography>
                    <Typography>الرئيسية</Typography>
                    <Typography>الرئيسية</Typography>
                    <Typography>الرئيسية</Typography>
                    <Typography>الرئيسية</Typography>
                    <Typography>الرئيسية</Typography>
                </Box>
            </Container>
            <Divider/>
        </Box>
    )
}