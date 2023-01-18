import { VStack, Text, Button, ZStack, Box } from "native-base";
import { Image } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Styles from './styles'

import background from '../../../assets/images/bg_home.png';

function Login() {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <SafeAreaView>
      <ZStack style={Styles.main}>
        <Image source={background} style={Styles.imagem} />
        <VStack px={15} style={Styles.container}>
          <Box>
            <Box style={Styles.boxTitle}>
              <Text style={Styles.title}>Adventure is</Text>
              <Text style={Styles.title}>worthwhile!</Text>
            </Box>
            <Box style={Styles.boxSubtitle}>
              <Text style={Styles.subtitle}>
                Find and try a new experience with just a few clicks
              </Text>
            </Box>
          </Box>
          <Button
            style={Styles.button}
            onPress={() => navigation.navigate('Tabs')}
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