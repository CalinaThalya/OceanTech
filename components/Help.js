import React from 'react';
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Home from './Home'; 

const Help = ({ navigation }) => {
  const goToHome = () => {
    navigation.navigate('Home'); 
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/laser para monitoramento dos oceanos - NASA - CALIOP.jpg')} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Text style={styles.title}>COMO AJUDAR ?</Text>
          <View style={styles.overlay}>
          <Text style={styles.title}>COMO AJUDAR ?</Text>
          <Text style={styles.text}>
            <Text style={styles.topic}>Redução do Uso de Plástico:</Text>
            <Text style={styles.content}> Dicas para reduzir o consumo de plástico no dia a dia, como usar sacolas reutilizáveis, garrafas de água recarregáveis e evitar produtos plásticos de uso único.</Text>
            {"\n\n"}
            <Text style={styles.topic}>Participação em Limpezas de Praias:</Text>
            <Text style={styles.content}> Incentive a participação em eventos de limpeza de praias locais, onde as pessoas podem se voluntariar para ajudar a remover o lixo das praias e evitar que ele chegue aos oceanos.</Text>
            {"\n\n"}
            <Text style={styles.topic}>Consumo Responsável de Frutos do Mar:</Text>
            <Text style={styles.content}> Eduque sobre a importância de escolher frutos do mar sustentáveis e certificados, para ajudar a proteger as populações de peixes e evitar a pesca predatória.</Text>
            {"\n\n"}
            <Text style={styles.topic}>Apoio a Organizações Ambientais:</Text>
            <Text style={styles.content}> Informe sobre como as pessoas podem fazer doações para organizações como o Greenpeace, que trabalham para proteger os oceanos e o meio ambiente.</Text>
            {"\n\n"}
            <Text style={styles.topic}>Promoção de Energias Renováveis:</Text>
            <Text style={styles.content}> Destaque a importância da transição para fontes de energia renovável, como solar e eólica, para reduzir a dependência de combustíveis fósseis e evitar a poluição dos oceanos.</Text>
            {"\n\n"}
            <Text style={styles.topic}>Conscientização sobre Derramamento de Petróleo:</Text>
            <Text style={styles.content}> Explique os impactos negativos dos derramamentos de petróleo nos ecossistemas marinhos, incluindo danos à vida marinha, contaminação da água e prejuízos econômicos para comunidades costeiras.</Text>
            {"\n\n"}
            <Text style={styles.topic}>Participação em Campanhas de Advocacia:</Text>
            <Text style={styles.content}> Incentive a participação em campanhas de advocacia e petições relacionadas à proteção dos oceanos, para pressionar governos e empresas a adotarem políticas mais sustentáveis.</Text>
            {"\n\n"}
            <Text style={styles.topic}>Educação Ambiental:</Text>
            <Text style={styles.content}> Ofereça recursos educacionais sobre a importância dos oceanos, como vídeos, artigos e atividades práticas para crianças e adultos aprenderem sobre conservação marinha.</Text>
            {"\n\n"}
            <Text style={styles.topic}>Redução da Poluição Química:</Text>
            <Text style={styles.content}> Forneça dicas sobre como evitar a descarga de produtos químicos nocivos nos ralos e sistemas de esgoto, e incentive o uso de produtos de limpeza e higiene pessoal ecologicamente corretos.</Text>
            {"\n\n"}
            <Text style={styles.topic}>Participação em Programas de Monitoramento:</Text>
            <Text style={styles.content}> Incentive a participação em programas de monitoramento da qualidade da água e da vida marinha, para ajudar cientistas e pesquisadores a entender melhor os ecossistemas oceânicos e identificar áreas de preocupação.</Text>
          </Text>
          </View>
        </View>
        <TouchableOpacity onPress={goToHome}> 
          <Image
            source={require('../assets/216242_home_icon.png')}
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

export default Help;
