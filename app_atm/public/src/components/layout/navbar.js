import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Navbar extends Component {
    
    render(){
        const styles = StyleSheet.create({
            barraTitulo:{
                backgroundColor:'#CCC',
                padding:10,
                height: 60,
                flex:1
            },
            txtTitulo:{
                flex: 1,
                fontSize:18,
                color:'#000',
                textAlign:'center',
            }
        })
        return (
            <View style={ styles.barraTitulo }>
                <Text style={ styles.txtTitulo }>ATM Consultoria</Text>
            </View>
        )
    }
}