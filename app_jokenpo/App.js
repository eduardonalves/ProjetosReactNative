import React, {Component} from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Header from './public/src/common/layouts/header'
import If from './public/src/common/layouts/if'
import BtnEscolha from './public/src/jokenpo/escolha'
import Icone  from './public/src/jokenpo/icone'


export default class App extends Component {

  constructor(props){
    super(props)
    this.state ={escolhaUsuario:'', txtColor:'red',escolhaDoComputador:'', resultado:'', showImage:false ,imagemComputador:require('./public/src/imgs/pedra.png'),imagemUsuario:require('./public/src/imgs/pedra.png') }
  }
  
  jokenpo(escolhaUsuario){
    
    let numeroAleatorio = Math.floor( Math.random() * 3)
    let respostaComputador = ''
    let resultado=''
    let imagemComputador=''
    let imagemUsuario = ''
  

    switch (numeroAleatorio) {
        case 0:
        
          respostaComputador ='Pedra'
          imagemComputador = require('./public/src/imgs/pedra.png')
          if(escolhaUsuario == 'Pedra'){
            resultado = 'Resultado: Você Empatou'
          }else if(escolhaUsuario == 'Papel'){
            resultado = 'Resultado: Você Ganhou'
          }else{
            resultado = 'Resultado: Você Perdeu'
          }
        break;
        case 1:
          
          
          respostaComputador ='Papel'
          imagemComputador = require('./public/src/imgs/papel.png')

          

          if (escolhaUsuario=='Papel') {
            resultado = 'Resultado: Você Empatou'
          }else if (escolhaUsuario=='Tesoura') {
            resultado = 'Resultado: Você Ganhou'
          }else {
            resultado = 'Resultado: Você Perdeu'
          }
          

          break;
          case 2:
          
          respostaComputador ='Tesoura'
          imagemComputador = require('./public/src/imgs/tesoura.png')
          
          if (escolhaUsuario=='Tesoura') {
            resultado = 'Resultado: Você Empatou'
          }else if (escolhaUsuario == 'Papel') {
            resultado = 'Resultado: Você Perdeu'
          } else {
            resultado = 'Resultado: Você Ganhou'
          }
          break;
      }

      if (escolhaUsuario =='Pedra') {
        imagemUsuario = require('./public/src/imgs/pedra.png')
      }else if (escolhaUsuario =='Papel') {
        imagemUsuario = require('./public/src/imgs/papel.png')
      } else {
        imagemUsuario = require('./public/src/imgs/tesoura.png')
      }

      if (resultado == 'Resultado: Você Ganhou') {
        txtColor= 'green'
      }else if (resultado == 'Resultado: Você Empatou') {
        txtColor= '#E1AD01'
      } else {
        txtColor= 'red'
      }
    
    this.setState({resultado:resultado,txtColor:txtColor, escolhaDoComputador:respostaComputador,escolhaUsuario:escolhaUsuario, showImage:true, imagemComputador:imagemComputador, imagemUsuario:imagemUsuario })

    
  }
  render() {
    let test = false
    if (this.state.showImage) {
      test = true
    }
    
    return (
      <View>
        
        <Header />
        
        <View style={styles.painelAcoes}  >  
            <BtnEscolha styleBtn={styles.btnEscolha} title='Pedra' jokenpo= {()=> this.jokenpo('Pedra')} />
            <BtnEscolha styleBtn={styles.btnEscolha} title='Papel' jokenpo= {()=> this.jokenpo('Papel')} />
            <BtnEscolha styleBtn={styles.btnEscolha} title='Tesoura' jokenpo= {()=> this.jokenpo('Tesoura')} />
        </View>
        <View style={styles.palco} >
          <If test={test}>
            <Text style={{fontSize: 25,fontWeight:'bold',color:this.state.txtColor,height: 60}}>{this.state.resultado} </Text>
            <Icone texto='Escolha do usuário:' imagemUsuario={this.state.imagemUsuario} styleImage={styles.palco} />
            <Icone texto='Escolha do computador:' imagemUsuario={this.state.imagemComputador} />
          </If>
        </View>
        
      </View>
    );
  }
}


let styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop:20
  },
  palco:{
    alignItems:'center',
    marginTop: 20
  },
  txtResultado:{
    fontSize: 25,
    fontWeight:'bold',
    color:'red',
    height: 60
  }
})