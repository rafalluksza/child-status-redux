import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  box: {
    marginTop: 10
  },
  kidBox: {
    width: "90%",
    height: "auto"
  },
  avatar: {
    width: 120,
    height: 120,
    margin: "10px auto",
    backgroundColor: deepOrange[500]
  },
  paper: {
    height: "90vh"
  },
  modalAvatar: {
    width: 120,
    height: 120,
    margin: "10px auto",
    backgroundColor: deepOrange[500]
  },
  modalList: {
    listStyle: "none",
    paddingTop: 30
  },
  modalListItem: {
    fontSize: 20
  },
  btnClose: {
    float: "right",
    marginRight: 20,
  }
});

const KidBlock = ({ children }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth={"xl"}>
      <div className={classes.box}>
        <Grid container spacing={1}>
          {children.map((child, index) => {
            return (
              <Grid item xs={6} key={index}>
                <Box className={classes.kidBox}>
                  <div>
                    <Button onClick={handleOpen}>
                      <Avatar className={classes.avatar}>{child.name}</Avatar>
                    </Button>
                    <Modal open={open} onClick={handleClose}>
                      <div>
                        <Paper className={classes.paper}>
                          <Avatar className={classes.modalAvatar}>{child.name} </Avatar>
                          <ul className={classes.modalList}>
                            <li className={classes.modalListItem}>
                              Name: {child.name}
                            </li>
                            <li className={classes.modalListItem}>
                              Surname: {child.surname}
                            </li>
                            <li className={classes.modalListItem}>
                              Phone number: {child.phone}
                            </li>
                            <li className={classes.modalListItem}>
                              Parent name: {child.parent}
                            </li>
                          </ul>
                          <div>
                            <Button variant="contained" className={classes.btnClose} handleClick={handleClose}>Close</Button>
                          </div>
                        </Paper>
                      </div>
                    </Modal>
                  </div>
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
    children: state
  };
};

export default connect(mapState)(KidBlock);
