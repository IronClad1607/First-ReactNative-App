import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
    const greeting = 'Bye there!'


    return (<View>
        <Text style={styles.textStyle}>{greeting}</Text>
        <Text>Hi there</Text>
    </View>);
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default ComponentsScreen