import { Grid } from '@mui/material'
import React from 'react'
import AdminVideoBox from './AdminVideoBox'

function AdminViewVideos() {
  return (
    // <Grid container spacing={2}>
    //     <Grid item sm={6} md={4} lg={3}>
    //         <AdminVideoBox/>
    //     </Grid>
    //     <Grid item sm={6} md={4} lg={3}>
    //         <AdminVideoBox/>
    //     </Grid>
    //     <Grid item sm={6} md={4} lg={3}>
    //         <AdminVideoBox/>
    //     </Grid>
    //     <Grid item sm={6} md={4} lg={3}>
    //         <AdminVideoBox/>
    //     </Grid>
    // </Grid>
    <>
    <AdminVideoBox/>
    <AdminVideoBox/>
    <AdminVideoBox/>
    <AdminVideoBox/>
    </>
  )
}

export default AdminViewVideos