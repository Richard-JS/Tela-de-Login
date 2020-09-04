
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity, Alert } from 'react-native';


export default function App() {
  
  clicou = () => {
    Alert.alert("Cadastro", "Cadastrado com sucesso")
  }

  return (
    <View style={styles.container}>

       <Image
        source={require('./src/assets/fundopizza.png')}
        style={styles.logo}
       />
     
        <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        />
        <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Digite sua senha"
        />
        
        <TouchableOpacity 
        style = {styles.botao} 
        onPress = { () => {this.clicou()}} >

          <Text style={styles.botaotext}>Login</Text>
          
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#000'
  },
  logo:{
    width:380,
    marginTop:-140,
    borderRadius:1,
    resizeMode:'contain'
  },
  input:{
    marginTop:10,
    padding:10,
    width:300,
    backgroundColor:'#fff',
    fontSize:16,
    fontWeight:"bold",
    borderRadius:3
    
  },
  botao:{
    width:300,
    height:42,
    backgroundColor:'#3498db',
    marginTop:10,
    borderRadius:4,
    alignItems:'center',
    justifyContent:"center"
  },
  botaotext:{
    fontSize:16,
    fontWeight:"bold",
    color:'#fff'
  }
});
