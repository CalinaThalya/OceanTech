import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';

const DeleteAccount = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleDeleteAccount = () => {
    if (!email || !senha) {
      showMessage({
        message: 'Erro',
        description: 'Por favor, preencha todos os campos.',
        type: 'danger',
      });
      return;
    }

    axios.get('http://localhost:3000/users')
      .then(response => {
        const users = response.data;
        const user = users.find(user => user.email === email && user.senha === senha);

        if (user) {
          axios.delete(`http://localhost:3000/users/${user.id}`)
            .then(() => {
              showMessage({
                message: 'Sucesso',
                description: 'Sua conta foi deletada com sucesso.',
                type: 'success',
              });
              navigation.navigate('Login');
            })
            .catch(error => {
              console.error('Erro ao deletar conta:', error);
              showMessage({
                message: 'Erro',
                description: 'Ocorreu um erro ao deletar sua conta.',
                type: 'danger',
              });
            });
        } else {
          showMessage({
            message: 'Erro',
            description: 'Email ou senha inválidos.',
            type: 'danger',
          });
        }
      })
      .catch(error => {
        console.error('Erro ao verificar credenciais:', error);
        showMessage({
          message: 'Erro',
          description: 'Ocorreu um erro ao verificar suas credenciais.',
          type: 'danger',
        });
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tem certeza de que deseja excluir sua conta?</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#000"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        placeholderTextColor="#000"
      />
      <Button title="Confirmar Exclusão" onPress={handleDeleteAccount} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
    color:  '#0034ED',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default DeleteAccount;
