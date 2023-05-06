import { Box,Typography,styled } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'

type props = {
    big?:boolean
}

const CategoryText = styled(Typography)({
    backgroundColor:"#b80000",
    color:"white",
    width:"fit-content",
    fontSize:"14px",
    padding:"2px 8px",
    fontWeight:"600",
})

export default function MainNewBox({big}:props) {
    const Wrapper = styled(Box)({
        width:"100%",
        height:!big?"164px":"352px",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:'no-repeat',
        position:"relative",
    })

    let text ="لوريم إيبسوم طريقة لكتابة النصوص في النشر والتصميم الجرافيكي"

    return (
        <Link to="">
            <Wrapper 
            sx={{backgroundImage:`url('https://images.skynewsarabia.com/images/v1/2023/05/05/1618319/1100/619/1-1618319.jpg')`}}>
                <Box sx={{padding:"8px"}}>
                    <CategoryText>العالم</CategoryText>
                </Box>
                <Typography sx={{position:"absolute",bottom:0,paddingY:"4px",textAlign:"center",left:0,width:"100%",backgroundColor:"#000000ab",color:"white"}}>
                    {big?text.slice(0,80):text.slice(0,30)}
                </Typography>
            </Wrapper>
        </Link>
    )
}