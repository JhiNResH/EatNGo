import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import User from '../customInput';
import CustomButton from '../customButton';
import SocialSignInButtons from '../SocialSignInButtons.js/SocialSignInButtons';
import { text } from 'body-parser';


const ForgotPassword = () => {
    const [username, setUsername] = useState('');


    const sendPressed = () => {
        console.warn('Sent');
    }

    const signInPressed = () => {
        console.warn('Sign In');
    }

    const resendPressed = () => {
        console.warn('Resent');
    }

    const backtosigninPressed = () => {
        console.warn('Back to Sign In');
    }

    return (
        //showsVerticalScrollIndicator={false}=>消除滾動條
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>
                    Reset Your Password
                </Text>
                <User
                    placeholder="Username"
                    value={username}
                    setValue={setUsername} />

                <CustomButton
                    text="Send"
                    onPress={sendPressed}
                />

                <CustomButton
                    text="Back to Sign In"
                    onPress={backtosigninPressed}
                    type="Tertiary"
                />
            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#3B71F3',
        fontSize: 12,
        fontWeight: 'bold',
    }

})

export default ForgotPassword

