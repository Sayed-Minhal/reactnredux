import { FETCH_POSTS, NEW_POST } from '../actions/types'

const initialState = {
    items:[], 
    item:{}
}

export default function(state=initialState, action){
    switch(action.type){
        case FETCH_POSTS:
            console.log(action)
                return {
                    ...state,
                    items:action.payload
                }
            break;
        default:
            return state;
    }
}