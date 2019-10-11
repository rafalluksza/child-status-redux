import React, {useState} from "react";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import {Box, makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {editChild} from "../../REDUX/actions/actions";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
}));


const EditChild = ({children, edit}) => {
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
        edit(values);
        setValues({
            name: "",
            surname: "",
            phone: "",
            parent: ""});
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
                <Box>
                    <Button variant="contained" color="secondary" type="submit">Save</Button>
                    <Button variant="contained" color="primary" >Exit</Button>
                </Box>
            </form>
        </div>
    )
};

const mapState = (state) => {
    return {
        children: state.children.byId,
    }
};

const mapDispatch = dispatch => {
    return {
        edit: values => dispatch(editChild(values)),
    }
}

export default connect(mapState, mapDispatch)(EditChild);