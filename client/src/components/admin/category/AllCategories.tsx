import { Grid } from '@mui/material'
import React from 'react'
import CategoryBox from './CategoryBox'
import { useCategories } from '../../../hooks/useCategories'

function AllCategories() {
  const {data , isLoading} = useCategories();
  
  
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