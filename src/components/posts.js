import React, { Component } from 'react';
import PostUI from './PostUI';
import  { connect } from "react-redux";
import  fetchPosts  from '../actions/postActions';

class Posts extends Component {
    users;


    componentWillMount(){
        this.props.fetchPosts();
    }


  render() {
    return (
      <div>
          <PostUI/>
          <br/>
          <hr/>
          <br/>
        {/* <h2>Ya Ali Madad</h2> */}
        {this.props.posts.map(user => <div key={user.id}>{ user.name }</div>)}

      </div>
    )
  }
}
 

//export default Posts;

const mapStateToProps = state => ({
  posts:state.posts.items
})
export default connect(mapStateToProps, { fetchPosts })(Posts)
