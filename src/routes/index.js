import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from "../components/Tabs";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Perfil from "../pages/Perfil";
const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          statusBarStyle: 'dark'
        }}
      >
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false, statusBarColor: '#f6e2bd' }} />
        {/* <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}