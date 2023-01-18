import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import Home from '../../pages/Home';
import Perfil from '../../pages/Perfil';
import { House, PersonSimple, User } from 'phosphor-react-native';
import { Box, VStack, Text } from 'native-base';


const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <VStack flex={1} safeArea>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={Perfil}
          screenOptions={({ route, navigation }) => {
            return ({
              tabBarShowLabel: () => { return null },
              tabBarLabel: ({ focused }) => null,
              tabBarIcon: ({ focused, color, size }) => {
                if (route.name === 'Home') {
                  return <House color={focused ? 'tomato' : 'gray'} />;
                } else if (route.name === 'Perfil') {
                  return <User color={focused ? 'tomato' : 'gray'} />;
                }
              },
              // tabBarActiveTintColor: 'tomato',
              // tabBarInactiveTintColor: 'gray',
            })
          }}
        >
          <Tab.Screen name="Home" component={Home} options={({ route }) => ({
            title: false,
            headerShown: false,
            tabBarStyle: { display: route.name !== 'Home' ? 'flex' : 'none' }
          })} />
          <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
      </NavigationContainer>
    </VStack>
  );
}