import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminPanel from "./components/Admin/AdminPanel";
import Navigation from "./components/Navigation";
import Home from "./components/Home/Home";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  mainContainer: {
    width: 400,
    height: 550,
    borderRadius: "8px",
    boxShadow: "3px 3px 3px 2px rgba(0,0,0,0.75)",
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <CssBaseline />
      <Router>
        <div>
          {" "}
          <Navigation />
          <Switch>
            <Route path="/admin">
              <AdminPanel />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

function Users() {
  return <h2>Users</h2>;
}

export default App;
