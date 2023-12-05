import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Title } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';
import { useMutation } from 'react-query';
import { useNavigation } from '@react-navigation/native';
import simbols from '../../assets/simbols.png'
const enviarDadosParaBackend = async (dados) => {
  const response = await axios.post('sua_url_do_backend/sua_rota_do_backend', dados);

  if (!response.data) {
    throw new Error('Erro ao enviar dados para o backend');
  }

  return response.data;
};

const FormDatas = () => {
  const [nome, setNome] = useState('');
  const [nomeAgremiacao, setNomeAgremiacao] = useState('');
  const [tipoAgremiacao, setTipoAgremiacao] = useState('');
  const [cores, setCores] = useState('');
  const [integrantes, setIntegrantes] = useState('');
  const [presidente, setPresidente] = useState('');
  const [contatos, setContatos] = useState('');

  const navigation = useNavigation();

  const mutation = useMutation(enviarDadosParaBackend);

  const handleEnviar = async () => {
    navigation.navigate("Form-2");
  };


  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={{ padding: 10 }}>
        <Image
          source={simbols}
          style={{ position: 'relative', right: 0, width: 100, height: 60, marginTop: 5 }}
        />
        <Title style={styles.titleForm}>Dados gerais:</Title>

        <Text style={styles.titleInput}>Nome da agremiação</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setNome(text)}
          value={nome}
        />

        <Text style={styles.titleInput}>Em caso de outro, especifique:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setNomeAgremiacao(text)}
          value={nomeAgremiacao}
        />

        <Text style={styles.titleInput}>Tipo de agremiação:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTipoAgremiacao(text)}
          value={tipoAgremiacao}
          keyboardType="email-address"
        />

        <Text style={styles.titleInput}>Cores:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setCores(text)}
          value={cores}
          secureTextEntry
        />

        <Text style={styles.titleInput}>Integrantes ativos:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setIntegrantes(text)}
          value={integrantes}
          secureTextEntry
        />

        <Text style={styles.titleInput}>Presidente:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPresidente(text)}
          value={presidente}
          secureTextEntry
        />

      
      <Text style={styles.titleInput}>Contatos:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setContatos(text)}
          value={contatos}
          secureTextEntry
        />
       
        <TouchableOpacity onPress={handleEnviar} style={{ marginTop: 10, backgroundColor: '#00377B', padding: 10, borderRadius: 5 }}>
          <Text style={{ textAlign: 'center', color: '#fff' }}>Próxima etapa</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  titleForm: {
    color: '#E20821',
    fontWeight: 'bold',
    borderRadius: 12,
    padding: 1,
  },
  viewSelect: {
    backgroundColor: '#FFF',
    paddingVertical: 0,
    marginVertical: 0,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  titleInput: {
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10
  },
});

export default FormDatas;
