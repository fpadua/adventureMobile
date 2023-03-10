import { VStack, Text, Button, ZStack, Box, Heading } from "native-base";
import { Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import Styles from './styles'

import background from '../../../assets/images/bg_home.png';

function Login({ navigation }) {
  return (
    <SafeAreaView>
      <ZStack style={Styles.main}>
        <Image source={background} style={Styles.imagem} />
        <VStack px={15} style={Styles.container}>
          <Box>
            <Heading style={Styles.boxTitle}>
              <Text style={Styles.title}>Adventure is</Text>
              <Text style={Styles.title}>worthwhile!</Text>
            </Heading>
            <Box style={Styles.boxSubtitle}>
              <Text style={Styles.subtitle}>
                Find and try a new experience with just a few clicks
              </Text>
            </Box>
          </Box>
          <Button
            style={Styles.button}
            onPress={() => navigation.navigate('Home')}
            success
            small
          >
            <Text style={Styles.buttonText}>Get started</Text>
          </Button>
        </VStack>
      </ZStack>
    </SafeAreaView>
  )
}



export default Login;