import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Tabs from './navigation/tab';
import { app } from './firebase';
import { SecondScreenNavigator } from './navigation/customNavigation';

const Stack = createNativeStackNavigator();

export default function App() {

    return (
      <NavigationContainer>
           <Tabs/> 
       </NavigationContainer>  
    )    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

