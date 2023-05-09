import React from 'react'
import {Container, Grid} from '@mui/material'
import Opinion from '../../reusableUi/Opinion'
import HeaderTitle from '../../reusableUi/HeaderTitle'

export default function Opinions() {
    return (
        <Container sx={{marginY:"40px"}}>
            <HeaderTitle title="آراء"/>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={3}><Opinion/></Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}><Opinion/></Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}><Opinion/></Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}><Opinion/></Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}><Opinion/></Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}><Opinion/></Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}><Opinion/></Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}><Opinion/></Grid>
            </Grid>
        </Container>
    )
}
