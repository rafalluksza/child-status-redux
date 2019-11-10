import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from "react-router-dom";

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})(props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles(theme => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

const AdminNav= () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                Menu
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem component={Link} to="/">
                    <ListItemText primary="Home" />
                </StyledMenuItem>
                <StyledMenuItem component={Link} to="/admin">
                    <ListItemText primary="Admin" />
                </StyledMenuItem>
                {/*<StyledMenuItem>*/}
                {/*    <ListItemText primary="Inbox" />*/}
                {/*</StyledMenuItem>*/}
            </StyledMenu>
        </div>
    );
}

export default AdminNav;


// {/*<nav>*/}
// {/*    <ul>*/}
// {/*        <li>*/}
// {/*            <Link to="/">Home</Link>*/}
// {/*        </li>*/}
// {/*        <li>*/}
// {/*            <Link to="/admin">Admin</Link>*/}
// {/*        </li>*/}
// {/*        <li>*/}
// {/*            <Link to="/users">Users</Link>*/}
// {/*        </li>*/}
// {/*    </ul>*/}
// {/*</nav>*/}