import React, { useState, useEffect } from 'react';
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity, TextInput, Button, FlatList } from 'react-native';
import axios from 'axios';

const Vazamentos = ({ navigation }) => {
  const [vazamentos, setVazamentos] = useState([]);
  const [newVazamento, setNewVazamento] = useState({ title: '', description: '' });
  const [updatingVazamento, setUpdatingVazamento] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

  useEffect(() => {
    fetchVazamentos();
  }, []);

  const fetchVazamentos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/vazamentos');
      setVazamentos(response.data);
    } catch (error) {
      console.error('Erro ao obter os vazamentos:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.vazamentoItem}>
      <Text style={styles.vazamentoTitle}>{item.title}</Text>
      <Text style={styles.vazamentoDescription}>{item.description}</Text>
      <TouchableOpacity onPress={() => handleDeleteVazamento(item.id)}>
        <Text style={styles.deleteButton}>Deletar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleEditVazamento(item)}>
        <Text style={styles.editButton}>Editar</Text>
      </TouchableOpacity>
    </View>
  );

  const handleAddVazamento = async () => {
    try {
      await axios.post('http://localhost:3000/vazamentos', newVazamento);
      fetchVazamentos();
      setNewVazamento({ title: '', description: '' });
    } catch (error) {
      console.error('Erro ao adicionar o vazamento:', error);
    }
  };

  const handleEditVazamento = (item) => {
    setUpdatingVazamento(item);
    setEditedTitle(item.title);
    setEditedDescription(item.description);
  };

  const handleSaveEditedVazamento = async () => {
    try {
      await axios.put(`http://localhost:3000/vazamentos/${updatingVazamento.id}`, {
        title: editedTitle,
        description: editedDescription
      });
      fetchVazamentos();
      setUpdatingVazamento(null);
      setEditedTitle('');
      setEditedDescription('');
    } catch (error) {
      console.error('Erro ao editar o vazamento:', error);
    }
  };

  const handleDeleteVazamento = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/vazamentos/${id}`);
      fetchVazamentos();
    } catch (error) {
      console.error('Erro ao deletar o vazamento:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/74ac2c024258adaa4088487bfc12214c.jpg')} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Text style={styles.title}>Vazamentos</Text>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Título"
              value={newVazamento.title}
              onChangeText={(text) => setNewVazamento({ ...newVazamento, title: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Descrição"
              value={newVazamento.description}
              onChangeText={(text) => setNewVazamento({ ...newVazamento, description: text })}
            />
            <Button title="Adicionar Vazamento" onPress={handleAddVazamento} />
          </View>
          {updatingVazamento && (
            <View style={styles.formContainer}>
              <TextInput
                style={styles.input}
                placeholder="Título"
                value={editedTitle}
                onChangeText={(text) => setEditedTitle(text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Descrição"
                value={editedDescription}
                onChangeText={(text) => setEditedDescription(text)}
              />
              <Button title="Salvar Edição" onPress={handleSaveEditedVazamento} />
            </View>
          )}
          <FlatList
            data={vazamentos}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
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
  vazamentoItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  vazamentoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  vazamentoDescription: {
    fontSize: 16,
    marginBottom: 5,
  },
  deleteButton: {
    color: 'red',
  },
  editButton: {
    color: 'blue',
    marginRight: 10,
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',
 

  },
});

export default Vazamentos;
