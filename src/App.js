import React, { Component } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import axios from 'axios';
import { connect } from "react-redux";
import { fetchSmurf } from './actions';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {

  componentDidMount() {
    console.log('Did mount');
    fetchSmurf();
    // axios.get('http://localhost:3333/smurfs')
    // .then(res => console.log(res))
    // .catch(err => console.log('Axios Error', err));
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     fetchSmurf
//   }
// }

export default connect(null, { fetchSmurf })(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.