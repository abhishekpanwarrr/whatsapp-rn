import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Header from '../../components/Header';
import ChatList from '../ChatList';
import CallList from '../CallList';
import CommunityScreen from '../CommunityScreen';
import StatusScreen from '../StatusScreen';
import { Colors } from '../../theme/colors';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createMaterialTopTabNavigator();

const Dashboard = () => {
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <Header />
            <Tab.Navigator screenOptions={() => ({
                tabBarActiveTintColor: Colors.tertiary,
                tabBarInactiveTintColor: Colors.secondaryColor,
                tabBarIndicatorStyle: {
                    backgroundColor: Colors.tertiary
                },
                tabBarStyle: {
                    backgroundColor: Colors.primaryColor,
                }
            })}>
                <Tab.Screen name="Community" component={CommunityScreen}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: ({ color }) => (
                            <Icon name='users' color={color} size={20} />
                        )
                    }}
                />
                <Tab.Screen name="Chat" component={ChatList} />
                <Tab.Screen name="Status" component={StatusScreen}
                />
                <Tab.Screen name="Call" component={CallList}
                />
            </Tab.Navigator>
        </SafeAreaView>
    )
}

export default Dashboard