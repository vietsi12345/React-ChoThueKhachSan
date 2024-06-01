import axiosConfig from '../axiosConfig';
import axios from 'axios';

export const apiNewCreateBooking = ({ checkInDate, checkOutDate, guestFullName, guestEmail, numOfAdults, numOfChildren, note, totalPrice, roomId, hotelId }) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method: 'post',
            url: 'http://localhost:8081/api/booking/book',
            data: {
                checkInDate, checkOutDate, guestFullName, guestEmail, numOfAdults, numOfChildren, note, totalPrice, roomId, hotelId
            }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})


