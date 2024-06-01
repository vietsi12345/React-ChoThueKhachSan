import { apiNewCreateBooking } from "../../services/Booking";
import actionType from "./actionType";

export const postNewCreateBooking = ({ checkInDate, checkOutDate, guestFullName, guestEmail, numOfAdults, numOfChildren, note, totalPrice, roomId, hotelId }) => async (dispath) => {
    try {
        const response = await apiNewCreateBooking({ checkInDate, checkOutDate, guestFullName, guestEmail, numOfAdults, numOfChildren, note, totalPrice, roomId, hotelId })
        if (response.status === 200) {

            dispath({
                type: actionType.POST_CREATENEWBOOKING,
                data: response.data
            })
        } else {

            dispath({
                type: actionType.POST_CREATENEWBOOKING,
                msg: 'Lỗi'
            })
        }

    } catch (error) {
        dispath({
            type: actionType.POST_CREATENEWBOOKING,
            data: null
        })
    }
}
