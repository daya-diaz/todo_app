import React from "react";

import { ActivityIndicator, Text, TouchableHighlightProps, TouchableOpacity } from 'react-native';
import { style } from "./styles";

type ButtonProps = TouchableHighlightProps & {
  text: string,
  loading?: boolean,
  onPress: () => void 
}

export function Button(props: ButtonProps) {
  const { text, loading, onPress, ...rest} = props;

  return(
    <TouchableOpacity
     style={style.button} 
     onPress={onPress}  
     disabled={loading}
     activeOpacity={0.7}
    >
          { loading ? (
            <ActivityIndicator color="#fff" size="small" />
          ) : (
            <Text style={style.textButton}>{text}</Text>
          ) }
    </TouchableOpacity>
  )
}