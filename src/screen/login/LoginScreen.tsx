import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'

const LoginScreen = () => {
  return (
    <SafeAreaView style={loginStyle.container}>
        <View style={loginStyle.content}>
            <Text style={loginStyle.title}>Delivery app</Text>
            <TextInput style={loginStyle.inputbox} defaultValue='Email' />
            <TextInput  secureTextEntry={true} defaultValue='Password'/>
            <Button  title='Forgot Password!' />
            <Button title='Login'></Button>
            <Button title='Register' />
        </View>
      
     </SafeAreaView>
  )
}

const loginStyle= StyleSheet.create({
    container:{
        display:'flex',
        height:'100%',
        flex:1,
        justifyContent:'center',
        backgroundColor:'#283593',
        alignItems:'center',
    },
    content:{
        width:'80%',
        backgroundColor:'#fff',
        padding:40,
        display:'flex',
        gap:20

    },
    title:{
        fontSize:20,
        color:'#283588',
    },
    inputbox:{
       borderStyle:'solid',
       borderWidth:1,
       borderColor:'#888',
       paddingLeft:15
    },
})

export default LoginScreen