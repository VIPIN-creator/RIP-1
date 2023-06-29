import session from '../apis/sessions';

export const postSession = (s) => async (dispatch)=>{
    try {
        const response = await session.post("/create", s);
        console.log(response.data);
        dispatch({
            type: 'POST_SESSION',
            error: false
        });
    }
    catch(e){
        console.log(e);
        dispatch({
            type: 'POST_SESSION',
            error: true,
        });
    }
}