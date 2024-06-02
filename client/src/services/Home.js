import axiosConfig from '../axiosConfig'
import axios from 'axios'

export const apiGetAlltHomes = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/hotel/all-hotels'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetListCities = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/hotel/get/locations',
            headers: {
                'Content-Type': 'application/json', // Không bắt buộc cho yêu cầu GET, nhưng tốt để có
                // 'Authorization': 'Bearer your_token_here' // Nếu yêu cầu xác thực
            }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetHomesByCityName = (cityName) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: `/api/hotel/city/${cityName}`
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})


export const apiGetHotelByID = (idHotel) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: `/api/hotel/get/${idHotel}`
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
