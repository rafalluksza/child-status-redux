import React, { useState } from "react";
import { addChild } from "../../REDUX/actions/actions";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "90%"
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  },
  buttonAdd: {
    textAlign: "right",
    marginRight: 30
  }
}));

const AddKid = ({ addKid }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: "",
    surname: "",
    phone: "",
    parent: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addKid({ ...values });
    setValues({
      name: "",
      surname: "",
      phone: "",
      parent: ""
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="filled-name"
          label="Name"
          className={classes.textField}
          value={values.name}
          onChange={handleChange("name")}
          margin="normal"
          variant="filled"
        />
        <TextField
          id="filled-name"
          label="Surname"
          className={classes.textField}
          value={values.surname}
          onChange={handleChange("surname")}
          margin="normal"
          variant="filled"
        />
        <TextField
          id="filled-name"
          label="Phone"
          className={classes.textField}
          value={values.phone}
          onChange={handleChange("phone")}
          margin="normal"
          variant="filled"
        />
        <TextField
          id="filled-name"
          label="Parent"
          className={classes.textField}
          value={values.parent}
          onChange={handleChange("parent")}
          margin="normal"
          variant="filled"
        />
        <div className={classes.buttonAdd}>
          <Button variant="contained" color="secondary" type="submit">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};

const mapDispatch = dispatch => ({
  addKid: values => dispatch(addChild(values))
});

export default connect(
  null,
  mapDispatch
)(AddKid);
