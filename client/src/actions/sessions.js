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

export const getSessions = () => async (dispatch) => {
    // console.log('action');
    try {
        const response = await session.get('/info');
        // console.log(response.data);
        dispatch({
            type: 'GET_SESSIONS',
            response: response.data.sessions,
            error: false
        });
    }
    catch(e) {
        console.log(e);
        dispatch({
            type: 'GET_SESSIONS',
            error: true
        });
    }
}