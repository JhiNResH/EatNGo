import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import Login from '../screens/Login/Login';
import SignUp from '../screens/Signup/Signup';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';
import ConfirmEmail from '../components/ConfirmEmail/ConfirmEmail';
import NewPassword from '../components/NewPassword/NewPassword';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Sign In" component={Login} />
                <Stack.Screen name="Sign Up" component={SignUp} />
                <Stack.Screen name="Forgot Password" component={ForgotPassword} />
                <Stack.Screen name="Confirm Email" component={ConfirmEmail} />
                <Stack.Screen name="New Password" component={NewPassword} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation