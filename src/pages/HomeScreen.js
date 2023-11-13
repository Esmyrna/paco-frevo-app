import React from 'react';
import { ScrollView, StyleSheet, Image, View } from 'react-native';
import { Appbar, Button, Card, Title, Paragraph, Provider as PaperProvider } from 'react-native-paper';

const HomeScreen = () => {
  return (
    <PaperProvider>
      <ScrollView style={styles.container}>
      <Title style={styles.title}>CONECTE-SE COM A GENTE!</Title>
          <View style={styles.viewText}>
            <Title style={styles.textTitle}>SOBRE</Title>
            <Paragraph style={styles.textParagraph}>Esse website pertence ao espaço cultural Paço do Frevo no qual foi criado com o objetivo de localizar e mapear agremiações nacionalmente e blabla
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Paragraph>
          </View>
      </ScrollView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  viewText: {
    height: 300,
  },
  textTitle: {
    color: 'red',
    fontWeight: 600,
  },
  title: {
    textAlign: 'center',
    fontWeight: 600,
    color: 'red'
  },
  textParagraph: {
    color: '#000',
    fontWeight: '700'
  }
});

export default HomeScreen;
