import axiosInstance from '../api/axiosConfig'
import { signin as signinAction, signout as signoutAction, setError as setErrorAction, clearError as clearErrorAction } from '../store/actions/user'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { navigate } from '../navigationRef'

export const Signin = async (dispatch, params) => {
    try
    {
        const response = await axiosInstance.post('/signin', {email: params.email, password: params.password}).catch(error => console.log(error))
        if(response.status === 200)
        {
            await AsyncStorage.setItem('token', response.data.token)
            dispatch(signinAction(response.data.token))
            navigate('HomeStaffScreen')
            console.log("Welcome back!")
        }
    }
    catch(err)
    {
        dispatch(setErrorAction("Something went wrong with sign in."))
    }
}

export const Signout = async dispatch => {
    await AsyncStorage.removeItem('token')
    dispatch(signoutAction())
    navigate('SigninScreen')
}

export const ClearErrorMessage = dispatch => {
    dispatch(clearErrorAction())
}

export const TryLocalLogin = async dispatch => {
    const token = await AsyncStorage.getItem('token')
    if(token)
    {
        dispatch(signinAction(token))
        navigate('HomeStaffScreen')
        console.log("Welcome back!")
    }
    else
    {
        navigate('SigninScreen')
        console.log("Please sign in!")
    }

}