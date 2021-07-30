import React from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { useDispatch, useSelector } from 'react-redux'
import AuthForm from '../components/AuthForm'
import { ClearErrorMessage, Signin } from '../hooks/user'

const SigninScreen = () => {
    const dispatch = useDispatch()
    const {token, errorMessage } = useSelector(state => state.users)
    return <View style={styles.container}>
        <NavigationEvents
            onWillFocus={ClearErrorMessage.bind(this, dispatch)}
        />
        <AuthForm
            headerText="Sign In to Your Account"
            errorMessage={errorMessage}
            onSubmit={Signin}
            submitButtonText="Sign In"
        />
    </View>
}

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
})

export default SigninScreen
