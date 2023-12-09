import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { fetchAssociationById } from '../../api/api';
import { Card, Title, Paragraph } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';

const ViewAssociationPage = ({ associationId }) => {
  const [association, setAssociation] = useState(null);
  const route = useRoute();

  useEffect(() => {
    const { itemId } = route.params;

    const fetchData = async () => {
      try {
        const fetchedAssociation = await fetchAssociationById(itemId);
        setAssociation(fetchedAssociation);
      } catch (error) {
        console.error("Erro ao buscar associação:", error);
      }
    };

    fetchData();
  }, [route.params]);


  return (
    <ScrollView style={styles.container}>
      {association ? (
        <Card style={styles.card}>
          <Card.Content style={{ gap: 20, }}>
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
              <>
                <Title style={styles.greenTitle}>Endereço:</Title>
                <View style={styles.innerCard}>
                  <Paragraph style={styles.text}>{association.address.addressSite}, {association.address.number}{association.address.complement}</Paragraph>
                  <Paragraph style={styles.text}>{association.address.district}</Paragraph>
                  <Paragraph style={styles.text}>{association.address.city}, {association.address.state}, {association.address.country}</Paragraph>
                  <Paragraph style={styles.text}>CEP: {association.address.zipCode}</Paragraph>
                </View>
              </>
            )}

            {association.events && (
              <ScrollView>
                <Title style={styles.blueTitle}>Eventos:</Title>
                {association.events.map(event => (
                  <View key={event.id} style={styles.innerCard}>
                    <Paragraph style={styles.text}>Tipo: {event.eventType}</Paragraph>
                    <Paragraph style={styles.text}>Data: {new Date(event.dateOfAccomplishment).toLocaleDateString()}</Paragraph>
                    <Paragraph style={styles.text}>Número de Participantes: {event.participantsAmount}</Paragraph>
                  </View>
                ))}
              </ScrollView>
            )}

            {association.members && (
              <ScrollView>
                <Title style={styles.greenTitle}>Membros:</Title>
                {association.members.map(member => (
                  <View key={member.id} style={styles.innerCard}>
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
                  <View key={network.id} style={styles.innerCard}>
                    <Paragraph style={styles.text}>Tipo: {network.socialNetworkType}</Paragraph>
                    <Paragraph style={styles.text}>URL: {network.url}</Paragraph>
                  </View>
                ))}
              </ScrollView>
            )}

            {association.contacts && (
              <ScrollView>
                <Title style={styles.blueTitle}>Contatos:</Title>
                {association.contacts.map(contact => (
                  <View key={contact.id} style={styles.innerCard}>
                    <Paragraph style={styles.text}>Destinatário: {contact.addressTo}</Paragraph>
                    <Paragraph style={styles.text}>Email: {contact.email}</Paragraph>
                    {/* {contact.phoneNumbers.map(phoneNumber => (
                      <View key={phoneNumber.id}>
                        <Paragraph style={styles.text}>Telefone: ({phoneNumber.areaCode}) {phoneNumber.number}</Paragraph>
                      </View>
                    ))} */}
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
    backgroundColor: '#FF5231',
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
  innerCard: {
    margin: 10,
    padding: 5,
    gap: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#127200",
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
    color: '#FF5231',
  },
  redTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    textAlign: 'left',
    color: '#FF5231', // Vermelho
  },
  yellowTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    textAlign: 'left',
    color: '#FFF43E', // Amarelo
  },
  blueTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    textAlign: 'left',
    color: '#1E90FF', // Azul
  },
  greenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    textAlign: 'left',
    color: '#127200',
  },
  subTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    color: '#FF5231',
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
    color: '#FF5231',
  },
});

export default ViewAssociationPage;
