import session from '../apis/sessions';

export const postSession = (s) => async (dispatch)=>{
    try {
        const token= JSON.parse(localStorage.getItem('userData')).token;
        const response = await session.post("/create", s, { headers:{'Authorization' : `Bearer ${token}`} });
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