import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { fetchAssociationById } from '../../api/api';
import { Card, Title, Paragraph } from 'react-native-paper';

const ViewAssociationPage = () => {
  const [association, setAssociation] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedAssociation = await fetchAssociationById("cc26deb9-b9b4-4b28-8788-684134d24855");
        setAssociation(fetchedAssociation);
      } catch (error) {
        console.error("Erro ao buscar associação:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {association ? (
        <Card style={styles.card}>
          <Card.Content style = {{gap: 20,}}>
            <Title style={styles.title}>Detalhes da Associação</Title>
            <Paragraph style={styles.text}>Nome: {association.name}</Paragraph>
            <Paragraph style={styles.text}>Data de Fundação: {association.foundationDate}</Paragraph>
            <Paragraph style={styles.text}>Tipo de Associação: {association.associationType}</Paragraph>
            <Paragraph style={styles.text}>Membros Ativos: {association.activeMembers}</Paragraph>
            <Paragraph style={styles.text}>Possui Sede Própria: {association.hasOwnedHeadquarters ? 'Sim' : 'Não'}</Paragraph>
            <Paragraph style={styles.text}>É Pessoa Jurídica: {association.isLegalEntity ? 'Sim' : 'Não'}</Paragraph>
            <Paragraph style={styles.text}>CNPJ: {association.cnpj}</Paragraph>
            <Paragraph style={styles.text}>Histórico da Associação: {association.associationHistoryNotes}</Paragraph>

            {association.address && (
              <View>
                <Title style={styles.yellowTitle}>Endereço:</Title>
                <Paragraph style={styles.text}>{association.address.addressSite}, {association.address.number}{association.address.complement}</Paragraph>
                <Paragraph style={styles.text}>{association.address.district}</Paragraph>
                <Paragraph style={styles.text}>{association.address.city}, {association.address.state}, {association.address.country}</Paragraph>
                <Paragraph style={styles.text}>CEP: {association.address.zipCode}</Paragraph>
              </View>
            )}

            {association.events && (
              <ScrollView>
                <Title style={styles.blueTitle}>Eventos:</Title>
                {association.events.map(event => (
                  <View key={event.id}>
                    <Paragraph style={styles.text}>Tipo: {event.eventType}</Paragraph>
                    <Paragraph style={styles.text}>Data: {event.dateOfAccomplishment}</Paragraph>
                    <Paragraph style={styles.text}>Número de Participantes: {event.participantsAmount}</Paragraph>
                  </View>
                ))}
              </ScrollView>
            )}

            {association.members && (
              <ScrollView>
                <Title style={styles.subTitle}>Membros:</Title>
                {association.members.map(member => (
                  <View key={member.id}>
                    <Paragraph style={styles.text}>Nome: {member.name}</Paragraph>
                    <Paragraph style={styles.text}>Sobrenome: {member.surname}</Paragraph>
                    <Paragraph style={styles.text}>Cargo: {member.role}</Paragraph>
                  </View>
                ))}
              </ScrollView>
            )}

            {association.socialNetworks && (
              <ScrollView>
                <Title style={styles.subTitle}>Redes Sociais:</Title>
                {association.socialNetworks.map(network => (
                  <View key={network.id}>
                    <Paragraph style={styles.text}>Tipo: {network.socialNetworkType}</Paragraph>
                    <Paragraph style={styles.text}>URL: {network.url}</Paragraph>
                  </View>
                ))}
              </ScrollView>
            )}

            {association.contacts && (
              <ScrollView>
                <Title style={styles.yellowTitle}>Contatos:</Title>
                {association.contacts.map(contact => (
                  <View key={contact.id}>
                    <Paragraph style={styles.text}>Destinatário: {contact.addressTo}</Paragraph>
                    <Paragraph style={styles.text}>Email: {contact.email}</Paragraph>
                  </View>
                ))}
              </ScrollView>
            )}

          </Card.Content>
        </Card>
      ) : (
        <Text style={styles.loadingText}>Carregando...</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5252',
  },
  card: {
    margin: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    gap: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    textAlign: 'center',
    color: '#FF5252',
  },
  redTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    textAlign: 'left',
    color: '#FF5252', // Vermelho
  },
  yellowTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    textAlign: 'left',
    color: '#FFD700', // Amarelo
  },
  blueTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    textAlign: 'left',
    color: '#1E90FF', // Azul
  },
  subTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    color: '#FF5252',
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
    color: '#333',
  },
  loadingText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
    color: '#FF5252',
  },
});

export default ViewAssociationPage;
