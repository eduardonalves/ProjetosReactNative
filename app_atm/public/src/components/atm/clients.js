import React, { Component }  from 'react'
import { View, Text, Image, StyleSheet, StatusBar, Button } from 'react-native'


const detalheCliente = require('../../imgs/detalhe_cliente.png')
const cliente1 = require('../../imgs/cliente1.png')
const cliente2 = require('../../imgs/cliente2.png')
const styles = StyleSheet.create({
    cabecalho:{
        flexDirection: 'row',
        marginTop:20,
        marginLeft: 15
    },
    txtTitulo: {
        fontSize: 30,
        color: '#b9c941',
        marginTop:25,
        marginLeft:10
    },
    detalheCliente:{
        padding:20,
        marginTop:10
    },
    txtDetalhesCliente:{
        fontSize: 18,
        marginLeft: 20
    }
})

export default class Clients extends Component {
    static navigationOptions = {
        title: 'Clientes',
        headerStyle: {
            backgroundColor: '#b9c941',
            color:'#fff'
        },
        headerTitleStyle:{
            color:'#fff'
        },
        /**Imagem customizada do botão de voltar, caso queria usar a padrão remover a linha abaixo**/
        headerBackImage:<Image source={require('../../imgs/btn_voltar.png')} /> ,
        
        headerBackTitle:{
            color:'#fff',
            backgroundColor:'#fff',
            
        },
        headerTintColor: '#fff',
        headerRight: (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#b9c941"
            />
        ),
    }
    
    render(){
        return (
            <View >
                <StatusBar
                    backgroundColor='#b9c941'
                />
                
                <View style={ styles.cabecalho }>
                    <Image source={ detalheCliente } />
                    <Text style={ styles.txtTitulo }> Nossos Clientes</Text>
                </View>
               <View style={ styles.detalheCliente }> 
                    <Image source={ cliente1 } />
                    <Text style={ styles.txtDetalhesCliente } >Cliente Sys</Text>   
               </View>
                <View style={ styles.detalheCliente }>
                    <Image source={ cliente2 } />
                    <Text style={ styles.txtDetalhesCliente }>Cliente RSM </Text>    
                </View>
            </View>
        )
    }
}

