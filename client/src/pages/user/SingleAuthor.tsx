import { Box, Container,Grid,Typography,styled } from '@mui/material'
import React from 'react'
import Layout from '../../components/user/Layout'
import OpinionAuthor from '../../components/user/OpinionAuthor'

const Image = styled('img')({width:"180px",height:"180px",borderRadius:"8px"})

export default function SingleAuthor() {
    return (
        <Layout>
            <Container sx={{marginY:"40px"}}>
                <Box sx={{display:"flex",alignItems:"center",columnGap:"20px",marginBottom:"40px"}}>
                    <Image src="https://mui.com/static/images/avatar/2.jpg"/> 
                    <Typography sx={{color:"#41798c",fontSize:"26px",fontWeight:"700"}}>يوسف أبوهاني</Typography>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={6}><OpinionAuthor/></Grid>
                    <Grid item xs={6}><OpinionAuthor/></Grid>
                    <Grid item xs={6}><OpinionAuthor/></Grid>
                    <Grid item xs={6}><OpinionAuthor/></Grid>
                    <Grid item xs={6}><OpinionAuthor/></Grid>
                    <Grid item xs={6}><OpinionAuthor/></Grid>
                </Grid>
            </Container>
        </Layout>
    )
}
