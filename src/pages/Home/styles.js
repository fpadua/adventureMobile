import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../../assets/theme/default";



export const styles = StyleSheet.create({
  main: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
  buttonAvatar: {
    backgroundColor: 'transparent'
  },
  headerMain: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10
  },
  title: {
    fontSize: 50,
    color: '#26254d',
    fontWeight: '900',
    lineHeight: 60,
    marginBottom: 20
  },
  searchInput: {
    position: 'relative',
    borderRadius: 50,
    fontSize: 18
  },
  searchButton: {
    position: 'absolute',
    right: 0,
    backgroundColor: '#333367',
    borderRadius: 50,
    margin: 5,
  },
  gridCard: {
    width: '100%',
  },
  card: (bgColor, height) => ({
    width: (Dimensions.get('screen').width / 2) - 20,
    borderRadius: 20,
    padding: 20,
    backgroundColor: bgColor ?? '#333',
    height: height
  }),
  textCard: {
    width: 100,
    flexWrap: 'wrap',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333367',
    lineHeight: 24,
  },
  buttonLike: {
    backgroundColor: '#fff',
    borderRadius: 50
  }

})