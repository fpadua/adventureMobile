import { useNavigation, useRoute } from "@react-navigation/native";
import { Text, Box, Button, VStack } from "native-base"


export default function Perfil() {
  const navigation = useNavigation();
  const route = useRoute();

  const navegar = () => {
    navigation.navigate('Home');
  }

  return (
    <VStack px={15}>
      <Text>Perfil</Text>
      <Button onPress={navegar}>
        Home
      </Button>
    </VStack>
  )
}