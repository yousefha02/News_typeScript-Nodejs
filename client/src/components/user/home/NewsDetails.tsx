import React from 'react'
import {Box,Container,Tab} from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'

export default function NewsDetails() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{backgroundColor:"#f7f7f9",paddingY:"20px",marginY:"80px"}}>
            <Container>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="آخر الأخبار" value="1" sx={{fontSize:"20px"}}/>
                            <Tab label="الأكثر قراءة" value="2" sx={{fontSize:"20px"}}/>
                        </TabList>
                    </Box>
                    <TabPanel value="1">آخر الأخبار</TabPanel>
                    <TabPanel value="2">الأكثر قراءة</TabPanel>
                </TabContext>
            </Container>
        </Box>
    )
}
