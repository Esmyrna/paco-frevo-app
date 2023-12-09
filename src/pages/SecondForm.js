import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Title, RadioButton } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import detalhes from '../../assets/detalhes.png'
import { useNavigation } from '@react-navigation/native';
const FormLegalDatas = () => {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');

  const [senha, setSenha] = useState('');
  const [checkedThree, setCheckedThree] = useState('true');
  const [checkedFour, setCheckedFour] = useState('true');

 
  const handleFormEventMember = () => {
    navigation.navigate("EventMemberForm");
  }
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={{ padding: 10 }}>
        <Title style={styles.titleForm}>Continuação</Title>
        <Text style={styles.titleInput}>CNPJ</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setNome(text)}
          value={nome}
        />

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.titleInput}>Pode emitir seus própios recibos</Text>
          <RadioButton
            value="true"
            status={checkedThree === 'true' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedThree('true')}
          />
          <Text>True</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton
              value="false"
              status={checkedFour === 'false' ? 'checked' : 'unchecked'}
              onPress={() => setCheckedFour('false')}
            />
            <Text>False</Text>
          </View>
        </View>

        <Text style={styles.titleInput}>Notas de história da associação</Text>
        <TextInput
          multiline
          numberOfLines={4}
          placeholder="Uma breve história da associação"
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            marginBottom: 10,
            backgroundColor: '#FFF',
            color: '#000'
          }}
        />
        <Title style={styles.titleForm}>Endereço</Title>
        <Text style={styles.titleInput}>Logradouro:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSenha(text)}
          value={senha}
          secureTextEntry
        />
        <Text style={styles.titleInput}>Número</Text>
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
        <Text style={styles.titleInput}>Bairro:</Text>
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
         <Text style={styles.titleInput}>Estado:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSenha(text)}
          value={senha}
          secureTextEntry
        />
         <Text style={styles.titleInput}>País:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSenha(text)}
          value={senha}
          secureTextEntry
        />
          <Text style={styles.titleInput}>CEP:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSenha(text)}
          value={senha}
          secureTextEntry
        />
        <TouchableOpacity onPress={handleFormEventMember} style={{ marginTop: 10, backgroundColor: '#00377B', padding: 10, borderRadius: 5 }}>
          <Text style={{ textAlign: 'center', color: '#fff' }}>Próxima etapa</Text>
        </TouchableOpacity>
        <Image
          source={detalhes}
          style={{ position: 'relative', right: 0, width: 300, height: 100, marginTop: 5 }}
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
