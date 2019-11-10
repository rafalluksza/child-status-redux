import React from "react";
import AddKid from "./AddKid";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Link, useRouteMatch } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import TableWithKids from "./TableWithKids";
import EditChild from "./EditChild";

const AdminPanel = () => {
  let { url, path} = useRouteMatch();

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <ButtonGroup
            variant="contained"
            color="secondary"
            aria-label="full-width contained primary button group"
            fullWidth
          >
            <Button component={Link} to={`${url}/children`}>
              Children
            </Button>
            <Button component={Link} to={`${url}/addchild`}>
              Add child
            </Button>
            {/*<Button>Options</Button>*/}
          </ButtonGroup>
        </Grid>

        <Grid item xs={12}>
          <Switch>
            <Route path={`${path}/addchild`}>
              <AddKid />
            </Route>
            <Route exact path={`${path}/children`}>
              <TableWithKids />
            </Route>
            <Route path={`${path}/children/:id`}>
              <EditChild />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminPanel;
