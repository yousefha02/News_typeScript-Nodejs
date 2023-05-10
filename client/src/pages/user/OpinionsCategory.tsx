import React from 'react'
import Layout from '../../components/user/Layout'
import HeaderTitle from '../../components/reusableUi/HeaderTitle'
import { Box, Container, Grid } from '@mui/material'
import Opinion from '../../components/reusableUi/Opinion'
import { Link } from 'react-router-dom'

export default function OpinionsCategory() {
    return (
        <Layout>
            <Container sx={{marginY:"40px"}}>
                <Box>
                    <HeaderTitle title="آراء سياسية"/>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4} lg={3}><Opinion/></Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}><Opinion/></Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}><Opinion/></Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}><Opinion/></Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}><Opinion/></Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}><Opinion/></Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}><Opinion/></Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}><Opinion/></Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}><Opinion/></Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}><Opinion/></Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}><Opinion/></Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}><Opinion/></Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}><Opinion/></Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}><Opinion/></Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}><Opinion/></Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}><Opinion/></Grid>
                    </Grid>
                </Box>
            </Container>
        </Layout>
    )
}
