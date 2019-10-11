import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {Link, useRouteMatch} from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  box: {
    marginTop: 10
  },
  kidBox: {
    width: "90%",
    height: "auto",
    border: "1px solid black"
  },
  avatar: {
    width: 120,
    height: 120,
    margin: "10px auto",
    backgroundColor: deepOrange[500]
  }
});

const KidBlock = ({ children }) => {
  const classes = useStyles();
  const {url} = useRouteMatch();

  return (
    <Container maxWidth={"xl"}>
      <div className={classes.box}>
        <Grid container spacing={1}>
          {children.map((child, index) => {
            return (
              <Grid item xs={6} key={index}>
                <Box className={classes.kidBox}>
                  <Button component={Link} to={`${url}/${index}`}>
                    <Avatar className={classes.avatar}>{child.name}</Avatar>
                  </Button>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </Container>
  );
};

const mapState = state => {
  return {
    children: state,
  };
};

export default connect(mapState)(KidBlock);
