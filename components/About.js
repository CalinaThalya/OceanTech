import React from 'react';
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const About = ({ navigation }) => {

  const goToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/Captura de tela de 2024-05-29 13-44-55.png')} style={styles.backgroundImage}>
        <View style={styles.overlay}>
        <TouchableOpacity onPress={goToHome}> 
          <Image
            source={require('../assets/216242_home_icon.png')}
            style={styles.logoutIcon}
          />
        </TouchableOpacity>
          <Text style={styles.title}>Sobre nós?</Text>
          <Text style={styles.topic}>Explicação do projeto</Text>
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
    padding: 20,
  },
  title: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
  },
  text: {
    color: '#FFF',
    fontSize: 15,
    lineHeight: 25,
  },
  topic: {
    fontWeight: 'bold',
  },
  content: {
    marginLeft: 10,
  },
  logoutIcon: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
});

export default About;
