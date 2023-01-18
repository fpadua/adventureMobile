import { View, StyleSheet, Dimensions, StatusBar, TouchableOpacity, Animated, Pressable } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { NativeBaseProvider, Box, Text, Center, useColorModeValue } from 'native-base';
import Home from '../../pages/Home';
import Perfil from '../../pages/Perfil';
import Constants from 'expo-constants';
import { useEffect, useRef, useState } from 'react';
import Login from '../../pages/Login';

const initialLayout = {
  width: Dimensions.get('window').width
};

const _routes = {
  login: Login,
  home: Home,
  perfil: Perfil
}

const renderScene = SceneMap(_routes);

function Tabs() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'login', title: 'Login' },
    { key: 'home', title: 'Home' },
    { key: 'perfil', title: 'Perfil' }
  ]);


  const renderTabBar = ({ navigationState }) => {
    const inputRange = navigationState.routes.map((x, i) => i);
    const positionValue = new Animated.Value(index);
    // console.log();
    // useEffect(() => {
    //   positionValue.setValue(index);
    //   props.navigationState.position = positionValue;
    // }, [index])
    return (
      <Box flexDirection="row">
        {navigationState.routes.map((route, i) => {
          const color = index === i ? useColorModeValue('#000', '#e5e5e5') : useColorModeValue('#1f2937', '#a1a1aa');
          const borderColor = index === i ? 'cyan.500' : useColorModeValue('coolGray.200', 'gray.400');
          return (
            <Box key={route.key} borderTopWidth="3" borderColor={borderColor} flex={1} alignItems="center" p="3" cursor="pointer">
              <Pressable onPress={() => {
                setIndex(i);
              }}>
                <Animated.Text style={{ color }}>
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return <TabView
    navigationState={{
      index,
      routes
    }}
    tabBarPosition="bottom"
    renderScene={renderScene}
    renderTabBar={renderTabBar}
    onIndexChange={setIndex}
    initialLayout={initialLayout}
    style={{
      marginTop: StatusBar.currentHeight
    }} />;
}

export default Tabs;
