import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const customButton = ({ onPress, text, type = 'Primary', bgColor, fgColor }) => {
    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.container,
                styles[`container${type}`],
                bgColor ? { backgroundColor: bgColor } : {},
            ]}
        >
            <Text
                style={[
                    styles.text,
                    styles[`text${type}`],
                    fgColor ? { color: fgColor } : {},
                ]}
            >
                {text}
            </Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 15,
        width: '100%',
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5,
    },

    containerPrimary: {
        backgroundColor: '#3B71F3',
    },

    containerSecondary: {
        borderColor: '#3B71F3',
        borderWidth: 2,
    },

    containerTertiary: {
        backgroundColor: 'transparent',
    },

    text: {
        fontWeight: 'bold',
        color: 'white',
    },

    textSecondary: {
        color: '#3B71F3',
    },

    textTertiary: {
        color: 'gray',
    },
})

export default customButton