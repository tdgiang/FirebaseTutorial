import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import auth from '@react-native-firebase/auth';
const Login = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const AnonymusLogin = () => {
    auth()
      .signInAnonymously()
      .then(() => {
        setIsLogin(true);
        console.log('User signed in anonymously');
      })
      .catch((error) => {
        if (error.code === 'auth/operation-not-allowed') {
          console.log('Enable anonymous in your firebase console.');
        }

        console.error(error);
      });
  };

  const onRegister = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((loginUser) => {
        console.log('User account created & signed in!');
        console.log(loginUser);
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  const loginEmail = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((loginData) => {
        console.log('Sign succeed');
        setIsLogin(true);
        console.log(loginData);
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>
        {isLogin ? 'Login successed' : 'Chua login'}
      </Text>

      <TextInput
        onChangeText={(val) => setEmail(val)}
        placeholder={'email'}
        style={styles.txtInput}
        autoCapitalize={'none'}
      />
      <TextInput
        onChangeText={(val) => setPassword(val)}
        placeholder={'password'}
        style={styles.txtInput}
        autoCapitalize={'none'}
      />

      <TouchableOpacity style={styles.btn} onPress={AnonymusLogin}>
        <Text>Login Anonymus</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={loginEmail}>
        <Text>Login Email</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={onRegister}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  btn: {
    width: 200,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: 'red',
  },
  txtInput: {
    paddingVertical: 5,
    fontSize: 20,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 0.7,
    height: 40,
    width: 300,
    paddingHorizontal: 10,
    marginTop: 10,
  },
});

export default Login;
