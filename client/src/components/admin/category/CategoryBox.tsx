import React from 'react'
import { Avatar, Box, Typography } from '@mui/material'


function CategoryBox() {
  return (
    <Box sx={{backgroundColor:"#cfdde233",padding:"16px"}}>
        <Typography sx={{fontSize:"14px",marginBottom:"16px",fontWeight:"700"}}
            >
              الإسم : {"قسم"}
        </Typography>   
        <Box sx={{display:"flex",columnGap:"12px" , flexDirection:"column"}}>
            <Typography sx={{color:"#41798c",fontSize:"15px"}}> عدد الأخبار : {"2"}</Typography>
            <Typography sx={{color:"#41798c",fontSize:"15px"}}> عدد الأراء : {"2"}</Typography>
        </Box>
    </Box>
  )
}

export default CategoryBox