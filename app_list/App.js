/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { ScrollView } from 'react-native'
import List from './public/src/list/listComponent'
import Item from './public/src/list/itemComponent'
import axios from 'axios'

export default class App extends Component{
  
  constructor(props){
    super(props)
    this.state = { productsList : [] }
  }
  
  componentWillMount(){
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html').then(response => {
        this.setState({ productsList: response.data })
    }).catch(()=>{
        console.log('Erro ao buscar os dados')
    })
  }
  
  render() {
    return (
      <ScrollView style={{ backgroundColor:'#DDD' }}>
          <List>
            {
              this.state.productsList.map( product => {
                return (
                  <Item key={product.titulo} item={ product } />
                )
              })
            }
          </List>
      </ScrollView>
    );
  }
  
}


