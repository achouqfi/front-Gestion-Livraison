import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../Css/Style.css'
import Wrapper from '../Components/Wrapper';
import FormManager from '../Components/FormManager';
import Delete from '@mui/icons-material/Delete';
import axios from "axios"

 

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

const useStyles = makeStyles((theme) => ({
    headRow : {
        background: "#003f5c"
    },
    Head: {
      fontSize: '10pt',
      textTransform: "uppercase",
      fontWeight: "900",
      color: "white"
    },
    Cell: {
      fontSize: '9pt',
    }, 
    seeMore: {
      marginTop: theme.spacing(3),
    }
}));
  
const Cells = ["email","name", "date de naissance"]
  
function Manager() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [data , setData] = useState([]);
    const classes = useStyles()
    
    useEffect(() => {
        axios.get("http://localhost:4000/api/manager/")
            .then((response) => {
                console.log(response.data)
                setData(response.data)
            });
    },[]);

    return (
        <div className="px-lg-4 px-xl-5 container-fluid">
            <Wrapper
                Title = "Manager"
                Breadcrumb = "Manager" 
            />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Button onClick={handleClose}>close</Button>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Ajouter un manager
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <FormManager />
                    <Button className='btn-ajout' variant="outlined" size="large">Ajouter</Button>
                </Typography>
                </Box>
            </Modal>

            <div className="card-table mb-4 card">
                <div className="card-body">
                <div className='btn-container'>
                    <Button className='btn-add' onClick={handleOpen}>Ajouter</Button>
                </div>
                    <Paper>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow className={classes.headRow}>
                                        {Cells.map(cell => (<TableCell className={classes.Head}>{cell}</TableCell>))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map((row, index) => (
                                        <TableRow key={row.id}>
                                            <TableCell className={classes.Cell}>{row.email}</TableCell>
                                            <TableCell className={classes.Cell}>{row.name}</TableCell>
                                            <TableCell className={classes.Cell}>{row.datenaissance}</TableCell>
                                            <TableCell className={classes.Cell} align="right">
                                                <DeleteIcon fontSize='23' />
                                                <EditIcon />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                           
                        </TableContainer >
                        {/* <TablePagination 
                            rowsPerPageOptions={[5, 10, 100]}
                            component= "div"
                            count={rows.length}
                            rowsPerPage = {rowsPerPage}
                            page = {page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        /> */}
                    </Paper>
                </div>

            </div>
        </div>
        
        
    )
}

export default Manager
