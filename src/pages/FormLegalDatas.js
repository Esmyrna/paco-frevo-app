import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView,TouchableOpacity, Image } from 'react-native';
import { Title } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import detalhes from '../../assets/detalhes.png'
const FormLegalDatas = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [genero, setGenero] = useState('');
 
  
  const generoOptions = [
    { label: 'Masculino', value: 'masculino' },
    { label: 'Feminino', value: 'feminino' },
    { label: 'Outro', value: 'outro' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={{ padding: 10 }}>
        <Title style={styles.titleForm}>Dados Jurídicos:</Title>
        <Text style={styles.titleInput}>Digite o CEP</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setNome(text)}
          value={nome}
        />

        <Text style={styles.titleInput}>Logradouro</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />

        <Text style={styles.titleInput}>Número:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSenha(text)}
          value={senha}
          secureTextEntry
        />
        
        <Text style={styles.titleInput}>Complemento:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSenha(text)}
          value={senha}
          secureTextEntry
        />
        <Text style={styles.titleInput}>Bairro</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSenha(text)}
          value={senha}
          secureTextEntry
        />
         <Text style={styles.titleInput}>Cidade:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSenha(text)}
          value={senha}
          secureTextEntry
        />
           <Text style={styles.titleInput}>UF:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSenha(text)}
          value={senha}
          secureTextEntry
        />
          <TouchableOpacity style={{ marginTop: 10, backgroundColor: '#00377B', padding: 10, borderRadius: 5 }}>
            <Text style={{ textAlign: 'center', color: '#fff' }}>Próxima etapa</Text>
        </TouchableOpacity>
        <Image
              source={detalhes}
              style={{ position: 'relative', right: 0, width: 300, height: 100, marginTop: 5}}
            />
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
  },
});

export default FormLegalDatas;
