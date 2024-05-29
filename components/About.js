import React from 'react';
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const About = ({ navigation }) => {

  const goToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/74ac2c024258adaa4088487bfc12214c.jpg')} style={styles.backgroundImage}>
      <TouchableOpacity onPress={goToHome}> 
          <Image
            source={require('../assets/216242_home_icon.png')}
            style={styles.logoutIcon}
          />
        </TouchableOpacity>
        <View style={styles.overlay}>
        
          <Text style={styles.title}>Sobre nós?</Text>
          <Text style={styles.topic}>Explicação do projeto</Text>
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
