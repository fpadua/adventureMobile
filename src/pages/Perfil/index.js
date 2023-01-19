import { Text, Box, Button, VStack } from "native-base"
import { SafeAreaView } from "react-native-safe-area-context";
import TabsCustom from "../../components/TabsCustom";
import { styles } from "../Home/styles";


export default function Perfil({ navigation, route }) {
  return (
    <SafeAreaView>
      <VStack px={15} style={styles.main}>
        <Text>Perfil</Text>
        <TabsCustom navigation={navigation} route={route} />
      </VStack>
    </SafeAreaView>
  )
}