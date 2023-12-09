import React, { useState } from 'react';
import { Button, StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
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

const SocialNetworkContactsForm = () => {
    const [nome, setNome] = useState('');
    const [nomeAgremiacao, setNomeAgremiacao] = useState('');
    const [tipoAgremiacao, setTipoAgremiacao] = useState('');
    const [cores, setCores] = useState('');

    const navigation = useNavigation();

    const mutation = useMutation(enviarDadosParaBackend);

    const handleEnviar = async () => {
        navigation.navigate("Form-2");
    };


    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={{ padding: 10 }}>

                <Title style={styles.titleForm}>Redes Sociais</Title>

                <Text style={styles.titleInput}>Tipo de rede social:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setNome(text)}
                    value={nome}
                />
                <Text style={styles.titleInput}>Url:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setNomeAgremiacao(text)}
                    value={nomeAgremiacao}
                />
                <Title style={styles.titleForm}>Contatos</Title>

                <Text style={styles.titleInput}>Enviar para:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setCores(text)}
                    value={cores}
                    secureTextEntry
                />
                <Text style={styles.titleInput}>Email:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setTipoAgremiacao(text)}
                    value={tipoAgremiacao}
                    keyboardType="email-address"
                />
                <Text style={styles.titleInput}>Celular:</Text>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <TextInput
                            style={styles.inputContacts}
                            placeholder="Código do país"
                        />
                        <TextInput
                            style={styles.inputContacts}
                            placeholder="DDD"
                        />
                    </View>
                    <Text style={styles.titleInput}>Número:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setTipoAgremiacao(text)}
                        value={tipoAgremiacao}
                        keyboardType="email-address"
                    />
                    <TouchableOpacity onPress={handleEnviar} style={{ marginTop: 10, backgroundColor: '#DC143C', padding: 10, width: 100, borderRadius: 5 }}>
                        <Text style={{ textAlign: 'center', color: '#fff' }}>Adicionar</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={handleEnviar} style={{ marginTop: 10, backgroundColor: '#00377B', padding: 10, borderRadius: 5 }}>
                    <Text style={{ textAlign: 'center', color: '#fff' }}>Enviar dados</Text>
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
    inputContacts: {
        width: '45%',
        backgroundColor: '#fff',
        borderColor: 'gray',
        marginBottom: 10,
        borderRadius: 10,
        height: 40,
        padding: 5
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

export default SocialNetworkContactsForm;
