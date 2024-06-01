import actionType from "../actions/actionType";


const initstate = {
    dataPostNew: [],
    msg: '',
}
const bookingReducer = (state = initstate, action) => {
    switch (action.type) {
        case actionType.POST_CREATENEWBOOKING:
            return {
                ...state,
                dataPostNew: action.data || [],
                msg: action.msg || [],
            }
        default:
            return state;
    }
}


export default bookingReducer