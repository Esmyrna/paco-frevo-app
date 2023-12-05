import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Title } from 'react-native-paper';
import FormDadosGerais from './FormDadosGerais';
import FormEndereco from './FormEndereco';
import FormEventos from './FormEventos';
import FormMembros from './FormMembros';
import FormRedesSociais from './FormRedesSociais';
import FormContatos from './FormContatos';
import axios from 'axios';
import { useMutation } from 'react-query';

const enviarDadosParaBackend = async (dados) => {
  const response = await axios.post('sua_url_do_backend/sua_rota_do_backend', dados);

  if (!response.data) {
    throw new Error('Erro ao enviar dados para o backend');
  }

  return response.data;
};

const FormAssociacao = () => {
  const [dadosAssociacao, setDadosAssociacao] = useState({
    name: '',
    foundationDate: '',
    colors: [],
    associationType: '',
    activeMembers: 0,
    isSharedWithAResidence: false,
    hasOwnedHeadquarters: false,
    isLegalEntity: false,
    cnpj: '',
    canIssueOwnReceipts: false,
    associationHistoryNotes: '',
    address: {
      addressSite: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      state: '',
      country: '',
      zipCode: '',
    },
    events: [
      {
        eventType: '',
        dateOfAccomplishment: '',
        participantsAmount: 0,
      },
    ],
    members: [
      {
        name: '',
        surname: '',
        role: '',
        actuationTimeInMonths: 0,
        isFrevoTheMainRevenueIncome: false,
      },
    ],
    socialNetworks: [
      {
        socialNetworkType: '',
        url: '',
      },
    ],
    contacts: [
      {
        addressTo: '',
        email: '',
        phoneNumbers: [
          {
            countryCode: '',
            areaCode: '',
            number: '',
          },
        ],
      },
    ],
  });

  const mutation = useMutation(enviarDadosParaBackend);

  const handleEnviar = async () => {
    try {
      await mutation.mutateAsync(dadosAssociacao);

      console.log('Dados enviados com sucesso!');
      // Se necessário, navegar para a próxima etapa ou fazer outras ações
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={{ padding: 10 }}>
        <Title style={styles.titleForm}>Dados da Associação:</Title>

        <FormDadosGerais dados={dadosAssociacao} setDados={setDadosAssociacao} />
        <FormEndereco dados={dadosAssociacao.address} setDados={(endereco) => setDadosAssociacao({ ...dadosAssociacao, address: endereco })} />
        <FormEventos dados={dadosAssociacao.events} setDados={(eventos) => setDadosAssociacao({ ...dadosAssociacao, events: eventos })} />
        <FormMembros dados={dadosAssociacao.members} setDados={(membros) => setDadosAssociacao({ ...dadosAssociacao, members: membros })} />
        <FormRedesSociais dados={dadosAssociacao.socialNetworks} setDados={(redesSociais) => setDadosAssociacao({ ...dadosAssociacao, socialNetworks: redesSociais })} />
        <FormContatos dados={dadosAssociacao.contacts} setDados={(contatos) => setDadosAssociacao({ ...dadosAssociacao, contacts: contatos })} />

        <TouchableOpacity onPress={handleEnviar} style={{ marginTop: 10, backgroundColor: '#00377B', padding: 10, borderRadius: 5 }}>
          <Text style={{ textAlign: 'center', color: '#fff' }}>Enviar Dados</Text>
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
});

export default FormAssociacao;
