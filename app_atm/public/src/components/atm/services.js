import React, { Component } from 'react'
import {View, Text, StyleSheet, Image, StatusBar } from 'react-native'

const imgContactDetail = require('../../imgs/menu_servico.png')
const styles = StyleSheet.create({
    cabecalho:{
        flexDirection: 'row',
        marginTop:20,
        marginLeft: 15
    },
    txtTitulo: {
        fontSize: 30,
        color: '#19d1c8',
        marginTop:25,
        marginLeft:10
    },
    detalheContato:{
        padding:20,
        marginTop:10
    },
    txtDetalheContato:{
        fontSize: 18,
        marginLeft: 20
    }
})

export default class Services extends Component {
    static navigationOptions = {
        title: 'Servicos',
        headerStyle: {
            backgroundColor: '#19d1c8',
            color:'#fff'
        },
        
        /**Imagem customizada do botão de voltar, caso queria usar a padrão remover a linha abaixo**/
        headerBackImage:<Image source={require('../../imgs/btn_voltar.png')} /> ,
        /**Cor do ícone de voltar padrão**/
        headerTintColor: '#fff',
    }
    render(){
        return(
            <View>
                 <StatusBar
                    backgroundColor='#19d1c8'
                />
                
                <View style={ styles.cabecalho }>
                    <Image source={ imgContactDetail } />
                    <Text style={ styles.txtTitulo }> Serviços</Text>
                </View>
                <View style={ styles.detalheContato }>
                    <Text style={ styles.txtDetalheContato }>- Serviços Gerais</Text>  
                    <Text style={ styles.txtDetalheContato }>- Consultoria</Text>  
                    <Text style={ styles.txtDetalheContato }>- RH</Text>   
                    
                </View>
            </View>
        )
    }
}
