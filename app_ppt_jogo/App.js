import React, {Component} from 'react';
import { Text, View, Button} from 'react-native';


export default class App extends Component {

  constructor(props){
    super(props)
    this.state ={escolhaUsuario:'', escolhaDoComputador:'', resultado:''}
  }
  
  jokenpo(escolhaUsuario){
    this.setState({escolhaUsuario:escolhaUsuario})
    let numeroAleatorio = Math.floor( Math.random() * 3)
    switch (numeroAleatorio) {
      case 0:
        this.setState({...this.state, escolhaDoComputador:'Pedra'})

        if(this.state.escolhaUsuario == 'Pedra'){
          this.setState({...this.state, resultado:'Empatou'})
        }else if(this.state.escolhaUsuario == 'Papel'){
          this.setState({...this.state, resultado:'Ganhou'})
        }else{
          this.setState({...this.state, resultado:'Perdeu'})
        }
      case 2:
        this.setState({...this.state, escolhaDoComputador:'Papel'})

        if(this.state.escolhaUsuario=='Papel'){
          this.setState({...this.state, resultado:'Empatou'})
        }else if(this.state.escolhaUsuario=='Tesoura'){
          this.setState({...this.state, resultado:'Ganhou'})
        }else{
          this.setState({...this.state, resultado:'Perdeu'})
        }
      default:
        this.setState({...this.state, escolhaDoComputador:'Tesoura'})
        if(this.state.escolhaUsuario=='Tesoura'){
          this.setState({...this.state, resultado:'Empatou'})
        }else if(this.state.escolhaUsuario == 'Pedra'){
          this.setState({...this.state, resultado:'Ganhou'})
        }else{
          this.setState({...this.state, resultado:'Perdeu'})
        }
        break;
    }
    
  }
  render() {
    return (
      <View>
        <Text>Escolha do computador: {this.state.escolhaDoComputador} </Text>
        <Text>Escolha do usuário: {this.state.escolhaUsuario}</Text>
        <Text>Resultado: {this.state.resultado} </Text>
        <Button title='Pedra' onPress={()=> this.jokenpo('Pedra')}></Button>
        <Button title='Papel'  onPress={()=> this.jokenpo('Papel')} ></Button>
        <Button title='Tesoura'  onPress={()=> this.jokenpo('Tesoura')}></Button>
      </View>
    );
  }
}


