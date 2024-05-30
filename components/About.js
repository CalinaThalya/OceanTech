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
          <Text style={styles.topic}>Projeto Ocean Tech da Global Solution</Text>
          <Text style={styles.content}> O projeto Ocean Tech, desenvolvido pela Global Solution, tem como principal objetivo monitorar vazamentos de petróleo nos oceanos, utilizando tecnologias avançadas e parcerias estratégicas para promover a proteção ambiental.</Text>
            {"\n\n"}
          <Text style={styles.topic}>Equipe:</Text>
          <Text style={styles.content}> Calina Thalya Santana da Silva </Text>
          <Text style={styles.content}> ANA PAULA NASCIMENTO SILVA </Text>
          <Text style={styles.content}> Geovana Ribeiro Domingos Silva</Text>
          <Text style={styles.content}>  LEONARDO CAMARGO LUCENA </Text>
          <Text style={styles.content}>   NATHAN NUNES CALSONARI</Text>
          {"\n\n"}
          <Text style={styles.topic}>  Objetivo do Projeto</Text>
          <Text style={styles.content}>A missão do Ocean Tech é detectar e monitorar vazamentos de petróleo no mar, minimizando assim os danos ambientais causados por esses incidentes. Para alcançar esse objetivo, o projeto combina o uso de uma API fornecida pela NASA, que realiza o monitoramento dos oceanos, com uma sofisticada tecnologia de machine learning.</Text>
        </View>
        {"\n\n"}
        <Text style={styles.topic}>Tecnologia Utilizada</Text>
        <Text style={styles.content}>O projeto foi desenvolvido em React Native, utilizando a tecnologia de machine learning para realizar a detecção de vazamentos de petróleo no mar. A API da NASA fornece dados e imagens detalhadas dos oceanos, permitindo um acompanhamento contínuo e preciso das condições marítimas. Nossa tecnologia de machine learning foi rigorosamente treinada para analisar essas imagens e identificar padrões que indicam a presença de vazamentos de petróleo. Esse sistema de identificação é extremamente eficiente e pode detectar rapidamente qualquer anomalia que sugira um derramamento.</Text>
        {"\n\n"}
       <Text style={styles.topic}>Processo de Detecção e Alerta</Text>
       <Text style={styles.content}>Quando nosso sistema detecta um vazamento de petróleo, um alerta é imediatamente enviado para os usuários cadastrados, incluindo autoridades ambientais, empresas responsáveis e ONGs parceiras. Esse sistema de alerta rápido permite uma resposta imediata, essencial para minimizar os impactos ambientais.</Text>
       {"\n\n"}
       <Text style={styles.topic}>Parcerias Estratégicas</Text>
      <Text style={styles.content}>A Global Solution busca estabelecer parcerias com organizações não governamentais (ONGs) dedicadas à preservação ambiental, como o Greenpeace. Essas ONGs desempenham um papel crucial na fiscalização e enfrentamento de empresas que desrespeitam as normas de saúde ambiental. Com o apoio dessas organizações, o Ocean Tech não só monitora, mas também contribui ativamente para a responsabilização e mitigação dos danos causados por vazamentos de petróleo.
</Text>
{"\n\n"}
<Text style={styles.topic}>Conclusão</Text>
<Text style={styles.content}>O projeto Ocean Tech representa um avanço significativo na proteção dos oceanos contra a poluição por petróleo. Combinando tecnologia de ponta e parcerias estratégicas, a Global Solution está comprometida em promover um futuro mais sustentável e seguro para nossos ecossistemas marinhos.</Text>
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
