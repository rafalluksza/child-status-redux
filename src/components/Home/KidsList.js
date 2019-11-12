import React from "react";
import { connect } from "react-redux";
import {makeStyles} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";


const useStyles = makeStyles({
  listItem: {
    height: 60,
    width: "80%",
    borderBottom: "1px solid black",
    margin: "auto"
  }
});

const KidsList = ({children}) => {
  const classes = useStyles();
  return (
    <List>
      {children.map((child) => {
        return (
          <ListItem className={classes.listItem} key={child.id}>
            <ListItemAvatar>
              <Avatar variant="rounded" src={child.photo}/>
            </ListItemAvatar>
            <ListItemText>
              <Typography>{child.name}</Typography>
            </ListItemText>
          </ListItem>
        );
      })}
    </List>
  );
};

const mapState = state => {
  return {
    children: state
  };
};

export default connect(mapState)(KidsList);
