import axiosConfig from '../axiosConfig';
import axios from 'axios';

export const apiNewCreateBooking = ({ checkInDate, checkOutDate, guestFullName, guestEmail, numOfAdults, numOfChildren, note, totalPrice, roomId, hotelId }) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method: 'post',
            url: 'http://localhost:8080/api/booking/book',
            data: {
                checkInDate, checkOutDate, guestFullName, guestEmail, numOfAdults, numOfChildren, note, totalPrice, roomId, hotelId
            },
            headers: {
                'Content-Type': 'application/json', // Đảm bảo server của bạn có thể xử lý JSON
                // 'Authorization': 'Bearer your_token_here' // Nếu yêu cầu xác thực, thay thế 'your_token_here' bằng token thực tế
            }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})


