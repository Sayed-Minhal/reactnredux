import { FETCH_POSTS, NEW_POST } from '../actions/types';
export default function fetchPosts(){       
    return function(dispatch){
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then( (posts) => 
            {
                console.log(posts);    
                dispatch({
                    type:FETCH_POSTS,
                    payload:posts
                })
            }
        )
    }

}