import { Box, HStack, Text } from "native-base";
import { Container } from "./styles";
import { House, Heart, User, Bookmark } from 'phosphor-react-native';
import { useState } from "react";
import { Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const menus = ['Home', 'Heart', 'Bookmark', 'Perfil']

function TabsCustom({ navigation, route }) {
  const id = route.params?.index;
  const [selected, setSelected] = useState(id ?? 0)

  const navegar = (index) => {
    navigation.navigate(menus[index], { index })
  }

  return (
    <Container>
      <HStack justifyContent="space-around" px={5}>
        <Pressable onPress={() => navegar(0)}>
          <House size={24} weight="fill" color={selected === 0 ? '#333367' : '#c3c2d2'} />
        </Pressable>
        <Pressable onPress={() => setSelected(1)}>
          <Heart size={24} weight="fill" color={selected === 1 ? '#333367' : '#c3c2d2'} />
        </Pressable>
        <Pressable onPress={() => setSelected(2)}>
          <Bookmark size={24} weight="fill" color={selected === 2 ? '#333367' : '#c3c2d2'} />
        </Pressable>
        <Pressable onPress={() => navegar(3)}>
          <User size={24} weight="fill" color={selected === 3 ? '#333367' : '#c3c2d2'} />
        </Pressable>
      </HStack>
    </Container>
  );
}

export default TabsCustom;