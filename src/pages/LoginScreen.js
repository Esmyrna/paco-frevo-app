// Import necessary components and modules
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { TextInput, Button, Snackbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

// Create the LoginScreen component
const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const handleLogin = () => {
    // Perform your login logic here
    // For simplicity, let's just show a snackbar
    setSnackbarVisible(true);
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="DIGITE SEU E-MAIL"
        value={username}
        onChangeText={(text) => setUsername(text)}
        contentStyle = {{borderRadius: 5, backgroundColor: '#FFF', borderWidth: 1} }
      />
      <TextInput
        label="DIGITE SUA SENHA"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        contentStyle = {{borderRadius: 5, backgroundColor: '#FFF', borderWidth: 1} }
      />
      {/* <Button mode="contained" onPress={handleLogin} buttonColor='#00377B'>
        Login
      </Button > */}
      <TouchableOpacity style={{ marginTop: 10, backgroundColor: '#27962D', padding: 20, borderRadius: 5 }} onPress={handleLogin}>
        <Text style={{ textAlign: 'center', color: '#fff' , fontSize: 15}}>ENTRAR</Text>
      </TouchableOpacity>
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        action={{
          label: 'OK',
          onPress: () => setSnackbarVisible(false),
        }}
      >
        Login realizado!
      </Snackbar>
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
});

export default LoginScreen;
