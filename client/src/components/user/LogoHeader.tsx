import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export default function LogoHeader() {
    return (
        <Box sx={{backgroundColor:"#b80000"}}>
            <Container sx={{paddingY:"12px"}}>
                <Typography sx={{fontSize:"28px",color:"white",fontWeight:"700"}}>مجلتي</Typography>
            </Container>
        </Box>
    )
}
