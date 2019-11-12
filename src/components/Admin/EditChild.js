import React, {useState} from "react";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import { makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {updateChild} from "../../Redux/actions/actions";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    form: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    textField: {
        width: "90%"
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
    btns: {
        display: "flex",
        width: 250,
        justifyContent: "space-around",
        paddingTop: 20
    },
    btnSave: {
        backgroundColor: "#E84785",
        color: "white"
    },
    btnExit: {
        backgroundColor: "#D8E2DC",
        color: "black"
    }
}));


const EditChild = ({children, updateChild}) => {
    let {id} = useParams();
    const nweChildren = Object.values(children)
    const child = nweChildren[id];

    const classes = useStyles();
    const [values, setValues] = useState({
        name: child.name,
        surname: child.surname,
        phone: child.phone,
        parent: child.parent,
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(values);
        updateChild(Number(id), values);
        setValues({
            name: "",
            surname: "",
            phone: "",
            parent: ""});
    };


    return (
        <div>
            <form className={classes.form} onSubmit={handleSubmit}>
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
                <div className={classes.btns}>
                    <Button className={classes.btnSave} variant="contained"  type="submit">Save</Button>
                    <Button className={classes.btnExit} variant="contained"  >Exit</Button>
                </div>
            </form>
        </div>
    )
};

const mapState = (state) => {
    return {
        children: state,
    }
};

const mapDispatch = dispatch => {
    return {
        updateChild: (id, data) => dispatch(updateChild(id, data)),
    }
}

export default connect(mapState, mapDispatch)(EditChild);