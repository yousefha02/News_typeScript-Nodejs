import './navbar.css'
import { Box, Container, Divider, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <Box>
            <Container sx={{paddingY:"6px",overflowX:"auto",width:"100%",marginTop:"6px"}} className="links">
                <Box sx={{display:"flex",columnGap:"28px",width:"700px"}}>
                    <Link to="/" className='link'>
                        <Typography>الرئيسية</Typography>
                    </Link>
                    <Link to="/" className='link'>
                        <Typography>الرئيسية</Typography>
                    </Link>
                    <Link to="/" className='link'>
                        <Typography>الرئيسية</Typography>
                    </Link>
                    <Link to="/" className='link'>
                        <Typography>الرئيسية</Typography>
                    </Link>
                    <Link to="/" className='link'>
                        <Typography>الرئيسية</Typography>
                    </Link>
                    <Link to="/" className='link'>
                        <Typography>الرئيسية</Typography>
                    </Link>
                    <Link to="/" className='link'>
                        <Typography>الرئيسية</Typography>
                    </Link>
                    <Link to="/" className='link'>
                        <Typography>الرئيسية</Typography>
                    </Link>
                    <Link to="/" className='link'>
                        <Typography>الرئيسية</Typography>
                    </Link>
                    <Link to="/" className='link'>
                        <Typography>الرئيسية</Typography>
                    </Link>
                </Box>
            </Container>
            <Divider/>
        </Box>
    )
}