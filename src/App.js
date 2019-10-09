import React, {useState} from 'react';
import {addChild} from "./REDUX/actions/actions";
import {connect} from "react-redux";
import store from "./REDUX/store/store"
import TableWithKids from "./components/TableWithKids";


const App =({addKid}) => {

  const [name, setName] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  addKid(name);
  console.log(store.getState());
  setName("")
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
        <button type="submit">Go!</button>
      </form>
        <TableWithKids/>
    </div>
  );
}

const mapDispatch = dispatch => ({
    addKid : name => dispatch(addChild(name))

})

export default connect(null, mapDispatch)(App);
