import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Title, RadioButton } from 'react-native-paper';
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

const EventForm = () => {
  const [nome, setNome] = useState('');
  const [nomeAgremiacao, setNomeAgremiacao] = useState('');
  const [tipoAgremiacao, setTipoAgremiacao] = useState('');
  const [cores, setCores] = useState('');
  const [integrantes, setIntegrantes] = useState('');
  const [presidente, setPresidente] = useState('');
  const [contatos, setContatos] = useState('');
  const [checkedOne, setCheckedOne] = useState('true');
  const [checkedTwo, setCheckedTwo] = useState('true');
  const navigation = useNavigation();

  const mutation = useMutation(enviarDadosParaBackend);

  const handleSocialNetworkContacts = async () => {
    navigation.navigate("SocialNetworkContactsForm");
  };


  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={{ padding: 10 }}>

        <Title style={styles.titleForm}>Membros</Title>

        <Text style={styles.titleInput}>Nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setNome(text)}
          value={nome}
        />

        <Text style={styles.titleInput}>Sobrenome:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setNomeAgremiacao(text)}
          value={nomeAgremiacao}
        />

        <Text style={styles.titleInput}>Membro ativo:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setCores(text)}
          value={cores}
          secureTextEntry
        />

        <Text style={styles.titleInput}>Tempo de atuação em meses:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTipoAgremiacao(text)}
          value={tipoAgremiacao}
          keyboardType="email-address"
        />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.titleInput}>Frevo é a principal renda?</Text>
          <RadioButton
            value="true"
            status={checkedOne === 'true' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedOne('true')}
          />
          <Text>True</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton
              value="false"
              status={checkedOne === 'false' ? 'checked' : 'unchecked'}
              onPress={() => setCheckedOne('false')}
            />
            <Text>False</Text>
          </View>
        </View>
        <Title style={styles.titleForm}>Evento</Title>
        <Text style={styles.titleInput}>Tipo de evento:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPresidente(text)}
          value={presidente}
          secureTextEntry
        />

        <Text style={styles.titleInput}>Data de realização:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPresidente(text)}
          value={presidente}
          secureTextEntry
        />
        <Text style={styles.titleInput}>Quantidade de participantes:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPresidente(text)}
          value={presidente}
          secureTextEntry
        />


        <TouchableOpacity onPress={handleSocialNetworkContacts} style={{ marginTop: 10, backgroundColor: '#00377B', padding: 10, borderRadius: 5 }}>
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

export default EventForm;
