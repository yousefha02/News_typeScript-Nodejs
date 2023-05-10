import { Container,Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return (
        <Box sx={{backgroundColor:"#f7f7f9",marginTop:"30px",paddingY:"30px"}}>
            <Container>
                <Box sx={{marginBottom:"20px",display:"flex",justifyContent:"center",alignItems:"center",columnGap:"20px"}}>
                    <SocialIcon url="https://twitter.com/jaketrent" style={{width:"35px",height:"35px"}}/>
                    <SocialIcon url="https://www.facebook.com/" style={{width:"35px",height:"35px"}}/>
                    <SocialIcon url="https://www.youtube.com/" style={{width:"35px",height:"35px"}}/>
                    <SocialIcon url="https://www.snapchat.com/" style={{width:"35px",height:"35px"}}/>
                    <SocialIcon url="https://www.instagram.com/" style={{width:"35px",height:"35px"}}/>
                    <SocialIcon url="https://www.telegram.com/" style={{width:"35px",height:"35px"}}/>
                    <SocialIcon url="https://www.linkedin.com/" style={{width:"35px",height:"35px"}}/>
                </Box>
                <Divider/>
                <Typography sx={{marginTop:"20px",marginBottom:"20px",textAlign:"center",fontSize:"15px"}}>
                    &copy; جميع الحقوق محفوظة لصفحيفة مجلتي {new Date().getFullYear()}
                </Typography>
            </Container>
        </Box>
    )
}
