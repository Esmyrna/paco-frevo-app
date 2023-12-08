// Import necessary components and modules
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, ImageBackground } from 'react-native';
import { TextInput, Button, Snackbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import LogoPF from '../../assets/logo-paco.png';
import HomePaco from '../../assets/home-sobre-predio.png'
import { Flyout } from '../components/Flyout';
import { Righteous_400Regular } from '@expo-google-fonts/righteous';
// import PacoFrevo from '../../assets/paco-do-frevo.JPG'

// Create the LoginScreen component
const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const handleLogin = () => {
    navigation.navigate("Home", {
      itemId: 86,
      otherParam: "anything you want here",
    });
    setSnackbarVisible(true);
  };
  const [isFlyoutOpen, setFlyoutOpen] = useState(false);

  const openFlyout = () => {
    setFlyoutOpen(true);
  };

  const closeFlyout = () => {
    setFlyoutOpen(false);
  };

  return (
    <ImageBackground source={HomePaco} style={styles.background}>
      <View style={styles.container}>
        {/* <Image source={HomePaco} style={{ width: 80, height: 90, display: 'flex', alignSelf: 'center', marginTop: 25 }} /> */}
        <View style={styles.inputsContainer}>
          <View style={styles.inputsWrapper}>
            <Text style={styles.textStyle}>Email</Text>
            <TextInput
              label="Digite seu E-mail"
              value={username}
              onChangeText={(text) => setUsername(text)}
              style={styles.input}
              // contentStyle={{ borderRadius: 8, backgroundColor: '#FFF', borderWidth: 1, borderColor: '#989898' }}
            />
          </View>
          <View style={styles.inputsWrapper}>
            <Text style={styles.textStyle}>Senha</Text>
            <TextInput
              label="Digite sua senha"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={styles.input}
              // contentStyle={{ borderRadius: 8, backgroundColor: '#FFF', borderWidth: 1, borderColor: '#989898' }}
            />
          </View>
          <TouchableOpacity style={{ marginTop: 10, backgroundColor: '#27962D', padding: 12, borderRadius: 5, }} onPress={handleLogin}>
            <Text style={{ textAlign: 'center', color: '#000', fontSize: 15 }}>Acessar</Text>
          </TouchableOpacity>
          <Snackbar
            visible={snackbarVisible}
            onDismiss={() => setSnackbarVisible(false)}
            action={{
              label: 'OK',
              onPress: () => setSnackbarVisible(false),
            }}
            style={{ marginBottom: -70, }}
          >
            Login realizado!
          </Snackbar>
        </View>
      </View>
    </ImageBackground>
    
  );
};

// Define the styles for the components
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // ou 'stretch' para cobrir toda a área
    justifyContent: 'center', // ou 'flex-end', 'flex-start'
    alignItems: 'center', // ou 'flex-end', 'flex-start'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    // gap: 25,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
    // backgroundColor: 'linear-gradient(0deg, rgba(166,15,15,1) 0%, rgba(236,55,23,1) 100%)', 
  },
  inputsContainer: {
    justifyContent: 'center',
    padding: 30,
    // paddingBottom: 32,
    gap: 25,
    backgroundColor: '#D3D3D3',
    borderRadius: 8,
  },
  inputsWrapper: {
    gap: 8,
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 24,
    color: '#3f3f3f'
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#989898',
    underlineColor: 'transparent', // Isso remove o underline padrão
  },
});

export default LoginScreen;
