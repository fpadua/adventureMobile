import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { Box, NativeBaseProvider } from 'native-base'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { theme } from './assets/theme/default';
import Login from './src/pages/Login';
import { Routes } from './src/routes';

export default function App() {
  return (
      <NativeBaseProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        
        <Routes />
      </NativeBaseProvider>
  );
}

