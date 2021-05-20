import React from 'react';
import { Button, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import navigationStrings from '../constants/navigationStrings';
import { LoginScreen,VerificationScreen} from '../Screen/index';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <React.Fragment>
      <Stack.Screen options={{ headerShown: false }} name={navigationStrings.LOGIN} component={LoginScreen} />
      <Stack.Screen options={{ headerShown: false }} name={navigationStrings.VERIFICATION_SCREEN} component={VerificationScreen} />

      


    </React.Fragment>
  );
}

export default AuthStack;