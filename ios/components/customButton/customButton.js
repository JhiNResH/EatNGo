import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const customButton = ({ onPress, text, type = 'Primary' }) => {
    return (
        <Pressable
            onPress={onPress}
            style={[styles.container,
            styles[`container${type}`
            ]]}
        >
            <Text style={[styles.text, styles[`text${type}`]]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3B71F3',
        padding: 15,
        width: '100%',
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5,
    },

    containerPrimary: {
        backgroundColor: '#3B71F3',
    },

    containerTertiary: {
        backgroundColor: 'transparent',
    },

    text: {
        fontWeight: 'bold',
        color: 'white',
    },

    textTertiary: {
        color: 'gray',
    },
})

export default customButton