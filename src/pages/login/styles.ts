import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themes.colors.bgApp
  },
  boxTop: {
    height: Dimensions.get('window').height/3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxMid: {
    height: Dimensions.get('window').height/4,
    width: '100%',
    paddingHorizontal: 36
  },
  boxBottom: {
    height: Dimensions.get('window').height/3,
    width: '100%',
    paddingHorizontal: 36,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 90,
    height: 90
  },
  title: {
    fontWeight: 'bold',
    marginTop: 32,
    color: themes.colors.bodyText,
    fontSize: 24
  },
  createAccountLink: {
    color: themes.colors.bodyText,
    fontSize: 16
  },
  bold: {
    fontWeight: 'bold', 
    textDecorationLine: 'underline', 
  },
})