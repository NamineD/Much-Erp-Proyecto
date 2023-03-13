import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import styled from "styled-components";
import { Card } from '@mui/material';


import Layout from '../../components/Layout/Layout'
import Menus from '../../components/Menus/Menus';
import Users from '../../components/Users/Users';
import Groups from '../../components/Groups/Groups';


const System = ({props}) => {

    const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    `;

    function TabPanel(props) {
        const { children, value, index} = props;

        return (
            value === index && (
                    <Typography>{children}</Typography>
            )
        );
      }

    const [value, setValue] = useState(0);

    const [activateTab, setActivateTab] = useState(false);

    setTimeout(()=>{
        setActivateTab(true)
    },100)

    const tabsArr=[
        {
            label:"Menus",
            key: `simple-tab-0`,
        },
        {
            label:"Usuarios",
            key: `simple-tab-1`,
        },
        {
            label:"Grupos",
            key: `simple-tab-2`,
        }
    ]

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


  return (
    <>
    <Layout />
      <InnerContainer>
        <h3>Permisos</h3>
            <Card sx={{ minWidth: '80vw' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value = {value} onChange = {handleChange}>
                            {activateTab && (
                                    tabsArr.map((item)=>(
                                        <Tab {...item} />
                                    ))
                                )
                            }
                        </Tabs>
                    </Box>
                    <Box sx={{ padding: 2 }}>
                        <TabPanel value={value} index={0}>
                            <Menus />
                        </TabPanel>
                    </Box>
                    <TabPanel value={value} index={1}>
                        <Users />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Groups />
                    </TabPanel>
            </Card>
      </InnerContainer>
    </>
  )
}

export default System
