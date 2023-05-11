import { Grid } from '@mui/material'
import React from 'react'
import AdminAuthorBox from './AuthorBox'

function AdminViewAuthors() {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <AdminAuthorBox/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <AdminAuthorBox/>        
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <AdminAuthorBox/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <AdminAuthorBox/>
        </Grid>
    </Grid>
  )
}

export default AdminViewAuthors