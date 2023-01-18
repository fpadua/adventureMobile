import { Box, Button, Text, VStack } from "native-base";
import { useNavigation, useRoute } from '@react-navigation/native';


export default function Home() {
  const navigation = useNavigation();
  const route = useRoute();

  const navegar = () => {
    navigation.navigate('Perfil');
  }

  return (
    <VStack px={15}>
      <Box>
        <Text>Home</Text>
        <Button onPress={navegar}>
          Perfil
        </Button>
        <Button onPress={() => navigation.navigate('Login')} primary>
          Voltar ao Login
        </Button>

      </Box>
    </VStack>

  )
}