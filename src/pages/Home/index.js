import {
  Box,
  Button,
  HStack,
  Text,
  VStack,
  Avatar,
  Icon,
  Input,
  useTheme,
  Heading,
  Card,
  CardItem,
  Body,
  Content,
  Container,
  Divider,
  Stack
} from "native-base";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'
import { styles } from './styles';
import { Heart, MapPin } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabsCustom from "../../components/TabsCustom";

const Header = ({ navigation }) => {
  return (
    <HStack style={styles.headerMain}>
      <Icon as={Feather} name="menu" style={styles.iconMenu} size={6} />
      <Button
        onPress={() => navigation.navigate('Login')}
        style={styles.buttonAvatar}

      >
        <Avatar
          source={{
            uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          }} >Avatar</Avatar>
      </Button>
    </HStack>
  )
}

const Search = ({ colors, }) => {
  return (
    <Input
      height={50}
      variant="rounded"
      style={[{ ...styles.searchInput, backgroundColor: colors.muted[200] }]}
      InputRightElement={
        <Button onPress={() => { }} style={styles.searchButton}>
          <Icon as={Feather} name="search" size={5} color="primary.50" />
        </Button>}
      placeholder="Search adventures..."
    />
  )
}

const Cards = ({
  title = 'Goiânia',
  locale = 'Brasil',
  bgColor = '#333',
  height = 100
}) => {
  return (

    <Box style={styles.card(bgColor, height)}>
      <HStack width="100%" justifyContent="space-between" alignItems="flex-start">
        <VStack space={2}>
          <Text style={styles.textCard}>{title}</Text>
          <HStack alignItems="center">
            <MapPin color="#fff" weight="fill" style={{ marginRight: 2 }} size={14} />
            <Text style={{ width: 90 }}>{locale}</Text>
          </HStack>
        </VStack>
        <VStack>
          <Button style={styles.buttonLike}>
            <Heart weight="fill" color="#04ac89" size={18} />
          </Button>
        </VStack>
      </HStack>
    </Box>
  )
}

function Home({ navigation, route }) {
  const { colors } = useTheme();

  return (
    <SafeAreaView>
      <VStack px={15} style={styles.main}>
        <Header navigation={navigation} />
        <Box>
          <Text style={styles.title}>Discover</Text>
          <Search colors={colors} />
        </Box>
        <Box mt={4} style={styles.gridCard}>
          <HStack display={'flex'} space={2}>
            <VStack space={2}>
              <Cards
                title="Mount Kailash"
                locale="Tibet"
                bgColor={colors.amber[700]}
                height={300}
              />
              <Cards
                title="Pura Bratan"
                locale="Bali"
                bgColor={colors.emerald[500]}
                height={180}
              />
            </VStack>
            <VStack space={2}>
              <Cards
                title="Berlin TV Tower"
                locale="Berlin"
                bgColor={colors.fuchsia[500]}
                height={180}
              />
              <Cards
                title="Brooklyn Bridge"
                locale="New York City"
                bgColor={colors.indigo[500]}
                height={300}
              />
            </VStack>
          </HStack>
        </Box>
      </VStack>
      <TabsCustom navigation={navigation} route={route} />
    </SafeAreaView>
  )
}

export default Home;