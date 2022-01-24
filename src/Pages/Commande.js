import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
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
// import SearchBar from '../searchBar/SearchBar'
// import Wrapper from '../Components/Wrapper';

// Generate Order Data
function createData(date_depart,date_arrive, prix, distance, status, livreus) {
    return { date_depart,date_arrive, prix, distance, status, livreus };
}
  
const rows = [
    createData(0, '16 Mar, 2019', 'Elvis Presley', 'path', 'Tupelo, MS',  "i"),
    createData(1, '16 Mar, 2019', 'Paul McCartney', 'path', 'London, UK',  " i"),
    createData(2, '16 Mar, 2019', 'Tom Scholz', 'path', 'Boston, MA',  " i"),
    createData(3, '16 Mar, 2019', 'Michael Jackson', 'path', 'Gary, IN', " i"),
    createData(4, '154 Mar, 2019', 'Bruce Springsteen', 'path123', 'Long Branch, NJ', " i"),
    createData(5, '15123 Mar, 2019', 'Bruce Springsteen', 'path', 'Long Branch, NJ', " i"),
    createData(6, '115 Mar, 2019', 'Bruce Springsteen', 'pat6h', 'Long Branch, NJ', " i"),
    createData(7, '1552 Mar, 2019', 'Bruce Springsteen', 'pat14h', 'Long Branch, NJ', " i"),
    createData(8, '115 Mar, 2019', 'Bruce Springsteen', 'pat13h', 'Long Branch, NJ', " i"),
];
  
const useStyles = makeStyles((theme) => ({
    headRow : {
        background: "#004040"
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
  
const Cells = [ "id", "nom de boutique", "logo", "Fournisseur", "Nombre de produit", "Description", "Date de creation", "Produits", "Visibilite", "Action" ]
  
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
            <div className="card-table mb-4 card">
                <div className="card-body">
                    <Paper>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow className={classes.headRow}>
                                        {
                                        Cells.map(cell => (
                                            <TableCell className={classes.Head}>{cell}</TableCell>
                                        ))
                                        }
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {/* rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) */}
                                    {rows.map((row, index) => (
                                        <TableRow key={row.id}>
                                            <TableCell className={classes.Cell}>{row.id}</TableCell>
                                            <TableCell className={classes.Cell}>{row.name}</TableCell>
                                            <TableCell className={classes.Cell}>{row.logo}</TableCell>
                                            <TableCell className={classes.Cell}>{row.fournisseur}</TableCell>
                                            <TableCell className={classes.Cell}>{row.prodNum}</TableCell>
                                            <TableCell className={classes.Cell}>{row.Desc}</TableCell>
                                            <TableCell className={classes.Cell}>{row.date}</TableCell>
                                            <TableCell className={classes.Cell}>Produits</TableCell>
                                            <TableCell className={classes.Cell}>Amdin</TableCell>
                                            <TableCell className={classes.Cell} align="right">
                                                <DeleteIcon/>
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
