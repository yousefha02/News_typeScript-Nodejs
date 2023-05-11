import React from 'react'
import Layout from '../../components/user/Layout'
import { Container,Typography,Box,Grid } from '@mui/material'
import ReactPlayer from 'react-player'
import HeaderTitle from '../../components/reusableUi/HeaderTitle'
import Video from '../../components/reusableUi/Video'

export default function SingleVideo() {
    return (
        <Layout>
            <Container sx={{marginY:"40px"}}>
                <Box sx={{width:"70%",margin:"auto"}}>
                    <ReactPlayer url="https://www.youtube.com/watch?v=38M_OB9mAN0" width="100%" height={400}/>
                </Box>
                <Typography sx={{marginTop:"24px",marginBottom:"80px",textAlign:"center",fontWeight:"800",fontSize:"22px"}}
                    >ملف الهجرة يوتر العلاقات بين فرنسا و إيطاليا
                </Typography>
                <HeaderTitle title="فيديوهات آخرى"/>
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
        </Layout>
    )
}
