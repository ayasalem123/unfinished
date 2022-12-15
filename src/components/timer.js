import React, { Component } from 'react'
class Time extends React.Component {
    state = {count:0,}
    componentDidMount(){
        const intervalId = setInterval(() => {
          this.setState(
           {count : this.state.count+1}
          );
        }, 1000);
      }
    
    render(){return <div>{this.state.count}</div>}}
export default Time;
