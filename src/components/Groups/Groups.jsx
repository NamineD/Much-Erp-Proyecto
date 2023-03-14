import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSomething, deleteGroup } from '../../Redux/features/accessGroup'

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

const Groups = () => {

    const dispatch = useDispatch();
    const { loading, data, error } = useSelector((state) => state.something);

    /* Input options */

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

  /* Switch */

    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };


  /* Modal Edit */

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);


    /* Delete  */

    const handleDelete = async (id) => {
        dispatch(deleteGroup(id)).then(() => {
            dispatch(fetchSomething());
        });
    }

    useEffect(() => {
        dispatch(fetchSomething());
    }, [])


  return (
    <>
    <Button>Agregar</Button>
    { loading ? (<CircularProgress color="inherit" />) : 
        (<Box sx={{ display: 'flex', justifyContent: 'space-around', padding: 2 }}>
        {data?.map((idx) => (
        <Card sx={{ width: '30%', padding: 1 }} key={idx.id}>
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
                    {options.map((option) =>
                        <MenuItem key={option} onClick={ () => option === 'Delete' ? handleDelete(idx.id) : handleOpenModal()}>
                            {option}
                        </MenuItem>
                    )}
                </Menu>
                <ModalInput data={data} handleCloseModal={handleCloseModal} openModal={openModal}/>
                </Box>
                <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography component="span" >
                        Status
                    </Typography>
                    <Switch 
                        checked={idx.status}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </CardContent>
        </Card>
        ))}
    </Box>)
    }
    </>
  )
}

export default Groups
