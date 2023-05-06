import { Container, Grid } from '@mui/material'
import React from 'react'
import MainNewBox from './MainNewBox'

export default function MainNews() {
    return (
        <Container sx={{marginY:"30px",overflow:"hidden"}}>
            <Grid container spacing={3}>
                <Grid container spacing={3} item xs={13}>
                    <Grid item spacing={3} xs={6}><MainNewBox big={true}/></Grid>
                    <Grid container spacing={3} item xs={6}>
                        <Grid item xs={6}><MainNewBox/></Grid>
                        <Grid item xs={6}><MainNewBox/></Grid>
                        <Grid item xs={6}><MainNewBox/></Grid>
                        <Grid item xs={6}><MainNewBox/></Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={3} item xs={12}>
                    <Grid item xs={3}><MainNewBox/></Grid>
                    <Grid item xs={3}><MainNewBox/></Grid>
                    <Grid item xs={3}><MainNewBox/></Grid>
                    <Grid item xs={3}><MainNewBox/></Grid>
                </Grid>
            </Grid>
        </Container>
    )
}