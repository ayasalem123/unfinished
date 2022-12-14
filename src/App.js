import logo from './logo.svg';
import React, { Component } from 'react';
import Profile from "./components/profilee"
import './App.css';
const person=
{ FullName : "aya",
  profession :"engineer",
   bio: "dude",}
   let i=0;
class App extends React.Component {
  state = {
      p:person,
      showbol:false,
    };
  
   show = () => {
    this.state.showbol==false ? this.setState({showbol:true}) :this.setState({showbol:false});
  }
  render() {
    return (<div>
      <button onClick={this.show}>show</button>
      {this.state.showbol && <Profile persn={this.state.p.FullName} pro={this.state.p.profession} persn={this.state.p.FullName} />}
      <p>number of amount {i}</p>
    </div>);
  }
}

export default App;
