import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Title, RadioButton } from 'react-native-paper';
import simbols from '../../assets/simbols.png';
import { useMutation } from 'react-query';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { fetchAssociationById } from '../../api/api';

const UpdateFormScreen = ({ route }) => {
  const navigation = useNavigation();
  const { associationId } = route.params;
  const [nome, setNome] = useState('');
  const [dataFundacao, setDataFundacao] = useState('');
  const [cores, setCores] = useState('');
  const [tipoAgremiacao, setTipoAgremiacao] = useState('');
  const [integrantes, setIntegrantes] = useState('');
  const [sede, setSede] = useState('true');
  const [cnpj, setCnpj] = useState('');
  const [historia, setHistoria] = useState('');
  const [entidadeLegal, setEntidadeLegal] = useState('');
  const [checkedOne, setCheckedOne] = useState('true');
  const [checkedTwo, setCheckedTwo] = useState('true');
  const [associationData, setAssociationData] = useState({
    name: '',
    foundationDate: '',
    colors: '',
    associationType: '',
    activeMembers: '',
    isSharedWithAResidence: 'true',
    hasOwnedHeadquarters: 'true',
    isLegalEntity: 'true',
    canIssueOwnReceipts: 'true',
    cnpj: '',
    associationHistoryNotes: '',
  });

  const submitUpdate = async () => {
    try {
      console.log(associationId);
      const response = await axios.put(`https://pacodofrevoapi1-6ka9yo5l.b4a.run/associations/id/${associationId}`, associationData);

      console.log(response.data);

      if (!response.data.success) {
        throw new Error('Erro ao atualizar dados');
      }
    navigation.navigate("ListAll")
 
    } catch (error) {
      console.error('Error updating association:', error.message);
    }
  };

  useEffect(() => {
    const fetchAssociationData = async () => {
      try {
        const response = await fetchAssociationById(associationId)
        setAssociationData(response); 
      } catch (error) {
        console.error('Error fetching association data:', error.message);
      }
    };
  
    fetchAssociationData();
  }, [associationId]);

  const mutation = useMutation(submitUpdate);

  const handleSendData = () => {
    mutation.mutate();
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

        <Text style={styles.titleInput}>Conte um pouco sobre a agremiação:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setHistoria(text)}
          value={historia}
        />

        <Text style={styles.titleInput}>Cnpj:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setCnpj(text)}
          value={cnpj}
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
          <Text style={{ textAlign: 'center', color: '#fff' }}>Enviar</Text>
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
        borderRadius: 10,
        padding: 10,
      },
});

export default UpdateFormScreen;
