import React, { Component } from 'react';
import PostUI from './PostUI';

class Posts extends Component {
    users;

    constructor(props){
        super(props);
        this.state={users:[]}
    }

    componentWillMount(){
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => this.setState({users:data}))
    }


  render() {
    return (
      <div>
          <PostUI/>
          <br/>
          <hr/>
          <br/>
        {/* <h2>Ya Ali Madad</h2> */}
        {this.state.users.map(user => <div key={user.id}>{ user.name }</div>)}
      </div>
    )
  }
}
 

export default Posts;
