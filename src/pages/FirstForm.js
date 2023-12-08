import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Title, RadioButton } from 'react-native-paper';
import simbols from '../../assets/simbols.png'
import { useMutation } from 'react-query';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


const FormDatas = () => {
  const navigation = useNavigation();
  const submitFormData = async (formData) => {
    console.log(formData)
    formData.foundationDate = new Date();
    const response = await axios.post('https://pacodofrevoapi1-6ka9yo5l.b4a.run/associations', formData);
    console.log(response.data);
    if (!response.data.success) {
      throw new Error('Erro ao enviar dados');
    }
    return response.data;
  };

  const mutation = useMutation(submitFormData, {
    onSuccess: () => {
      navigation.navigate('Form-2');
    },
    onError: (error) => {
      console.error('Erro ao enviar dados para o backend', error);
    },
  });

  const handleSendData = () => {
    mutation.mutate({
      name: nome,
      foundationDate: dataFundacao,
      colors: cores.split(',').map(color => color.trim()),
      associationType: tipoAgremiacao,
      activeMembers: parseInt(integrantes),
      isSharedWithAResidence: residencia === 'true',
      hasOwnedHeadquarters: sede === 'true',
      isLegalEntity: entidadeLegal === 'true',
      canIssueOwnReceipts: entidadeLegal === 'true',
      cnpj: "34430746000157",
      associationHistoryNotes: "historia",
      address: {
        addressSite: "Rua Exemplo, 123",
        number: "123",
        complement: "Sala 4",
        district: "Bairro Exemplo",
        city: "Cidade Exemplo",
        state: "SP",
        country: "BR",
        zipCode: "12345-678"
      },
      events: [
        {
          eventType: "Exemplo de evento",
          dateOfAccomplishment: "2023-11-05T14:30:00.000Z",
          participantsAmount: 100
        }
      ],
      members: [
        {
          name: "João",
          surname: "Silva",
          role: "Membro Ativo",
          actuationTimeInMonths: 12,
          isFrevoTheMainRevenueIncome: true
        }
      ],
      socialNetworks: [
        {
          socialNetworkType: "Facebook",
          url: "https://www.facebook.com/seu-usuario"
        }
      ],
      contacts: [
        {
          addressTo: "Pedro",
          email: "contato@example.com",
          phoneNumbers: []
        }
      ]
    });
  };

  const [nome, setNome] = useState('');
  const [dataFundacao, setDataFundacao] = useState('');
  const [cores, setCores] = useState('');
  const [tipoAgremiacao, setTipoAgremiacao] = useState('');
  const [integrantes, setIntegrantes] = useState('');
  const [residencia, setResidencia] = useState('true');
  const [sede, setSede] = useState('true');
  const [entidadeLegal, setEntidadeLegal] = useState('');
  const [checkedOne, setCheckedOne] = useState('true');
  const [checkedTwo, setCheckedTwo] = useState('true');



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

        <Text style={styles.titleInput}>Data de fundação:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setDataFundacao(text)}
          value={dataFundacao}
        />

        <Text style={styles.titleInput}>Cores:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setCores(text)}
          value={cores}

        />

        <Text style={styles.titleInput}>Tipo de agremiação:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTipoAgremiacao(text)}
          value={tipoAgremiacao}
        />

        <Text style={styles.titleInput}>Integrantes ativos:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setIntegrantes(text)}
          value={integrantes}

        />

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.titleInput}>É residência compartilhada?</Text>
          <RadioButton
            value={sede}
            status={checkedOne === 'true' ? 'checked' : 'unchecked'}
            onPress={() => setSede(s => (s === 'true' ? 'false' : 'true'))}
          />
          <Text>True</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton
              value={sede}
              status={checkedOne === 'false' ? 'checked' : 'unchecked'}
              onPress={() => setSede(s => (s === 'true' ? 'false' : 'true'))}
            />
            <Text>False</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.titleInput}>Possui sede própria?</Text>
          <RadioButton
            value={sede}
            status={checkedOne === 'true' ? 'checked' : 'unchecked'}
            onPress={() => setSede(s => (s === 'true' ? 'false' : 'true'))}
          />
          <Text>True</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton
              value={sede}
              status={checkedOne === 'false' ? 'checked' : 'unchecked'}
              onPress={() => setSede(s => (s === 'true' ? 'false' : 'true'))}
            />
            <Text>False</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.titleInput}>É uma entidade legal?</Text>
          <RadioButton
            value={entidadeLegal}
            status={checkedTwo === 'true' ? 'checked' : 'unchecked'}
            onPress={() => setEntidadeLegal(e => (e === 'true' ? 'false' : 'true'))}
          />
          <Text>True</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton
              value={entidadeLegal}
              status={checkedTwo === 'false' ? 'checked' : 'unchecked'}
              onPress={() => setEntidadeLegal(e => (e === 'true' ? 'false' : 'true'))}
            />
            <Text>False</Text>
          </View>
        </View>
        <TouchableOpacity onPress={handleSendData} style={{ marginTop: 10, backgroundColor: '#00377B', padding: 10, borderRadius: 5 }}>
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
