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
    <PaperProvider style={styles.container}>
      <ScrollView style={styles.container}>
        <Title style={styles.title}>CONECTE-SE COM A GENTE!</Title>
        <View style={styles.viewText}>
    
          <Paragraph style={styles.textParagraph}>Esse website pertence ao espaço cultural Paço do Frevo no qual foi criado com o objetivo de localizar e mapear agremiações nacionalmente e blabla
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Paragraph>
          <View style={{ flexDirection: 'row', marginTop: 30, display: 'flex', justifyContent: 'center', marginBottom: 30 }}>
           
          </View>
          <Title style={styles.title}>O QUE DESEJAS?</Title>
          <TouchableOpacity onPress={handleForm} style={{ marginTop: 10, backgroundColor: '#00377B', padding: 10, borderRadius: 5 }}>
            <Text style={{ textAlign: 'center', color: '#fff' }}>CADASTRAR AGREMIAÇÃO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: 10, backgroundColor: '#DCDCDC', padding: 10, borderRadius: 5 }}>
            <Text onPress={handleListAll} style={{ textAlign: 'center', color: '#000' }}>AGREMIAÇÕES CADASTRADAS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: 10, backgroundColor: '#DCDCDC', padding: 10, borderRadius: 5 }}>
            <Text onPress={handleCreateEntity} style={{ textAlign: 'center', color: '#000' }}>CADASTRAR FREVO MAKERS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: 10, backgroundColor: '#00377B', padding: 10, borderRadius: 5 }}>
            <Text onPress={handleListAllFrevo} style={{ textAlign: 'center', color: '#fff' }}>FREVO MAKERS CADASTRADAS</Text>
          </TouchableOpacity>
  
        </View>
      </ScrollView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'linear-gradient(0deg, rgba(166,15,15,1) 0%, rgba(236,55,23,1) 100%)', 
  },
  viewText: {
    height: 700,

  },
  textTitle: {
    color: '#fff',
    fontWeight: 600,
   
  },
  title: {
    fontWeight: 600,
    color: '#fff',
    paddingBottom: 20
  },
  textParagraph: {
    color: '#FFF',
    fontWeight: '700'
  }
});

export default HomeScreen;
