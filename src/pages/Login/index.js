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
      <ZStack className={styles.main}>
        <Image source={background} className={styles.imagem} />
        <VStack px={15} className={styles.container}>
          <Button
            onPress={navegar}
            success
            small
          >
            <Text className={styles.buttonText}>Ir para Home</Text>
          </Button>
          <Button
            onPress={() => navigation.navigate('Tabs')}
            success
            small
          >
            <Text className={styles.buttonText}>Tabs</Text>
          </Button>
        </VStack>
      </ZStack>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,

  },
  imagem: {
    flex: 1,
    width: 'auto',
    height: '100%',
    resizeMode: 'contain',
    justifyContent: 'center'
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