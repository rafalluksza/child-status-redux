import React from "react";
import {connect} from "react-redux";
import {deleteChild} from "../REDUX/actions/actions";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from "@material-ui/core/Button";


const TableWithKids = ({children, deleteChild}) => {

    const handleClick = (e, id) => {
        e.preventDefault();
        console.log("click", id);
        deleteChild(id);
    }
    return (
        <Table style={{width: "500px"}}>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Name:</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                { children.map((child, index) => {
                   return (
                    <TableRow key={index}>
                        <TableCell>
                            {index}
                        </TableCell>
                        <TableCell align="right">{child.name}</TableCell>
                        <TableCell>
                        <Button onClick={e => handleClick(e, index)}>Delete</Button>
                        </TableCell>
                    </TableRow>
                )})}
            </TableBody>
        </Table>
    )
}

const mapState = state => {
    return {
        children: state,
    }
}
const mapDispatch = dispatch => {
    return {
        deleteChild: (id) => dispatch(deleteChild(id))
    }
}

export default connect(mapState, mapDispatch)(TableWithKids)
