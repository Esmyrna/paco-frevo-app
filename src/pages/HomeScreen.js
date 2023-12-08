import React from 'react';
import { ScrollView, StyleSheet, Image, View, TouchableOpacity, Text, Linking } from 'react-native';
import { Title, Paragraph, Provider as PaperProvider } from 'react-native-paper';
import sombrinha from '../../assets/photo-sombrinha.png'
import pacoFrevo from '../../assets/photo-paco.png'
import detalhes from '../../assets/detalhes.png'
import simbolo from '../../assets/simbols.png'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        {/* Título da página */}
        <Title style={styles.title}>CONECTE-SE COM A GENTE!</Title>
        <ScrollView style={styles.viewText}>
          {/* Subtítulo 'SOBRE' */}
          <View style={styles.textTitle}>
            <Title style={styles.title}>SOBRE O PAÇO DO FREVO</Title>
            <Image source={simbolo} style={styles.simbolo} />
          </View>
          {/* Informações sobre o paço do frevo */}
          <View style={styles.informations}>
            <View style={styles.contentAlignWithImage}>
              <Paragraph style={styles.textParagraph}>
                O Paço do Frevo é reconhecido pelo Iphan como centro de referência em ações, projetos, transmissão, salvaguarda 
                e valorização de uma das principais tradições culturais do Brasil, o Frevo. 
              </Paragraph>
              <Image source={pacoFrevo} style={styles.pacoFrevo}/>
            </View>
            <View style={styles.contentAlignWithImage}>
              <Image source={sombrinha} />
              <Paragraph style={styles.textParagraphToRight}>
                Patrimônio imaterial pela Unesco e pelo Iphan, o Frevo é um convite à celebração da vida, por meio da ativação de memórias, personalidades e linguagens artísticas, 
                que no Paço do Frevo encontram seu lugar máximo de expressão, na manutenção de ações de difusão, pesquisa e formação nas áreas da dança e da música, dos adereços e 
                das agremiações do Frevo.
              </Paragraph>
            </View>

            <View style={styles.textTitle}>
              <Title style={styles.title}>O QUE É O PROJETO?</Title>
              <Image source={simbolo} style={styles.simbolo} />
            </View>

            <Paragraph style={styles.textParagraph}>
              O Paço do Frevo está montando um banco de dados para mapear 
              quem faz a manifestação popular Patrimônio Imaterial do Brasil e 
              da humanidade, dentro e fora do Carnaval! 
            </Paragraph>
            <Paragraph style={styles.textParagraph}>
              Cadastre sua agremiação, troça, clube, bloco, 
              orquestra, grupo, atividade artística ou produção cultural e 
              siga conosco no bloco de quem mantém o Frevo vivo o ano todo!
            </Paragraph>
          </View>
          
          <TouchableOpacity onPress={handleForm} style={{ margin: 16, backgroundColor: '#27962D', padding: 10, borderRadius: 8, width: 'auto' }}>
            <Text style={{ textAlign: 'center', color: '#fff' }}>CADASTRAR AGREMIAÇÃO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 16, backgroundColor: '#00377B', padding: 10, borderRadius: 8, width: 'auto' }}>
            <Text onPress={handleCreateEntity} style={{ textAlign: 'center', color: '#FFF' }}>CADASTRAR FREVO MAKERS</Text>
          </TouchableOpacity>
          {/* <View style={{ flexDirection: 'row', marginTop: 30, display: 'flex', justifyContent: 'center', marginBottom: 30 }}>
           
          </View> */}
          <Title style={styles.title}>NÃO É ISSO QUE DESEJAS?</Title>
          <TouchableOpacity style={{ margin: 16, backgroundColor: '#27962D', padding: 10, borderRadius: 8, width: 'auto' }}>
            <Text onPress={handleListAll} style={{ textAlign: 'center', color: '#fff' }}>AGREMIAÇÕES CADASTRADAS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 16, backgroundColor: '#00377B', padding: 10, borderRadius: 8, width: 'auto' }}>
            <Text onPress={handleListAllFrevo} style={{ textAlign: 'center', color: '#fff' }}>FREVO MAKERS CADASTRADAS</Text>
          </TouchableOpacity>

          {/* Rodapé com ícones */}
          <View style={styles.footer}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/@PacodoFrevoMuseu')}>
              <Icon name="youtube" size={30} color="#FF0000" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://pacodofrevo.org.br')}>
              <Icon name="google" size={30} color="#4285F4" />
            </TouchableOpacity>
            <TouchableOpacity onPress={Linking.openURL('facebook.com/pacodofrevo')}>
              <Icon name="facebook" size={30} color="#1877f2" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com/pacodofrevo')}>
              <Icon name="instagram" size={30} color="#833AB4" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ScrollView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    position: 'relative',
    backgroundColor: '#FBFAFA'
    // height: '100vh'
    // backgroundColor: 'linear-gradient(0deg, rgba(166,15,15,1) 0%, rgba(236,55,23,1) 100%)', 
  },
  viewText: {
    // height: 700,
    gap: 8,
    paddingBottom: 20

  },
  textTitle: {
    color: '#E20821',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center'
  },
  informations: {
    gap: 16
  },
  title: {
    textAlign: 'center',
    fontWeight: 600,
    color: '#E20821',
    paddingBottom: 20,
  },
  textParagraph: {
    color: '#3F3F3F',
    fontWeight: '700',
    flex: 1,
    fontSize: 14,
    lineHeight: 24
  },
  textParagraphToRight: {
    color: '#3F3F3F',
    fontWeight: '700',
    flex: 1,
    textAlign: 'right',
    fontSize: 14,
    lineHeight: 24
  },
  simbolo :{
    width: 80,
    height: 80,
    resizeMode: 'contain',
    position: 'absolute',
    right: 0,
    top: -15,
    zIndex: 10
  },
  pacoFrevo: {
    // width: 100,
    // flex: 1,
    // height: 100,
    resizeMode: 'contain',
    alignSelf: 'flex-end', // Alinha à direita
    marginLeft: 10, // Adiciona um espaçamento à esquerda para ajuste
  },
  contentAlignWithImage: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    alignContent: 'center'
  },
  detalhesImage: {
    // width: '100%', // Adapta a largura à largura total do componente pai
    // height: 200, // Adapte a altura conforme necessário
    
    // width: 200,
    // height: 'auto',
    // height: 80,
    flex: 1,
    resizeMode: 'contain',
    resizeMode: 'cover', // ou 'contain', dependendo do comportamento desejado
    marginBottom: 16, // Adicione um espaçamento inferior para separar do próximo parágrafo
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#989898',
    paddingBottom: 8,
    paddingTop: 8,
  }
});

export default HomeScreen;
