import user from '../apis/exec';

export const runCode = (req)=> async (dispatch)=>{
    try{
        const token= JSON.parse(localStorage.getItem('userData')).token;
        const resp = await user.post('/', req, { headers:{'Authorization' : `Bearer ${token}`} });
        dispatch({
            type: 'RUN_CODE',
            output: resp.data.output,
            error: false
        });
    }
    catch(e){
        console.log(e);
        dispatch({
            type: 'RUN_CODE',
            output: e.response.data.err.stderr,
            error: true
        });
    }
}

export const runTest = (req)=> async (dispatch)=>{
    try{
        console.log(req);
        const token= JSON.parse(localStorage.getItem('userData')).token;
        const resp = await user.post('/test', req, { headers:{'Authorization' : `Bearer ${token}`} });
        dispatch({
            type: 'RUN_TEST',
            output: JSON.stringify(resp.data, null, 4),
            error: false
        });
    }
    catch(e){
        console.log(e);
        dispatch({
            type: 'RUN_TEST',
            output: e.response.data.err.stderr,
            error: true
        });
    }
}
