import React, { Component } from 'react';
import { connect } from 'react-redux';

import fetchPosts from '../actions/postActions';

import PostUI from './PostUI';

class Posts extends Component {
    users;

    componentWillMount(){
      this.props.fetchPosts();
    }

    componentDidMount(){
      console.log(this.props)
    }

    componentDidUpdate(){
      console.log(this.props)
    }

  render() {
    return (
      <div>
          <PostUI/>
        {/* <h2>Ya Ali Madad</h2> */}
        {this.props.posts.map(user => <div key={user.id}>{ user.name }</div>)}
      </div>
    )
  }
}
 
const mapStateToProps = state => ({
  posts:state.posts.items
})
export default connect(mapStateToProps, {fetchPosts})(Posts);