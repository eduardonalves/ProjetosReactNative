import React, {Component} from 'react'
import {View, Button} from 'react-native'
export default class BtnEscolha extends Component{
    
    render(){
        return (
            <View style={this.props.styleBtn}>
              <Button title={this.props.title} onPress={this.props.jokenpo}></Button>
            </View>
        )
    }
    
}