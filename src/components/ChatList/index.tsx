import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
// @ts-ignore
import User1 from "../../assets/user1.jpeg";
import { Colors } from '../../theme/colors';
import { ChatListData } from '../../data/chatdata';
import { useNavigation } from '@react-navigation/native';
const ChatList = () => {
    const navigation = useNavigation()

    return (
        <>
            {ChatListData.map(chat => (
                <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")} key={chat.id} style={styles.container}>
                    <View style={styles.chatContainer}>
                        <Image source={User1} style={styles.profileImg} />
                        <View>
                            <Text style={styles.username}>{chat.name}</Text>
                            <Text style={styles.message}>{chat.message}</Text>
                        </View>
                    </View>
                    <Text style={styles.timeStamp}>{chat.time}</Text>
                </TouchableOpacity>
            ))}
        </>
    )
}

export default ChatList

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        padding: 16,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    profileImg: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginRight: 15
    },
    username: {
        color: Colors.textColor,
        fontSize: 16
    },
    message: {
        color: Colors.textGrey,
        fontSize: 14,
        marginTop: 5,
    },
    chatContainer: {
        flexDirection: "row"
    },
    timeStamp: {
        color: Colors.textColor,
        fontSize: 12
    }
})