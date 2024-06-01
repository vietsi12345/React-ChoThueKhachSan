import { apiGetRoomById, apiGetRoomsByIdHotel, apiGetRoomsByIdHotelAndTypeRoom, apiGetTypeRoom } from "../../services/Room";
import actionType from "./actionType";

export const getRoomsByIdHotelAndTypeRoom = (idHotel, name) => async (dispath) => {
    try {
        const response = await apiGetRoomsByIdHotelAndTypeRoom(idHotel, name)
        if (response.status === 200) {
            dispath({
                type: actionType.GET_ROOMSBYIDHOTEL,
                roomsByIdHotel: response.data
            })
        } else {

            dispath({
                type: actionType.GET_ROOMSBYIDHOTEL,
                msg: 'Lỗi'
            })
        }

    } catch (error) {
        dispath({
            type: actionType.GET_ROOMSBYIDHOTEL,
            homes: null
        })
    }
}

export const getTypeRoom = (idHotel) => async (dispath) => {
    try {
        const response = await apiGetTypeRoom(idHotel)
        if (response.status === 200) {
            dispath({
                type: actionType.GET_TYPEROOMS,
                typeRooms: response.data
            })
        } else {

            dispath({
                type: actionType.GET_TYPEROOMS,
                msg: 'Lỗi'
            })
        }

    } catch (error) {
        dispath({
            type: actionType.GET_TYPEROOMS,
            typeRooms: null
        })
    }
}
export const getRoomById = (idRoom) => async (dispath) => {
    try {
        const response = await apiGetRoomById(idRoom)
        if (response.status === 200) {
            dispath({
                type: actionType.GET_ROOMBYID,
                roomById: response.data
            })
        } else {

            dispath({
                type: actionType.GET_ROOMBYID,
                msg: 'Lỗi'
            })
        }

    } catch (error) {
        dispath({
            type: actionType.GET_ROOMBYID,
            roomById: null
        })
    }
}
