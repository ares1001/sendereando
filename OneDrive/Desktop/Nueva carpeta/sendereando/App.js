import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ForgetScreen from './src/screens/ForgetScreen';
import SuccessScreen from './src/screens/SuccessScreen';
import TrailsScreen from './src/screens/TrailsScreen';
import PopularesScreen from './src/screens/PopularesScreen';
import DatosScreen from './src/screens/DatosScreen'
import SendScreen from './src/screens/SendScreen'
import OkRutaScreen from './src/screens/OkRutaScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import EditOkScreen from './src/screens/EditOkScreen'
import SignUpOkScreen from './src/screens/SignUpOkScreen'
import * as SplashScreen from 'expo-splash-screen';
const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={ {headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
        <Stack.Screen name="Forget" component={ForgetScreen} />
        <Stack.Screen name="Trails" component={TrailsScreen}/>
        <Stack.Screen name="Populares" component={PopularesScreen}/>
        <Stack.Screen name="Datos" component={DatosScreen}/>
        <Stack.Screen name="Send" component={SendScreen}/>
        <Stack.Screen name="OkRuta" component={OkRutaScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="EditOk" component={EditOkScreen}/>
        <Stack.Screen name="SignUpOk" component={SignUpOkScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App