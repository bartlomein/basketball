import React, { useEffect } from "react";
import ServerContainer from "./components/ServerContainer";
import { connect } from "react-redux";

import "./App.css";

function App(props) {
  return (
    <div className="App">
      <ServerContainer props={props} />
    </div>
  );
}
const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(mapDispatchToProps)(App);
