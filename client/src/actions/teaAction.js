import axios from 'axios';

export const getAllTeas=()=> async (dispatch)=>{
    dispatch({type:'GET_TEAS_REQUEST'})
    try{
        const res=await axios.get('/api/teas/getAllTeas')
        console.log(res)
        dispatch({type:'GET_TEAS_SUCCESS',payload:res.data})
    }catch(err){
        dispatch({type:'GET_TEAS_FAil',payload:err})

    }
}