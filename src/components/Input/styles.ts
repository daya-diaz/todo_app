import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
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
    paddingHorizontal: 12,
    marginBottom: 12
  },
  icon: {
    width: '100%'
  }
})