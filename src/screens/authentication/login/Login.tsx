import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';

const LoginScreen: React.FC = (props: any) => {
  const {navigation} = props;

  const handleLogin = (): void => {
    navigation.navigate('Main', {screen: 'Dashboard'});
  };

  return (
    <View style={styles.root}>
      <Text>Login Screen</Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
