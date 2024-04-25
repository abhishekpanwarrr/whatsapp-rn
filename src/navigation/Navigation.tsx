import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import SignIn from '../screens/SignIn';
import HomeScreen from '../screens/StatusScreen';
import Dashboard from '../screens/Dashboard';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState("a");
    // console.log("🚀 ~ App ~ user:", user)

    // function onAuthStateChanged(user: any) {
    //     setUser(user);
    //     if (initializing) setInitializing(false);
    // }

    // useEffect(() => {
    //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //     return subscriber;
    // }, []);

    // if (initializing) return null;
    return (
        <NavigationContainer>
            {!user ? <Stack.Navigator>
                <Stack.Screen name="Home" component={SignIn} />
            </Stack.Navigator> :
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="Dashboard" component={Dashboard} />
                </Stack.Navigator>
            }
        </NavigationContainer>
    )
}

export default Navigation