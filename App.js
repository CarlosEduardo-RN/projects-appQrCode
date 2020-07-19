/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import QRCode from 'react-native-qrcode-svg';
import { View, Text,  TextInput, StyleSheet, TouchableHighlight, Image } from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = { value:'oi', input:'oi' }
  }
  _modificaTexto(texto){
    this.setState({value: this.state.value = texto})
  }
  _modificaQrCode(){
    this.setState({input: this.state.input = this.state.value})
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.primeiraView}>
          <Image source={require('./img/logo.png')} />
          <TextInput style={styles.imput} placeholder="Insira sua URL" onChangeText={texto => this._modificaTexto(texto)}></TextInput>
          <TouchableHighlight onPress={() => this._modificaQrCode()} underlayColor="transparent">
            <View style={styles.button}>
              <Text style={styles.txt}> Gerar QrCode</Text>
            </View>
          </TouchableHighlight>  
        </View>
        <View style={styles.container}>
          <QRCode
          value={this.state.input}
          size={150}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  primeiraView:{
    flex:1,
    width: '100%',
    alignItems:'center',
    justifyContent: 'center',
    padding: 5
  },
  imput:{
    borderWidth: 2,
    borderColor: '#000',
    height: 40,
    width: '100%',
    borderRadius: 7
  },
  button:{
    marginTop: 15,
    height: 50,
    width: 100,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 10
  },
  txt:{
    fontSize: 12,
    color:'#fff'
  }

});