import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, StatusBar } from 'react-native'

const imgContactDetail = require('../../imgs/detalhe_contato.png')
const styles = StyleSheet.create({
    cabecalho:{
        flexDirection: 'row',
        marginTop:20,
        marginLeft: 15
    },
    txtTitulo: {
        fontSize: 30,
        color: '#61bd8c',
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
export default class Contact extends Component {
    static navigationOptions = {
        title: 'Contatos',
        headerStyle: {
            backgroundColor: '#61bd8c',
            color:'#fff'
        },
        
        /**Imagem customizada do botão de voltar, caso queria usar a padrão remover a linha abaixo**/
        headerBackImage:<Image source={require('../../imgs/btn_voltar.png')} /> ,
        /**Cor do ícone de voltar padrão**/
        headerTintColor: '#fff',
    }
    render(){
        return (
            <View>
                 <StatusBar
                    backgroundColor='#61bd8c'
                />
                
                <View style={ styles.cabecalho }>
                    <Image source={ imgContactDetail } />
                    <Text style={ styles.txtTitulo }> Contatos</Text>
                </View>
                <View style={ styles.detalheContato }>
                    <Text style={ styles.txtDetalheContato }>Telefone: (21) 9999-9999</Text>  
                    <Text style={ styles.txtDetalheContato }>Celular: (21) 9999-9999</Text>  
                    <Text style={ styles.txtDetalheContato }>e-mail: contato@teste.com.br</Text>   

                </View>
            </View>
        )
    }
}