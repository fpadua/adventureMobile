import styled from 'styled-components/native';
import { StyleSheet, Image, View, ImageBackground, Dimensions } from "react-native";
import { theme } from '../../../assets/theme/default';

const Styles = StyleSheet.create({
  main: {
    flex: 1,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    background: 'red'
  },
  container: {
    height: Dimensions.get('window').height,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  imagem: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    resizeMode:'cover',
  },
  boxTitle: {
    marginTop: 20
  },
  title: {
    fontSize: 50,
    color: '#26254d',
    fontWeight: '900',
    lineHeight: 60
  },
  boxSubtitle: {
    marginTop: 20
  },
  subtitle: {
    color: '#26254d',
    lineHeight: 30,
    fontSize: 25,
  },
  button: {
    position: 'absolute',
    bottom: 50,
    borderRadius: 50,
    backgroundColor: '#04ac89',
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 0,
    fontSize: 25,
    lineHeight: 30,
    color: theme.colors.white,
  }
});

export default Styles;