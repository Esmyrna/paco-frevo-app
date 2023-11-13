import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, RouteProp, useNavigation } from "@react-navigation/native";
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/pages/HomeScreen';


export default function App() {

  const Stack = createStackNavigator()

  
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>

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