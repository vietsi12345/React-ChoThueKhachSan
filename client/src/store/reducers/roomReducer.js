import actionType from "../actions/actionType";

const initstate = {
    roomsByIdHotel: [],
    msg: '',
    typeRoom: []
}

export const roomReducer = (state = initstate, action) => {
    switch (action.type) {
        case actionType.GET_ROOMSBYIDHOTEL:
            return {
                ...state,
                roomsByIdHotel: action.roomsByIdHotel || [],
                msg: action.msg || [],
            }
        case actionType.GET_TYPEROOMS:
            return {
                ...state,
                typeRoom: action.typeRooms || [],
                msg: action.msg || [],
            }
        default:
            return state;
    }
}