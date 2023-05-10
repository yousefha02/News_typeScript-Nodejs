import React from 'react'
import {Container, Grid} from '@mui/material'
import Opinion from '../../reusableUi/Opinion'
import HeaderTitle from '../../reusableUi/HeaderTitle'
import { Link } from 'react-router-dom'

export default function Opinions() {
    return (
        <Container sx={{marginY:"40px"}}>
            <Link to="/opinions"><HeaderTitle title="آراء"/></Link>
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
