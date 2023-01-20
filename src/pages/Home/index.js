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
  ScrollView,
  SectionList,
  Image
} from "native-base";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'
import { useEffect, useRef, useState } from 'react'
import { styles } from './styles';
import { Heart, MapPin } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabsCustom from "../../components/TabsCustom";
import { Header } from "../../components/Header";
import foto1 from '../../../assets/images/1.png';
import foto2 from '../../../assets/images/2.png';
import foto3 from '../../../assets/images/3.png';
import foto4 from '../../../assets/images/4.png';
import { ImageBackground } from "react-native";
import { theme } from "../../../assets/theme/default";

const Cards = ({ title, locale, bgColor, height, image }) => {
  const ref = useRef();

  const handleLike = () => {

  }

  return (
    <Box style={styles.card(bgColor, height)}>
      <Image source={image} style={styles.imageCard} alt={title} />
      <HStack width="100%" justifyContent="space-between" p={5} alignItems="flex-start">
        <VStack space={2}>
          <Text style={styles.textCard}>{title}</Text>
          <HStack alignItems="center">
            <MapPin color="#fff" weight="fill" style={{ marginRight: 2 }} size={14} />
            <Text style={{ width: 90, color: '#fff' }}>{locale}</Text>
          </HStack>
        </VStack>
        <VStack>
          <Button style={styles.buttonLike} ref={ref} onPress={() => {

          }}>
            <Heart weight="fill" color={theme.colors.rose[500]} size={18} />
          </Button>
        </VStack>
      </HStack>
    </Box>
  )
}



const Search = ({ colors, value, setValue, handleSearch }) => {
  return (
    <Input
      height={50}
      variant="rounded"
      style={[{ ...styles.searchInput, backgroundColor: colors.muted[200] }]}
      value={value}
      onChangeText={setValue}
      InputRightElement={
        <Button onPress={handleSearch} style={styles.searchButton}>
          <Icon as={Feather} name="search" size={5} color="primary.50" />
        </Button>}
      placeholder="Search adventures..."
    />
  )
}

function Home({ navigation, route }) {
  const { colors } = useTheme();
  const [search, setSearch] = useState('');
  const dados = [{
    id: 1,
    title: 'Mount Kailash',
    locale: 'Tibet',
    color: colors.amber[700],
    image: foto1
  },
  {
    id: 2,
    title: 'Pura Bratan',
    locale: 'Bali',
    color: colors.emerald[500],
    image: foto2
  },
  {
    id: 3,
    title: 'Berlin TV Tower',
    locale: 'Berlin',
    color: colors.fuchsia[500],
    image: foto3
  },
  {
    id: 4,
    title: 'Brooklyn Bridge',
    locale: 'New York City',
    color: colors.indigo[500],
    image: foto4
  }];
  const [lista, setLista] = useState(dados)

  const handleSearch = () => {
    if (!search) {
      return setLista(dados)
    }
    const findText = lista.filter(item => {
      return item.locale.indexOf(search) !== -1 || item.title.indexOf(search) !== -1
    });
    setLista(findText);
  }

  return (
    <SafeAreaView>
      <VStack px={15} style={styles.main}>
        <Header navigation={navigation} />
        <Box>
          <Text style={styles.title}>Discover</Text>
          <Search colors={colors} value={search} setValue={setSearch} handleSearch={handleSearch} />
        </Box>
        <Box mt={4} style={styles.gridCard}>
          <ScrollView style={styles.boxCard}>
            <HStack flexWrap="wrap">
              {lista.map((item, index) => {
                return (
                  <VStack space={2}>
                    <Cards
                      key={item.id}
                      title={item.title}
                      locale={item.locale}
                      bgColor={item.color}
                      image={item.image}
                      height={300}
                    />
                  </VStack>
                )
              })}
            </HStack>
          </ScrollView>
        </Box>
      </VStack>
      <TabsCustom navigation={navigation} route={route} />
    </SafeAreaView>
  )
}

export default Home;