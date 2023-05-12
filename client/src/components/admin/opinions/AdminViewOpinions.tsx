import { Grid } from '@mui/material'
import React from 'react'
import AdminOpinionBox from './AdminOpinionBox'

function AdminViewOpinions() {
  return (
    <Grid container spacing={2}>
        <Grid item sm={6} md={4} lg={3}>
            <AdminOpinionBox/>
        </Grid>
        <Grid item sm={6} md={4} lg={3}>
            <AdminOpinionBox/>
        </Grid>
        <Grid item sm={6} md={4} lg={3}>
            <AdminOpinionBox/>
        </Grid>
        <Grid item sm={6} md={4} lg={3}>
            <AdminOpinionBox/>
        </Grid>
    </Grid>
  )
}

export default AdminViewOpinions