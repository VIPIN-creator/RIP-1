import user from '../apis/exec';

export const runCode = (req)=> async (dispatch)=>{
    try{
        const resp = await user.post('/', req);
        dispatch({
            type: 'RUN_CODE',
            output: resp.data.output,
            error: false
        });
    }
    catch(e){
        dispatch({
            type: 'RUN_CODE',
            output: e.response.data.err.stderr,
            error: true
        });
    }
}

export const runTestDummy = ()=> async (dispatch)=>{
    console.log("runtestdummy");
    dispatch({
        type: 'RUN_TEST',
        output: 'Go to Hell'
    });
}
