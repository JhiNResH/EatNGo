import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../customButton'

const SocialSignInButtons = () => {
    const SignInGmail = () => {
        console.warn('Sign In with Gmail');
    }

    const SignInX = () => {
        console.warn('Sign In with X');
    }

    const SignInApple = () => {
        console.warn('Sign In with Apple');
    }

    const ConnectWallet = () => {
        console.warn('Connect Wallet');
    }
    return (
        <>
            <CustomButton
                text="Sign In with Gmail"
                onPress={SignInGmail}
                bgColor="#FAE9EA"
                fgColor="#DD4D44"
            />
            <CustomButton
                text="Sign In with Apple"
                onPress={SignInApple}
                bgColor="#e3e3e3"
                fgColor="#363636"
            />
            <CustomButton
                text="Sign In with X"
                onPress={SignInX}
                bgColor="#F3F3F3"
                fgColor="#363636"
            />
            <CustomButton
                text="Connet Wallet"
                onPress={ConnectWallet}
                bgColor="#E9F6FF"
                fgColor="#3B71F3"
            />
        </>
    )
}

export default SocialSignInButtons