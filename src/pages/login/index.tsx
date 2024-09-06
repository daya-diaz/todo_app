import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { style } from "./styles";
import Logo from "../../assets/logo.png";
import { MaterialIcons } from '@expo/vector-icons';
import { themes } from "../../global/themes";

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const validateFields = () => {
    if (!email || !password) {
      Alert.alert('Atenção', 'Preencha os campos obrigatórios.');
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (!validateFields()) return;

    setLoading(true);
    try {
      // Simulação de chamada API
      setTimeout(() => {
        if (email === 'dayadiazprofissional@gmail.com' && password === '123456') {
          Alert.alert('Login realizado com sucesso!', 'Redirecionando...');
        } else {
          Alert.alert('Erro', 'Usuário não encontrado.');
        }
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Erro ao realizar login:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao tentar realizar o login.');
      setLoading(false);
    }
  };

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
        <Text style={style.title}>Seja bem-vindo(a)</Text>
      </View>

      <View style={style.boxMid}>
        <Text style={style.label}>E-mail</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholder="Digite seu e-mail"
          />
          <MaterialIcons name="email" size={20} color={themes.colors.bodyText} />
        </View>

        <Text style={style.label}>Senha</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="Digite sua senha"
          />
          <MaterialIcons name="remove-red-eye" size={20} color={themes.colors.bodyText} />
        </View>
      </View>

      <View style={style.boxBottom}>
        <TouchableOpacity style={style.button} onPress={handleLogin} disabled={loading}>
          {loading ? (
            <ActivityIndicator color="#fff" size="small" />
          ) : (
            <Text style={style.textButton}>Entrar</Text>
          )}
        </TouchableOpacity>
      </View>

      <Text style={style.createAccountLink}>
        Não tem conta? <Text style={style.bold}>Crie agora</Text>
      </Text>
    </View>
  );
}
