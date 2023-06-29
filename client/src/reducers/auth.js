export default (state = {isSignedIn: false}, action) =>{
    console.log(action.response);
    if(action.type === 'LOG_IN' && !action.error){
        return {
            isSignedIn: true,
            user: action.response.userId,
            token: action.response.jwt,
            type: action.response.type
        }
    }
    if(action.type === 'DELETE_USER' && !action.error){
        return {
            isSignedIn: false,
        }
    }
    if(action.type === 'EDIT_USER'){
        if(!action.error)
        {
            return {
                    isSignedIn: state.isSignedIn,
                    user: {...state.user, ...action.response.updatedUserInfo},
                    token: state.token
            }
        }
    }
    if(action.type === 'LOG_OUT'){
        return {
            isSignedIn: false,
        }
    }
    if(action.type === 'LOG_IN_WITH_TOKEN'){
        if(!action.error){
            return {
                isSignedIn: true,
                user: action.response.userId,
                token: action.response.token
            }
        }
        else{
            return{
                isSignedIn: false
            }
        }

    }
    else return state;
}