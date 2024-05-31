import React, { useState } from 'react';
import { View, ImageBackground, Text, TextInput, Button, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';


const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const fazerLogin = () => {
    axios.get('http://localhost:3000/users')
      .then(response => {
        const users = response.data;
        const user = users.find(user => user.email === email && user.senha === senha);

        if (user) {
          navigation.navigate('Home');
        } else {
          showMessage({
            message: 'Erro',
            description: 'Usuário ou senha inválidos!',
            type: 'danger',
          });
        }
      })
      .catch(error => {
        console.error('Erro ao fazer login:', error);
        showMessage({
          message: 'Erro',
          description: 'Ocorreu um erro ao fazer login.',
          type: 'danger',
        });
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/laser para monitoramento dos oceanos - NASA - CALIOP.jpg')} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Text style={styles.title}>OceanTech</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="EMAIL"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor="#FFF"
            />
            <TextInput
              style={styles.input}
              placeholder="SENHA"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
              placeholderTextColor="#FFF"
            />
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
              <Button title="Entrar" color="#0034ED" onPress={fazerLogin} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.registerText}>Não tem uma conta? Registre agora</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 55,
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    padding: 10,
  },
  input: {
    height: 50,
    borderColor: '#0034ED',
    borderRadius: 15,
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: 'gray',
    color: '#FFF',
    paddingHorizontal: 10,
  },
  forgotPassword: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#FFF',
    alignSelf: 'flex-end',
    marginBottom: 50,
  },
  buttonContainer: {
    height: 90,
    width: 200,
    alignSelf: 'center',
  },
  registerText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#FFF',
    marginBottom: 50,
  },
});

export default Login;
