import React from "react";
import { connect } from "react-redux";
import { deleteChild } from "../../REDUX/actions/actions";
import {Link, useRouteMatch} from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const TableWithKids = ({ children, deleteChild }) => {

  const handleClick = (e, id) => {
    e.preventDefault();
    deleteChild(id);
  };

  const {url} = useRouteMatch();

  return (
    <Grid item xs={12}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell colSpan={2}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.values(children).map((child, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{child.name}</TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary" onClick={e => handleClick(e, index)}>Delete</Button>
                </TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" component={Link} to={`${url}/${index}`}> Edit</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Grid>
  );
};

const mapState = state => {
  return {
    children: state.children.byId,
  };
};
const mapDispatch = dispatch => {
  return {
    deleteChild: id => dispatch(deleteChild(id))
  };
};

export default connect(
  mapState,
  mapDispatch
)(TableWithKids);
