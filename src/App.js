import React from 'react';
import './style.css';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  //Create

  //update
  //read
  getPost = async () => {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    console.log(data);
  };
  //delete
  render() {
    return (
      <div>
        <h1>Blog Post</h1>
        <table>
          <thead>
            <th>id</th>
            <th>titile</th>
            <th>body</th>
          </thead>
        </table>
      </div>
    );
  }
}
