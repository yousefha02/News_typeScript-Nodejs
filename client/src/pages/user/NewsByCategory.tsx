import React from 'react'
import Layout from '../../components/user/Layout'
import {Container,Grid} from '@mui/material'
import HeaderTitle from '../../components/reusableUi/HeaderTitle'
import NewBox from '../../components/reusableUi/NewBos'

export default function NewsByCategory() {
    return (
        <Layout>
            <Container sx={{marginY:"40px"}}>
                <HeaderTitle title="السياسية"/>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={3}><NewBox/></Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}><NewBox/></Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}><NewBox/></Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}><NewBox/></Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}><NewBox/></Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}><NewBox/></Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}><NewBox/></Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}><NewBox/></Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}><NewBox/></Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}><NewBox/></Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}><NewBox/></Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}><NewBox/></Grid>
                </Grid>
            </Container>
        </Layout>
    )
}
