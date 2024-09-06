import React, { forwardRef, Fragment, LegacyRef } from "react";

import { Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';
import { style } from "./styles";
import { themes } from "../../global/themes";
import { MaterialIcons, FontAwesome, Octicons } from '@expo/vector-icons'

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                     React.ComponentType<React.ComponentProps<typeof Octicons>>;

type InputProps = TextInputProps & {
  IconLeft?: IconComponent,
  IconRight?: IconComponent,
  iconLeftName?: string,
  iconRightName?: string,
  title?: string,
  onIconLeftPress?: () => void,
  onIconRightPress?: () => void,
  keyboardType?: string,
  placeholder?: string,
}

export const Input = forwardRef((props: InputProps, ref: LegacyRef<TextInput> | null) => {
  const { IconLeft, IconRight, iconLeftName, iconRightName, title, onIconLeftPress, onIconRightPress, keyboardType, placeholder, ...rest } = props;

  const calculateSizeWidth = () => {
    if(IconLeft && IconRight) {
      return '84%';
    } else if(IconLeft || IconRight) {
      return '92%'
    } else {
      return '100%'
    }
  }
  return (
    <Fragment>
      <Text style={style.label}>{title}</Text>
        <View style={style.boxInput}>
          {
            IconLeft && iconLeftName && (
              <TouchableOpacity onPress={onIconLeftPress}>
                <IconLeft name={iconLeftName as any} size={20} color={themes.colors.bodyText} style={style.icon} />
              </TouchableOpacity>
            )
          }
          <TextInput
            style={[style.input, { width: calculateSizeWidth() }]}
            keyboardType={keyboardType}
            placeholder={placeholder}
            {...rest}
          />

          {
            IconRight && iconRightName && (
              <TouchableOpacity onPress={onIconRightPress}>
                <IconRight name={iconRightName as any} size={20} color={themes.colors.bodyText} style={style.icon} />
              </TouchableOpacity>
            )
          }
        </View>
    </Fragment>
  )
})