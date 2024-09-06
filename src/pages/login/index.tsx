import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { style } from "./styles";
import Logo from "../../assets/logo.png";
import { themes } from "../../global/themes";
import { Input } from "../../components/Input";
import { MaterialIcons, FontAwesome, Octicons } from '@expo/vector-icons'
import { Button } from "../../components/Button";


export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

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
        <Input 
          title="E-mail"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          IconRight={MaterialIcons} 
          iconRightName="email" 
          placeholder="Digite seu e-mail"
        />
        <Input 
          title="Senha" 
          onChangeText={setPassword}

          value={password}
          IconRight={Octicons} 
          iconRightName={showPassword ? "eye-closed" : "eye"}
          secureTextEntry={showPassword}
          onIconRightPress={() => setShowPassword(!showPassword)}
          placeholder="Digite sua senha"
        />
      </View>

      <View style={style.boxBottom}>
        <Button text="Entrar" onPress={handleLogin} loading={loading} />
      </View>

      <Text style={style.createAccountLink}>
        Não tem conta? <Text style={style.bold}>Crie agora</Text>
      </Text>
    </View>
  );
}
