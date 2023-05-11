import React from 'react'
import NewBox from '../../reusableUi/NewBos'
import { Grid } from '@mui/material'

function AdminViewNews() {
  return (
    <Grid container spacing={2}>
        <Grid item sm={6} md={4} lg={3}>
            <NewBox isAdmin={true}/>
        </Grid>
        <Grid item sm={6} md={4} lg={3}>
            <NewBox isAdmin={true}/>
        </Grid>
        <Grid item sm={6} md={4} lg={3}>
            <NewBox isAdmin={true}/>
        </Grid>
        <Grid item sm={6} md={4} lg={3}>
            <NewBox isAdmin={true}/>
        </Grid>
    </Grid>
  )
}

export default AdminViewNews