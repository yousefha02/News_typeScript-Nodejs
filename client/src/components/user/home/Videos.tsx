import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import HeaderTitle from '../../reusableUi/HeaderTitle'
import Video from '../../reusableUi/Video'
import { Link } from 'react-router-dom'

export default function Videos() {
    return (
        <Box sx={{backgroundColor:"#f7f7f9",paddingBottom:"20px",paddingTop:"30px",marginY:"40px"}}>
            <Container>
                <Link to="/videos"><HeaderTitle title="فيديو"/></Link>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={3}><Video/></Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}><Video/></Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}><Video/></Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}><Video/></Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}><Video/></Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}><Video/></Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}><Video/></Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}><Video/></Grid>
                </Grid>
            </Container>
        </Box>
    )
}
