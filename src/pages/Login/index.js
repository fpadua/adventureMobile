import { HStack, VStack, Text, Button, ZStack } from "native-base";
import { useState } from "react";
import { StyleSheet, Image, View, ImageBackground, Dimensions } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from '../../../assets/images/logo.png';

import { theme } from '../../../assets/theme/default'
import Tabs from "../../components/Tabs";
import { Main } from './styles'

import background from '../../../assets/images/bg_home.png';

function Login() {
  const navigation = useNavigation();
  const route = useRoute();

  const navegar = () => {
    navigation.navigate('Home')
  }
  return (
    <SafeAreaView>
      <ZStack style={styles.main}>
        <Image source={background} style={styles.imagem} />
        <VStack px={15} style={styles.container}>
          <Button
            onPress={navegar}
            success
            small
          >
            <Text style={styles.buttonText}>Ir para Home</Text>
          </Button>
          <Button
            onPress={() => navigation.navigate('Tabs')}
            success
            small
          >
            <Text style={styles.buttonText}>Tabs</Text>
          </Button>
        </VStack>
      </ZStack>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  container: {
    flex: 1,
  },
  imagem: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    resizeMode:'cover',
  },
  button: {
    width: 100,
    background: theme.colors.blue,
    padding: '5px 10px'
    // width: 3,
    // zIndex: 1
  },
  buttonText: {
    color: theme.colors.text[500],
  }
});

export default Login;