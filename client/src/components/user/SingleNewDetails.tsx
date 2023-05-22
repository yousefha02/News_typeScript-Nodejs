import React from 'react'
import { New } from '../../types/News'
import { Box, Typography,styled } from '@mui/material'
import moment from 'moment'

type props = {
    newData:New | undefined
}

const Image = styled('img')({width:"100%"})

export default function SingleNewDetails({newData}:props) {
    return (
        <Box>
            <Typography sx={{fontSize:"28px",fontWeight:"700",marginBottom:"38px"}}>{newData?.title}</Typography>
            <Image src={`${process.env.REACT_APP_API_KEY}/images/${newData?.image}`} alt={newData?.title}/>
            <Box sx={{marginY:"16px",position:"relative"}} className="date_design">
                <Box sx={{paddingX:"10px",color:"#595959",display:"flex",justifyContent:"space-between"}}>
                    <Typography>{moment(newData?.createdAt).calendar()}</Typography>
                    <Typography>آخر تحديث {moment(newData?.createdAt).calendar()}</Typography>
                    <Typography>{moment(newData?.createdAt).format('LT')}</Typography>
                </Box>
            </Box>
            <Box dangerouslySetInnerHTML={{__html:newData?.description||""}} sx={{marginY:"40px"}}/>
        </Box>
    )
}
