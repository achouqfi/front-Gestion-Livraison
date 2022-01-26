import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
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
import CancelIcon from '@mui/icons-material/Cancel';
import axios from "axios"
import SearchBar from '../Components/Form'


 

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
        background:"#003f5c"
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
  
const Cells = ["id","email","name", "date de naissance"]
  
function Manager() {
    const [open, setOpen] = React.useState(false);
    const [DOpen, setDOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // const deleteOpen = () => setDOpen(true);
    const deleteClose = () => (setDOpen(false),setStatus({ type: 'delete' }));
    const [data , getData] = useState([]);
    const [status, setStatus] = useState(undefined);
    const classes = useStyles()

    function confirmationdelete(){
        setStatus({ type: 'confirm' });
        setDOpen(true)
    }



    const info = useEffect(() => {
        axios.get("http://localhost:4000/api/manager/")
            .then((response) => {
                // console.log(response.data)
                getData(response.data)
                setStatus({ type: 'delete' });
            });
    },[]);

    function deleteRow(id) {
        axios
            .delete(`http://localhost:4000/api/manager/${id}`)
            .then(res=>{
                info()
                setDOpen(false)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return (
        <div className="px-lg-4 px-xl-5 container-fluid">
            <Wrapper
                Title = "Manager"
                Breadcrumb = "Manager" 
            />
            <SearchBar 
                Title="Cherche un manager"
                btn="Chercher"
            />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <div className='header-btn'>
                    <Typography id="modal-modal-title" style={{ fontSize:"16px", marginTop:"6px" }}  variant="h6" component="h1">
                        Ajouter un manager
                    </Typography>
                    <Button onClick={handleClose}><CancelIcon style={{ color: '#003f5c',fontSize:'25px' , marginBottom:"13px" }} /></Button>
                </div>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <FormManager />
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
                                            <TableCell  className={classes.Cell}>{row._id}</TableCell>
                                            <TableCell className={classes.Cell}>{row.email}</TableCell>
                                            <TableCell className={classes.Cell}>{row.name}</TableCell>
                                            <TableCell className={classes.Cell}>{row.datenaissance}</TableCell>
                                            <TableCell className={classes.Cell} align="right">
                                            {status?.type === 'delete' && <DeleteIcon  onClick={()=>confirmationdelete()} />}
                                            {status?.type === 'confirm' && (
                                                <Modal
                                                    open={DOpen}
                                                    onClose={deleteClose}
                                                    aria-labelledby="modal-modal-title"
                                                    aria-describedby="modal-modal-description"
                                                >
                                                    <Box sx={style}>
                                                        <div className='header-btn'>
                                                            <Typography id="modal-modal-title" style={{ fontSize:"16px", marginTop:"6px" }}  variant="h6" component="h1">
                                                                Confirmer la supprission
                                                            </Typography>
                                                            <Button onClick={deleteClose}><CancelIcon style={{ color: '#003f5c',fontSize:'25px' , marginBottom:"13px" }} /></Button>
                                                        </div>
                                                        <div className='btn-del'>
                                                            <Button className='annul' onClick={deleteClose}>Annuler</Button>
                                                            <Button className='del'  onClick={deleteClose}>Confirmer</Button>
                                                        </div>
                                                    </Box>
                                                </Modal>
                                            )}
                                            <EditIcon />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer >
                    </Paper>
                </div>

            </div>
        </div>
        
        
    )
}

export default Manager
