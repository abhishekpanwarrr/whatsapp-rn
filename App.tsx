import { View, Text, SafeAreaView, Button } from 'react-native'
import { useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  console.log("🚀 ~ App ~ user:", user)

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  const handleLogin = () => {
    auth()
      .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }
  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }
  if (!user) {
    return (
      <SafeAreaView>
        <Text>Login</Text>
        <Button title='Button' onPress={handleLogin} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <Text>Welcome {user?.email}</Text>
      <Button title='Logout' onPress={handleLogout} />
    </SafeAreaView>
  );
}

export default App