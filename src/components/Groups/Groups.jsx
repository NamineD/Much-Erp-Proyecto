import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSomething } from '../../Redux/features/accessGroup'

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material'
import { green } from '@mui/material/colors'
import { Box } from '@mui/system'
import Switch from '@mui/material/Switch';
import CircularProgress from '@mui/material/CircularProgress';
import ModalInput from '../Modal/ModalInput';
import Button from '@mui/material/Button';

const options = [
    'Edit',
    'Delete'
]

const ITEM_HEIGHT = 48;

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Groups = () => {

const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.something);

  useEffect(() => {
    dispatch(fetchSomething());
  }, []);

  /* Input options */

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  /* Modal */

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
    { loading ? (<CircularProgress color="inherit" />) : 
        (<Box sx={{ display: 'flex', justifyContent: 'space-around', padding: 2 }}>
        {data.map((idx) => (
        <Card sx={{ width: '30%', padding: 1 }}>
            <Button onClick={handleOpenModal}><ModalInput handleCloseModal={handleCloseModal} openModal={openModal}/></Button>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <CardHeader 
                    avatar={
                        <Avatar sx={{ bgcolor: green[200] }}>
                            {idx.name.charAt(0)}
                        </Avatar>
                    }
                    title={idx.name}
                />
                <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? 'long-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="long-menu"
                    MenuListProps={{
                    'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                    }}
                >
                    {options.map((option) => (
                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                        {option}
                    </MenuItem>
                    ))}
                </Menu>
                </Box>
                <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography component="span" >
                        Status
                    </Typography>
                    <Switch {...label} defaultChecked />
                </CardContent>
        </Card>
        ))}
    </Box>)
    }
    </>
  )
}

export default Groups
