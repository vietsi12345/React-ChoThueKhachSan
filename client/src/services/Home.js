import axiosConfig from '../axiosConfig'

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
            url: '/api/hotel/get/locations'
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
