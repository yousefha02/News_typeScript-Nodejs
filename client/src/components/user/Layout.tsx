import React ,{ReactNode} from 'react'
import LogoHeader from './LogoHeader'
import { Box } from '@mui/material'
import Navbar from './Navbar/Navbar'
import Footer from './Footer'

type props = {
    children:ReactNode
}

export default function Layout({children}:props) {
    return (
        <Box>
            <LogoHeader/>
            <Navbar/>
            {children}
            <Footer/>
        </Box>
    )
}
