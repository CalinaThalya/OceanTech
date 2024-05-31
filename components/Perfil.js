import React from 'react';
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Perfil = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/74ac2c024258adaa4088487bfc12214c.jpg')} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Text style={styles.title}>Perfil</Text>
          <Text style={styles.topic}>O que deseja</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DeleteAccount')}>
            <Text style={styles.buttonText}>Deletar a conta?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.buttonText}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UserList')}>
            <Text style={styles.buttonText}>Ver lista de usuários</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 OceanTech. Todos os direitos reservados.</Text>
      </View>
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
    padding: 20,
  },
  title: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
  },
  topic: {
    color: '#FFF',
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0034ED',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 10,
  },
  footerText: {
    color: '#FFF',
    fontSize: 14,
  },
});

export default Perfil;
