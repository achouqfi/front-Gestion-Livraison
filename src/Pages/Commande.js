import React, { useState } from 'react';
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
import '../Css/Style.css'
import SearchBar from '../Components/Form'
import Wrapper from '../Components/Wrapper';

// Generate Order Data
function createData(date_depart,date_arrive, prix, distance, status, livreurs) {
    return {date_depart, date_arrive, prix, distance, status, livreurs};
}

//table data
const rows = [
    createData('16 Mar, 2019', '16 Mar, 2019', '3000', '256', 'en cours',  "223324134"),
    createData('16 Mar, 2019', '16 Mar, 2019', '4000', '256', 'accepté',  "223324134"),
    createData('16 Mar, 2019', '16 Mar, 2019', '2000', '256', 'arrrivé',  "223324134"),
    createData('16 Mar, 2019', '16 Mar, 2019', '1500', '256', 'en cours', "223324134"),
    createData('16 Mar, 2019','16 Mar, 2019', '2200', '256', 'en cours', "223324134"),
    createData('16 Mar, 2019','16 Mar, 2019', '1200', '256', 'accepté', "223324134"),
];

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
    },
}));
  
const Cells = ["date depart","date arrive", "prix", "distance", "status", "livreurs"]
  
function Comande() {

    const classes = useStyles()

    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(+event.target.value))
        setPage(0)
    }

    return (
        <div className="px-lg-4 px-xl-5 container-fluid">
            <Wrapper
                Title = "Commande"
                Breadcrumb = "Commande" 
            />
            <SearchBar 
                Title="Cherche une commande"
                btn="Chercher"
            />
            <div className="card-table mb-4 card">
                <div className="card-body">
                    <Paper>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow className={classes.headRow}>
                                        {Cells.map(cell => (<TableCell className={classes.Head}>{cell}</TableCell>))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row, index) => (
                                        <TableRow key={row.id}>
                                            <TableCell className={classes.Cell}>{row.date_depart}</TableCell>
                                            <TableCell className={classes.Cell}>{row.date_arrive}</TableCell>
                                            <TableCell className={classes.Cell}>{row.prix}</TableCell>
                                            <TableCell className={classes.Cell}>{row.distance}</TableCell>
                                            <TableCell className={classes.Cell}>{row.status}</TableCell>
                                            <TableCell className={classes.Cell}>{row.livreurs}</TableCell>
                                            <TableCell className={classes.Cell}>{row.actions}</TableCell>
                                            <TableCell className={classes.Cell} align="right">
                                                <DeleteIcon fontSize='23' />
                                                <EditIcon />
                                            </TableCell>
                                        </TableRow>
                                    ))}

                                    {emptyRows > 0 && (
                                        <TableRow style={{ height: 53 * emptyRows }}>
                                        <TableCell colSpan={6} />
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                           
                        </TableContainer >
                        <TablePagination 
                            rowsPerPageOptions={[5, 10, 100]}
                            component= "div"
                            count={rows.length}
                            rowsPerPage = {rowsPerPage}
                            page = {page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </div>

            </div>
        </div>
        
        
    )
}

export default Comande
