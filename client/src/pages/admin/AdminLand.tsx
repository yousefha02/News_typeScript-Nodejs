import React from 'react'
import { Paper} from '@mui/material'
import AdminLayout from '../../components/admin/AdminLayout'
import InformationBoxes from '../../components/admin/Land/InformationBoxes'
import MostNewsTable from '../../components/admin/Land/MostNewsViewTable'

function AdminLand() {
  return (
    <AdminLayout>
      <InformationBoxes/>
      <Paper sx={{marginTop:"50px"}}>
        <MostNewsTable/>
      </Paper>
    </AdminLayout>
  )
}

export default AdminLand