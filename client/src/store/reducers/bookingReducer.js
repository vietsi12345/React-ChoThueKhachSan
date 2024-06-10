import actionType from "../actions/actionType";


const initstate = {
    dataPostNew: [],
    myBookings: [],
    msg: '',
    msgBookings: ''
}
const bookingReducer = (state = initstate, action) => {
    switch (action.type) {
        case actionType.POST_CREATENEWBOOKING:
            return {
                ...state,
                dataPostNew: action.data || [],
                msg: action.msg || [],
            }
        case actionType.GET_MYBOOKINGSBYEMAIL:
            return {
                ...state,
                myBookings: action.data || [],
                msg: action.msg || [],
            }
        case actionType.GET_CANCELBOOKING:
            return {
                ...state,
                msgBookings: action.msg || '',
            };
        default:
            return state;
    }
}


export default bookingReducer