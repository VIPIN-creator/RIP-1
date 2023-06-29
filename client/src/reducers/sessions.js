export default (state = {allSessions: ""}, action) =>{
    if(action.type === 'GET_SESSIONS' && !action.error){
        console.log('GET_SESSIONS');
        console.log(action.response);
        return {
            ...state,
            allSessions: action.response,
        }
    }
    else return state;
}