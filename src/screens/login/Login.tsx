import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput, Button, Alert } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import {increment,login} from '../../stores/actions/Action'

const Login = () => {
    var stateval = useSelector((state:any) => state.auth);
    const dispatch = useDispatch();

    const [userName,userNameState] = useState('');
    const [userPassword,passwordState] = useState('');

    function handleSubmit(event){
        event.preventDefault()
        if(userName == '1' && userPassword == '1' ){
            dispatch(login({'userName':userName,'userPassword':userPassword}))
        }else{
            alert(' Invalid Mobile And Password');
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../../assets/header-logo.png')} />
            <View >
                <TextInput placeholder="Phone number,email or username" onChangeText={(val) =>userNameState(val)} style={styles.input} />
                <View>
                    <TextInput secureTextEntry placeholder="Password" onChangeText={(val) => passwordState(val)} style={styles.input} />
                </View>
                 <TouchableOpacity style={styles.btn} onPress={ handleSubmit}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View >
                <Text style={styles.bottomSection}>Don't have an account? <Text style={styles.signUpText}>Sign up</Text></Text>
            </View>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30
    },

    logo: {
        resizeMode: 'center',
        height: 50,
        width: 'auto',
        marginBottom: 15
    },
    input: {
        paddingHorizontal: 8,
        paddingVertical: 8,
        marginBottom: 15,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#808080',
    },
    btn: {
        width: '100%',
        backgroundColor: '#3897f0',
        paddingVertical: 12,
        borderRadius: 5,
    },
    btnText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    },
    bottomSection: {
        marginTop: 10,
        textAlign: 'center',
    },
    signUpText: {
        textDecorationLine: 'none',
        color: '#3897f0',
        textAlign: 'center',

    }

})