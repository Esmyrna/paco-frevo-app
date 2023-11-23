import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, RouteProp, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/pages/HomeScreen';
import LoginScreen from './src/pages/LoginScreen';
import ListAllDatas from './src/pages/FormDatas';
import FormLegalDatas from './src/pages/FormLegalDatas';
import ListAllAssociations from './src/pages/ListAllAssociations';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App() {
  const Stack = createStackNavigator()

  return (
    <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="Login" component={LoginScreen} />
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Form" component={ListAllDatas} />
         <Stack.Screen name="Form-2" component={FormLegalDatas} />
         <Stack.Screen name="ListAll" component={ListAllAssociations} />
     
      </Stack.Navigator>
    </NavigationContainer>
    </QueryClientProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});