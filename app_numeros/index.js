import React from 'react'
import {Text,AppRegistry, Button, View } from 'react-native'

const GerarNumero = () => {
    let numero_aleatorio = Math.random()
    numero_aleatorio = Math.floor(numero_aleatorio * 10)
    alert(numero_aleatorio)
}

const App = () =>{ 
    return(
        <View>
            <Text>
                Gerador de Números !!!
            </Text>
            <Button title='Gerar Número' onPress={GerarNumero} />
        </View>
    )
}

AppRegistry.registerComponent('app_numeros', ()=> App)