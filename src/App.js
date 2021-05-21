import React from 'react';
import './style.css';
import axios from 'axios';

export default class App extends React.Component {
  
  constructor (props){
    super (props)
    this.state={
      posts:[]
    };
  }

  //Create
  //update
  //read
  //delete
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
