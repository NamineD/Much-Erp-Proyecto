import { Avatar, Card, CardContent, CardHeader, List, ListItemButton, ListItemText } from '@mui/material'
import { green } from '@mui/material/colors'
import { Box } from '@mui/system'
import React from 'react'

const Menus = () => {



  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Card sx={{ width: '30%', padding: 1 }}>
            <CardHeader 
                avatar={
                    <Avatar sx={{ bgcolor: green[200] }}>
                        MM
                    </Avatar>
                }
                title="Main Menu"
            />
            <CardContent>
                <Box sx={{ display: 'flex', '& > *': {m: 1,}, }} >
                    <List>
                        <ListItemButton>
                            <ListItemText primary="DASHBOARD"/>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="SISTEMA"/>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="CAMPO"/>
                        </ListItemButton>
                    </List>
                </Box>
            </CardContent>
        </Card>
        <Card sx={{ width: '30%', padding: 1 }}>
            <CardHeader 
                avatar={
                    <Avatar sx={{ bgcolor: green[200] }}>
                        M
                    </Avatar>
                }
                title="Menu"
            />
            <CardContent>
                <Box sx={{ display: 'flex', '& > *': {m: 1,}, }} >
                    <List>
                        <ListItemButton>
                            <ListItemText primary="PERMISOS"/>
                        </ListItemButton>
                    </List>
                </Box>
            </CardContent>
        </Card>
        <Card sx={{ width: '30%', padding: 1 }}>
            <CardHeader 
                avatar={
                    <Avatar sx={{ bgcolor: green[200] }}>
                        SM
                    </Avatar>
                }
                title="Main Menu"
            />
            <CardContent>
                <Box sx={{ display: 'flex', '& > *': {m: 1,}, }} >
                    <List>
                        <ListItemButton>
                            <ListItemText primary="ESPECIES Y VARIEDADES"/>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="PLANO DE CULTIVO PERENNES"/>
                        </ListItemButton>
                    </List>
                </Box>
            </CardContent>
        </Card>
    </Box>
  )
}

export default Menus
