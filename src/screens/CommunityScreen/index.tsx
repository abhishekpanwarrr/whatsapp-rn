import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
// @ts-ignore
import CommunityImage from "../../assets/community-img.png"
import { Colors } from '../../theme/colors'

const CommunityScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={CommunityImage} style={styles.communityImg} />
            <Text style={styles.text}>Introducint communities</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Start your community</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CommunityScreen

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.tertiary,
        marginTop: 10,
        padding: 8,
        width: "80%",
        borderRadius: 30
    },
    buttonText: {
        textAlign: "center",
        fontSize: 14,
        color: Colors.background
    },
    container: {
        backgroundColor: Colors.background,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    communityImg: {
        height: 150,
        width: 250
    },
    text: {
        fontSize: 26,
        fontWeight: "600",
        color: Colors.white,
        marginTop: 40
    }

})