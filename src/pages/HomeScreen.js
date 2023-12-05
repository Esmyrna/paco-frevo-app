import React from 'react';
import { ScrollView, StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native';
import { Title, Paragraph, Provider as PaperProvider } from 'react-native-paper';
import sombrinha from '../../assets/photo-sombrinha.png'
import pacoFrevo from '../../assets/photo-paco.png'
import detalhes from '../../assets/detalhes.png'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  
  const handleForm = () => {
     navigation.navigate("Form");
  };

  const handleListAll = () => {
    navigation.navigate("ListAll");
  }

  const handleListAllFrevo = () => {
    navigation.navigate("ListAllFrevo");
  }

  const handleCreateEntity = () => {
    navigation.navigate("CreateEntity");
  }


  return (
    <PaperProvider>
      <ScrollView style={styles.container}>
        <Title style={styles.title}>CONECTE-SE COM A GENTE!</Title>
        <View style={styles.viewText}>
          <Title style={styles.textTitle}>SOBRE</Title>
          <Paragraph style={styles.textParagraph}>Esse website pertence ao espaço cultural Paço do Frevo no qual foi criado com o objetivo de localizar e mapear agremiações nacionalmente e blabla
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Paragraph>
          <View style={{ flexDirection: 'row', marginTop: 30, display: 'flex', justifyContent: 'center', marginBottom: 30 }}>
            <Image
              source={sombrinha}
              style={{ position: 'relative', left: 10, width: 100, height: 100, marginRight: 10, zIndex: 1 }}
            />
            <Image
              source={pacoFrevo}
              style={{ position: 'relative', right: 25, width: 100, height: 100 }}
            />
          </View>
          <Title style={styles.title}>O QUE DESEJAS?</Title>
          <TouchableOpacity onPress={handleForm} style={{ marginTop: 10, backgroundColor: '#27962D', padding: 10, borderRadius: 5 }}>
            <Text style={{ textAlign: 'center', color: '#fff' }}>CADASTRAR AGREMIAÇÃO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: 10, backgroundColor: '#00377B', padding: 10, borderRadius: 5 }}>
            <Text onPress={handleListAll} style={{ textAlign: 'center', color: '#fff' }}>AGREMIAÇÕES CADASTRADAS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: 10, backgroundColor: '#27962D', padding: 10, borderRadius: 5 }}>
            <Text onPress={handleCreateEntity} style={{ textAlign: 'center', color: '#fff' }}>CADASTRAR FREVO MAKERS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: 10, backgroundColor: '#00377B', padding: 10, borderRadius: 5 }}>
            <Text onPress={handleListAllFrevo} style={{ textAlign: 'center', color: '#fff' }}>FREVO MAKERS CADASTRADAS</Text>
          </TouchableOpacity>
          <Image
              source={detalhes}
              style={{ position: 'relative', right: 25, width: 300, height: 100, marginTop: 30 }}
            />
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
    height: 700,

  },
  textTitle: {
    color: 'red',
    fontWeight: 600,
  },
  title: {
    textAlign: 'center',
    fontWeight: 600,
    color: 'red',
  },
  textParagraph: {
    color: '#000',
    fontWeight: '700'
  }
});

export default HomeScreen;
