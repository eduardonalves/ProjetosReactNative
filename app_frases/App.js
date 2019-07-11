import React from 'react'
import {Text,View, AppRegistry, Image, TouchableOpacity, Alert} from 'react-native'

const Estilo ={
  principal:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center'

  },
  botao:{
    backgroundColor:'#538530',
    paddingVertical:10,
    paddingHorizontal:40,
    marginTop:20
  },
  textBotao:{
    color:'white',
    fontSize:16,
    fontWeight:'bold'
  }
}
const gerarNovaFrase = () => {
  let numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 5) 
  let frases= [
    'Vc é legal',
    'Vc não é legal',
    'Isto é legal',
    'Isto não é legal',
    'Acabou a imaginação'
  ]
  let fraseEscolhida = frases[numeroAleatorio]

  //alert(fraseEscolhida)
  Alert.alert(fraseEscolhida)
}
export default App = () => {
  const {principal, botao, textBotao} = Estilo
  return (
    <View style={principal}>
      <Image source={require('./public/img/logo.png')} />
      <TouchableOpacity style={botao} onPress={gerarNovaFrase} >
        <Text style={textBotao}>Nova Frase</Text>
      </TouchableOpacity>
      
    </View>
  )
}

AppRegistry.registerComponent('app_frases', () => App)


/*
Comandos extras

const Estilo ={
  estiloTexto:{
    fontSize:30,
    backgroundColor:'red',
    height: 80,
    width:60
  },
  estiloView:{
    backgroundColor:'skyblue',
    justifyContent:'flex-end'
  }
}
<View style={Estilo.estiloTexto}>
      <Image source={require('./public/img/logo.png')}  />
      <Image source={{uri:'https://images.equipboard.com/uploads/item/image/14542/open-labs-timbaland-miko-xl.jpg?v=1548563224'}} style={{width:300, height:300}} />
  <Text style={Estilo.estiloTexto}>
          Olá Marilene!
        </Text>
    </View>


*/