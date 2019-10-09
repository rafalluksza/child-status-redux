import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AdminPanel from "./components/Admin/AdminPanel";
import AdminNav from "./components/Admin/AdminNav";

const App = () => {
  return (
    <>
      <Router>
        <div>
          {" "}
          <AdminNav />
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
    </>
  );
};

function Home() {
  return <h2>Home</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
