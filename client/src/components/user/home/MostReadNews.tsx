import { Box, Grid } from '@mui/material'
import React from 'react'
import DetailsNewBox from './DetailsNewBox'

export default function MostReadNews() {
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={6}><DetailsNewBox views={true}/></Grid>
                <Grid item xs={6}><DetailsNewBox views={true}/></Grid>
                <Grid item xs={6}><DetailsNewBox views={true}/></Grid>
                <Grid item xs={6}><DetailsNewBox views={true}/></Grid>
                <Grid item xs={6}><DetailsNewBox views={true}/></Grid>
                <Grid item xs={6}><DetailsNewBox views={true}/></Grid>
            </Grid>
        </Box>
    )
}
