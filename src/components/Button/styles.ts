import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
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
})