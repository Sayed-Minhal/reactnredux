import { FETCH_POSTS, NEW_POST } from "../types/types";

export default function fetchPosts(){
    return function(dispath){
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(posts => dispath({
                type:FETCH_POSTS,
                payload: posts
            }))
    }
}