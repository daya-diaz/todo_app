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
    paddingHorizontal: 37
  },
  boxBottom: {
    height: Dimensions.get('window').height/3,
    width: '100%',
    paddingHorizontal: 37,
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
  label: {
    marginLeft: 5,
    color: themes.colors.bodyText,
    marginVertical: 8,
    fontSize: 16,
    fontWeight: "500"
  },
  input: {
    height: '100%',
    width: '94%',
    borderRadius: 8,
    backgroundColor: themes.colors.bgInput,
  },
  boxInput: {
    width: '100%',
    height: 54,
    borderWidth: 1,
    borderColor: themes.colors.border,
    backgroundColor: themes.colors.bgInput,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12
  },
  button: {
    width: '100%',
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themes.colors.primary,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.26,
    shadowRadius: 4.65,
    elevation: 7
  },
  textButton: {
    color: themes.colors.bgApp,
    fontWeight: "600",
    fontSize: 16
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