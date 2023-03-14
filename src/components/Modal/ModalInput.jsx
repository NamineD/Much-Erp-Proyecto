import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, Card, CardContent, Switch, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { editGroup } from '../../Redux/features/accessGroup';

const ModalInput = ({data, openModal, handleCloseModal}) => {

  console.log(data);

  const dispatch = useDispatch()

  const [ newName, setNewName ] = useState({
    name: ''
  })

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewName({ [name]: value })
  }

  const handleEdit = (e) => {
    e.preventDefault()
    const { name } = newName
    const newData = { 
      ...data,
      name,
    };
    dispatch(editGroup(newData));
  } 

  return (
    <>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CardContent>
              <TextField
                id="outlined-basic"
                label="User Name"
                variant="outlined"
                value={newName.name}
                onChange={handleChange}
                required
                sx={{ paddingBottom: 2 }}
              />
              <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography component="span" >
                        Status
                </Typography>
                <Switch /* onChange={handleSwitch} */ /* value={idx} *//>
              </CardContent>
              <Button type="submit" onClick={handleEdit} >Actualizar</Button>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </>
  )
}

export default ModalInput
