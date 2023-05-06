import { Box, Grid } from '@mui/material'
import React from 'react'
import DetailsNewBox from './DetailsNewBox'

export default function LastNews() {
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}><DetailsNewBox/></Grid>
                <Grid item xs={12} md={6}><DetailsNewBox/></Grid>
                <Grid item xs={12} md={6}><DetailsNewBox/></Grid>
                <Grid item xs={12} md={6}><DetailsNewBox/></Grid>
                <Grid item xs={12} md={6}><DetailsNewBox/></Grid>
                <Grid item xs={12} md={6}><DetailsNewBox/></Grid>
            </Grid>
        </Box>
    )
}
