import React from "react";
import {Link} from "react-router-dom";
import KidsList from "./KidsList";
import { makeStyles } from "@material-ui/core";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {COLOR_SECONDARY} from "../Variables/colors";


const useStyles = makeStyles(theme => ({
    btnAdd: {
        position: "absolute",
        right: 20,
        bottom: 0,
        backgroundColor: COLOR_SECONDARY,
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
