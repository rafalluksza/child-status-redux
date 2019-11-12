import React from "react";
import {Link} from "react-router-dom";
import KidsList from "./KidsList";
import { makeStyles } from "@material-ui/core";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles(theme => ({
    btnAdd: {
        position: "absolute",
        right: 20,
        bottom: 0,
        backgroundColor: "#E84785",
        fontSize: 30,
    }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div style={{position: "relative", height: "460px"}}>
      <KidsList />
        <Fab className={classes.btnAdd} component={Link} to="/admin/addchild" color="primary" aria-label="add" >
          <AddIcon />
        </Fab>
    </div>
  );
};

export default Home;
