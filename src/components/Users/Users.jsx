import { TableBody, TableCell, TableContainer, TableHead, TableRow, Table, TablePagination, Switch, IconButton } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react'

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Users = () => {

    const arrUser = JSON.parse(localStorage.getItem('user'))


    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

  return (
    <>
        <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell sx={{ color: '#0098E5' }}>Names</TableCell>
                    <TableCell align='center' sx={{ color: '#0098E5' }}>Username</TableCell>
                    <TableCell align='center' sx={{ color: '#0098E5' }}>Email</TableCell>
                    <TableCell align='center' sx={{ color: '#0098E5' }}>Role</TableCell>
                    <TableCell align='center' sx={{ color: '#0098E5' }}>Access Group</TableCell>
                    <TableCell align='center' sx={{ color: '#0098E5' }}>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow >
                        <TableCell component='th' scope='row'>{arrUser.name}</TableCell>
                        <TableCell align='center'>{arrUser.username}</TableCell>
                        <TableCell align='center'>{arrUser.email}</TableCell>
                        <TableCell align='center'>{arrUser.role}</TableCell>
                        <TableCell align='center'>{arrUser.accessGroup.name}</TableCell>
                        <TableCell align='center'>
                            <Switch {...label} defaultChecked />
                            <IconButton aria-label="more"id="long-button"><MoreVertIcon /></IconButton> 
                        </TableCell>
                </TableRow>
            </TableBody>
        </Table>
        </TableContainer>
        <TablePagination 
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count='5'
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </>
  )
}

export default Users
