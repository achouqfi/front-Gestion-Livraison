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
import TextField from '@mui/material/TextField';
import CancelIcon from '@mui/icons-material/Cancel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
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
  
const Cells = ["name","email", "camion id","véhicule matricule", "véhicule type","actions"]  
function Livreur() {
    const [open, setOpen] = React.useState(false);
    const [DOpen, setDOpen] = React.useState(false);
    const [status, setStatus] = useState({ type: 'delete' });
    const [btnAdd, setbtnAdd] = useState({ type: 'add' });
    const handleOpen = () => setOpen(true);
    const handleClose = () => (setOpen(false),setStatus({ type: 'delete' }));
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [Vehicule, setVehicule] = useState("");
    const deleteClose = () => (setDOpen(false),setStatus({ type: 'delete' }));
    const [dataId,setdataId]=useState(null)
    const [data , setData] = useState([]);
    const [dataV, setDataV] = useState("")
    const classes = useStyles()

    useEffect(() => {
        getdata();
    }, [])

    useEffect(() => {
        getvehicule();
    }, [""])
    
    function confirmationdelete(id){
        setStatus({ type: 'confirm' });
        setDOpen(true)
        setdataId(id)
    }

    function getdata() {
        axios("http://localhost:4000/api/chauffeur/")
        .then((result)=> {
            setData(result.data)
        })
    }

    function getvehicule(){
        axios("http://localhost:4000/api/camion/")
        .then((result)=> {
            setDataV(result.data);
        })
    }

    function save(){
        axios
            .post(`http://localhost:4000/api/chauffeur/add`,{
                name:name,
                email:email,
                camion:Vehicule
            })
            .then(res=>{
                getdata()
                handleClose()
            })
            .catch(err=>{
                console.log(err)
            })
    }

    //delete row
    function deleteRow() {
        axios
            .delete(`http://localhost:4000/api/chauffeur/${dataId}`)
            .then(res=>{
                console.log(res);
                setDOpen(false)
                getdata()
                setStatus({ type: 'delete' });
            })
            .catch(err=>{
                console.log(err)
            })
    }

    // //
    function getById(id,name,email){
        setName(name)
        setEmail(email)
        setVehicule(Vehicule);
        handleOpen()
        setdataId(id)
        setStatus({ type: 'delete' });
        setbtnAdd({ type: 'update' });
    }

    function updateData(){
        axios
            .put(`http://localhost:4000/api/chauffeur/${dataId}`,{
                name:name,
                email:email,
                camion:Vehicule
            })
            .then(res=>{
                setbtnAdd({ type: 'add' });
                getdata()
                handleClose()
            })
            .catch(err=>{
                console.log(err)
            })
    }

    console.log(dataV);
    return (
        <div className="px-lg-4 px-xl-5 container-fluid">
            <Wrapper
                Title = "Livreur"
                Breadcrumb = "Livreur" 
            />
            <SearchBar 
                Title="Cherche un livreur"
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
                        Ajouter un Livreur
                    </Typography>
                    <Button onClick={handleClose}><CancelIcon style={{ color: '#003f5c',fontSize:'25px' , marginBottom:"13px" }} /></Button>
                </div>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Box
                        sx={{
                        '& > :not(style)': { m: 1, width: '90%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                        onChange={(e)=>{setName(e.target.value)}}      
                        value={name}
                        id="name"
                        label="Nom et prenom"
                        />
                        <TextField
                        onChange={(e)=>{setEmail(e.target.value)}}      
                        value={email}
                        id="email"
                        label="Email"
                        type="email"
                        />
                        <Select
                        labelId="demo-simple-select-label"
                        label=""
                        value={Vehicule}
                        onChange={(e)=>{dataV(e.target.value)}}      
                        >
                        {dataV.map((row, index) => (   
                            <MenuItem value={row._id}>{row.immatriculation}</MenuItem>
                        ))}


                        </Select>
                        <div className='btn-del'>
                            {btnAdd?.type === 'add' && <Button className='btn-ajout'  onClick={save} id='addhh'  variant="outlined" type='submit' size="large">Add</Button>}
                            {btnAdd?.type === 'update' && <Button className='btn-ajout'  onClick={updateData} variant="outlined" type='submit' size="large">Update</Button>}
                        </div>
                        
                    </Box>
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
                                            <TableCell className={classes.Cell}>{row.name}</TableCell>
                                            <TableCell className={classes.Cell}>{row.email}</TableCell>
                                            <TableCell className={classes.Cell}>{row.camion._id}</TableCell>
                                            <TableCell className={classes.Cell}>{row.camion.immatriculation}</TableCell>
                                            <TableCell className={classes.Cell}>{row.camion.type}</TableCell>
                                            <TableCell className={classes.Cell} align="right">
                                            {status?.type === 'delete' && <DeleteIcon  onClick={()=>confirmationdelete(row._id)} />}
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
                                                            <Button className='del'  onClick={()=>deleteRow(row._id)}>Confirmer</Button>
                                                        </div>
                                                    </Box>
                                                </Modal>
                                            )}
                                            <EditIcon onClick={() => getById(row._id,row.name,row.email )} />
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

export default Livreur
