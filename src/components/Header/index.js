import { Avatar, Button, HStack, Icon } from "native-base"
import { Feather } from '@expo/vector-icons'
import { styles } from "../../pages/Home/styles"

export const Header = ({ navigation }) => {
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