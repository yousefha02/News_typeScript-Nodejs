import { Grid } from '@mui/material'
import React from 'react'
import CategoryBox from './CategoryBox'

function AllCategories() {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}><CategoryBox/></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}><CategoryBox/></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}><CategoryBox/></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}><CategoryBox/></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}><CategoryBox/></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}><CategoryBox/></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}><CategoryBox/></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}><CategoryBox/></Grid>
    </Grid>
  )
}

export default AllCategories