import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://72de17ef6547.ngrok.io'
})

axiosInstance.interceptors.request.use(
    async(config) => {
        const token = await AsyncStorage.getItem('token')
        if(token)
            config.headers.Authorization = `Bearer ${token}`
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default axiosInstance