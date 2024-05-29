import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ImageBackground } from 'react-native-web';

const Home = ({ navigation }) =>  {
  
const logout = () => {
  navigation.navigate('Login');
};


  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/Captura de tela de 2024-05-29 13-44-55.png')} style={styles.backgroundImage}>
        <Text style={styles.subtitle}>OceanTech</Text>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate('SobreNos')}>
            <View style={styles.buttonContainer}>
              <Image
                source={require('../assets/7998670.png')}
                style={styles.buttonIcon}
              />
              <Text style={styles.buttonText}>Sobre Nós</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Vazamentos')}>
            <View style={styles.buttonContainer}>
              <Image
                source={require('../assets/6324639.png')}
                style={styles.buttonIcon}
              />
              <Text style={styles.buttonText}>Vazamentos</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Ajudar')}>
            <View style={[styles.buttonContainer, styles.helpButtonContainer]}>
              <Image
                source={require('../assets/7247540.png')}
                style={styles.buttonIcon}
              />
              <Text style={styles.buttonText}>Como ajudar?</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={logout}>
          <Image
            source={require('../assets/1723876.png')}
            style={styles.logoutIcon}
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFF',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 80,
    height: '50%',
    width: '90%',
    backgroundColor: 'black',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    flex: 1,
  },
  helpButtonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIcon: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
  },
  logoutIcon: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
});

export default Home;
