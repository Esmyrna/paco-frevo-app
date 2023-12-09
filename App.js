import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, RouteProp, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/pages/HomeScreen';
import LoginScreen from './src/pages/LoginScreen';
import ListAllDatas from './src/pages/FirstForm';
import FormLegalDatas from './src/pages/SecondForm';
import ListAllAssociations from './src/pages/ListAllAssociations';
import ListAllFrevoMakers from './src/pages/ListFrevoMakers';
import CreateEntityScreen from './src/pages/CreateEntityScreen'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as PaperProvider } from 'react-native-paper';
import EventForm from './src/pages/EventMemberForm';
import SocialNetworkContactsForm from './src/pages/SocialNetworkContactsForm';
import UpdateFormScreen from './src/pages/UpdateFromScreen'
const queryClient = new QueryClient();

export default function App() {
  const Stack = createStackNavigator()

  return (
    <QueryClientProvider client={queryClient}>
    <NavigationContainer>
    <PaperProvider>
      <Stack.Navigator>
         <Stack.Screen name="Login" component={LoginScreen} />
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Form" component={ListAllDatas} />
         <Stack.Screen name="Form-2" component={FormLegalDatas} />
         <Stack.Screen name="ListAll" component={ListAllAssociations} />
         <Stack.Screen name="ListAllFrevo" component={ListAllFrevoMakers} />
         <Stack.Screen name="CreateEntity" component={CreateEntityScreen} />
         <Stack.Screen name="EventMemberForm" component={EventForm} />
         <Stack.Screen name="SocialNetworkContactsForm" component={SocialNetworkContactsForm} />
         <Stack.Screen name="UpdateForm" component={UpdateFormScreen} />
      </Stack.Navigator>
      </PaperProvider>
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