import { Text, Box, Button, VStack } from "native-base"
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../components/Header";
import TabsCustom from "../../components/TabsCustom";
import { styles } from "../Home/styles";


export default function Perfil({ navigation, route }) {
  return (
    <SafeAreaView>
      <VStack px={15} style={styles.main}>
        <Header navigation={navigation} />
        <Text style={styles.title}>Perfil</Text>
      </VStack>
      <TabsCustom navigation={navigation} route={route} />
    </SafeAreaView>
  )
}