// Import necessary components and modules
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { TextInput, Button, Snackbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import LogoPF from '../../assets/logo-paco.png';
import HomePaco from '../../assets/home-sobre-predio.png'

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

  return (
    
    <View style={styles.container}>
      <Image source={HomePaco} style={{ width: 80, height: 90, display: 'flex', alignSelf: 'center', marginTop: 25 }} />
      <View style={styles.inputsContainer}>
        <TextInput
          label="Digite seu E-mail"
          value={username}
          onChangeText={(text) => setUsername(text)}
          contentStyle={{ borderRadius: 5, backgroundColor: '#FFF', borderWidth: 0 }}
        />
        <TextInput
          label="Digite sua senha"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          contentStyle={{ borderRadius: 5, backgroundColor: '#FFF', borderWidth: 0, }}
        />
      
        <TouchableOpacity style={{ marginTop: 10, backgroundColor: '#DCDCDC', padding: 12, borderRadius: 5, }} onPress={handleLogin}>
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
  );
};

// Define the styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    gap: 25,
    
    backgroundColor: 'linear-gradient(0deg, rgba(166,15,15,1) 0%, rgba(236,55,23,1) 100%)', 
  },
  inputsContainer: {
    justifyContent: 'center',
    padding: 10,
    paddingBottom: 32,
    gap: 25,
  },
});

export default LoginScreen;
