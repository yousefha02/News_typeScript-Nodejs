import React from 'react'
import Layout from '../../components/user/Layout'
import {Container,Grid} from '@mui/material'
import HeaderTitle from '../../components/reusableUi/HeaderTitle'
import Video from '../../components/reusableUi/Video'

export default function Videos() {
    return (
        <Layout>
            <Container sx={{marginY:"40px"}}>
                <HeaderTitle title="فيديو"/>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={3}><Video/></Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}><Video/></Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}><Video/></Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}><Video/></Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}><Video/></Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}><Video/></Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}><Video/></Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}><Video/></Grid>
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
