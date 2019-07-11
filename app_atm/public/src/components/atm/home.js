import React, { Component }  from 'react'
import { View, Image, StatusBar, StyleSheet, TouchableHighlight } from 'react-native'
import Navbar from '../layout/navbar'

const logo = require('../../imgs/logo.png')
const menuCliente = require('../../imgs/menu_cliente.png')
const menuContato = require('../../imgs/menu_contato.png')
const menuEmpresa = require('../../imgs/menu_empresa.png')
const menuServico = require('../../imgs/menu_servico.png')

const styles = StyleSheet.create({
    logo:{
        marginTop: 30,
        alignItems: 'center'
    },
    menu:{
        alignItems: 'center'
    },
    menuGroup:{
        flexDirection: 'row'
    },
    imgMenu:{
        margin: 15
    }
})

export default class Home extends Component {
   
    static navigationOptions = {
        // headerTitle instead of title
        headerTitle: <Navbar />,
      }
    /*static navigationOptions = {
        title: 'ATM Consultoria',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    }*/
    render(){
        const {navigate} = this.props.navigation
        return (
            <View>
                <StatusBar
                    backgroundColor='#ccc'
                />
                
                <View  style= { styles.logo }>
                    <Image source={ logo } />
                </View>
                <View style={ styles.menu }>
                    <View style={ styles.menuGroup }>
                        <TouchableHighlight
                            onPress={() => navigate('Client')}
                            underlayColor={ '#b9c941' }
                            activeOpacity={ 0.3 }
                        >
                            <Image style={ styles.imgMenu } source={ menuCliente } />
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress = {() => navigate('Contact')} 
                            underlayColor={ '#61bd8c' }
                            activeOpacity={ 0.3 }
                        >
                            <Image style={ styles.imgMenu }  source={ menuContato } />
                        </TouchableHighlight>
                        
                    </View>
                    <View style={ styles.menuGroup }>
                        <TouchableHighlight
                            onPress = {() => navigate('Company')} 
                            underlayColor={ '#ec7148' }
                            activeOpacity={ 0.3 }
                        >
                            <Image style={ styles.imgMenu }  source={ menuEmpresa } />
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress = {() => navigate('Service')} 
                            underlayColor={ '#19d1c8' }
                            activeOpacity={ 0.3 }
                        >
                            <Image style={ styles.imgMenu }  source={ menuServico } />
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}

