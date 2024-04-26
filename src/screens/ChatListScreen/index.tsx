import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ChatList from '../../components/ChatList'
import { Colors } from '../../theme/colors'
import Icon from 'react-native-vector-icons/Feather'

const ChatListScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <ChatList />
            </ScrollView>
            <TouchableOpacity style={styles.contactIcon}>
                <Icon name="message-square" size={30} color={"#fff"} />
            </TouchableOpacity>
        </View>
    )
}

export default ChatListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        position: "relative"
    },
    contactIcon: {
        backgroundColor: Colors.tertiary,
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 25,
        right: 20,
    }
})