// Import necessary components and modules
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { TextInput, Button, Snackbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import LogoPF from '../../assets/logo-paco.png';

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
      <Image source={LogoPF} style={{ width: 60, height: 80, display: 'flex', alignSelf: 'center', marginTop: 25 }} />
      <View style={styles.inputsContainer}>
        <TextInput
          label="DIGITE SEU E-MAIL"
          value={username}
          onChangeText={(text) => setUsername(text)}
          contentStyle={{ borderRadius: 5, backgroundColor: '#FFF', borderWidth: 1 }}
        />
        <TextInput
          label="DIGITE SUA SENHA"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          contentStyle={{ borderRadius: 5, backgroundColor: '#FFF', borderWidth: 1 }}
        />
        {/* <Button mode="contained" onPress={handleLogin} buttonColor='#00377B'>
        Login
      </Button > */}
        <TouchableOpacity style={{ marginTop: 10, backgroundColor: '#27962D', padding: 20, borderRadius: 5 }} onPress={handleLogin}>
          <Text style={{ textAlign: 'center', color: '#fff', fontSize: 15 }}>ENTRAR</Text>
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
  },
  inputsContainer: {
    justifyContent: 'center',
    padding: 16,
    paddingBottom: 26,
    gap: 25,
  },
});

export default LoginScreen;
