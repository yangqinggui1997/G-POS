import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import Spacer from './Spacer'

const AuthForm = (props) => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return <>
        <Spacer>
            <Text h3>{props.headerText}</Text>
        </Spacer>
        <Input label="Email" onChangeText={(value) => {setEmail(value)}} autoCorrect={false} autoCapitalize="none" />
        <Input label="Password" onChangeText={(value) => {setPassword(value)}} autoCorrect={false} secureTextEntry autoCapitalize="none" />
        { props.errorMessage ? <Text style={styles.errorMessage}>{props.errorMessage}</Text> : null }
        <Spacer>
            <Button title={props.submitButtonText} onPress={() => props.onSubmit(dispatch, {email, password})}/>
        </Spacer>
    </>
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    },
    input: {
        fontSize: 18,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 15,
        padding: 5,
        margin: 5,
        height: 40
    }
})

export default AuthForm
