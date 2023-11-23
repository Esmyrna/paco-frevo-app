import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView,TouchableOpacity, Image } from 'react-native';
import { Title } from 'react-native-paper';
import simbols from '../../assets/simbols.png'
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
const FormDatas = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [genero, setGenero] = useState('');
  const navigation = useNavigation();

  const handleFormLegalDatas = () => {
    navigation.navigate("Form-2");
 };


  const handleEnviar = () => {
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('Gênero:', genero);
  };

  const generoOptions = [
    { label: 'Masculino', value: 'masculino' },
    { label: 'Feminino', value: 'feminino' },
    { label: 'Outro', value: 'outro' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={{ padding: 10 }}>
      <Image
              source={simbols}
              style={{ position: 'relative', right: 0, width: 100, height: 60, marginTop: 5}}
            />
        <Title style={styles.titleForm}>Dados gerais:</Title>
       
        <Text style={styles.titleInput}>Nome da agremiação:</Text>
        <View style={styles.viewSelect}>
          <RNPickerSelect
            onValueChange={(value) => setGenero(value)}
            items={generoOptions}
            value={genero}
          />
        </View>

        <Text style={styles.titleInput}>Em caso de outro, especifique:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setNome(text)}
          value={nome}
        />

        <Text style={styles.titleInput}>Tipo de agremiação:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />

        <Text style={styles.titleInput}>Cores:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSenha(text)}
          value={senha}
          secureTextEntry
        />

        <Text style={styles.titleInput}>Integrantes ativos:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSenha(text)}
          value={senha}
          secureTextEntry
        />

        <Text style={styles.titleInput}>Presidente:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSenha(text)}
          value={senha}
          secureTextEntry
        />

        <Text style={styles.titleInput}>Contatos:</Text>
        <View style={styles.viewSelect}>
          <RNPickerSelect
            onValueChange={(value) => setGenero(value)}
            items={generoOptions}
            value={genero}
          />
        </View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSenha(text)}
          value={senha}
          secureTextEntry
        />
       <TouchableOpacity onPress={handleFormLegalDatas} style={{ marginTop: 10, backgroundColor: '#00377B', padding: 10, borderRadius: 5 }}>
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
