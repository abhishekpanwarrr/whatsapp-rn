import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// @ts-ignore
import whatsappLogo from "../../assets/whatsapp-logo.png";
import { Colors } from '../../theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FeattherIcon from 'react-native-vector-icons/Feather';

const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logoStyle} source={whatsappLogo} />
            <View style={styles.iconContainer}>
                <Icon name='camera' size={20} color={Colors.secondaryColor} />
                <Icon name='search' size={20} color={Colors.secondaryColor} />
                <FeattherIcon name='more-vertical' size={20} color={Colors.secondaryColor} />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    iconContainer: {
        flexDirection: "row",
        padding: 10,
        gap: 28
    },
    container: {
        backgroundColor: Colors.primaryColor,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    logoStyle: {
        height: 25,
        width: 100
    }
})