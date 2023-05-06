import { Box, Grid, Typography,styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';

const Image = styled('img')({
    width:"100%"
})

const ViewBox = styled(Box)({
    backgroundColor:"#e5e5e5",
    fontSize:"15px",
    padding:"4px 8px",
    borderRadius:"4px",
    maxWidth:"164px",
    display:"flex",
    alignItems:"center",
    marginTop:"8px",
    columnGap:"6px"
})

type props = {
    views?:boolean
}

export default function DetailsNewBox({views}:props) {
    return (
        <Link to="/">
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <Image src={'https://images.skynewsarabia.com/images/v1/2023/05/05/1618319/1100/619/1-1618319.jpg'}/>
                </Grid>
                <Grid item xs={7}>
                    <Typography sx={{fontSize:"18px",color:"black",fontWeight:"700",marginBottom:"22px"}}>وريم إيبسوم طريقة لكتابة النصوص في النشر والتصميم الجرافيكي </Typography>
                    {views&&
                    <ViewBox sx={{color:"black"}}>
                        <VisibilityIcon sx={{fontSize:"18px",fontWeight:"500"}}/>
                        <Typography sx={{fontSize:"14px" , fontWeight:"500"}}>3000 مشاهدة</Typography>
                    </ViewBox>}
                </Grid>
            </Grid>
        </Link>
    )
}
