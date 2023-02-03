export const getAllTeaReducer = ( state = {},action)=>{
    switch(action.type) {
        case "GET_TEAS_REQUEST":
            return {
                ...state,
            };
            case "GET_TEAS_SUCCESS":
            return {
                teas:action.payload,
            };
            case "GET_TEAS_FAIL":
            return {
                error:action.payload,
            };
            default:
                 return state;
    }
};