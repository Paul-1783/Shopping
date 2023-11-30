import { StyleSheet, Text, View } from "react-native";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShoppingLists from "./components/ShoppingLists";

// Create the navigator
const Stack = createNativeStackNavigator();

export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyBq0tDwOSBrmOYxVseHZRC7oo-U6Qe9g-M",
    authDomain: "chatapp-d0751.firebaseapp.com",
    projectId: "chatapp-d0751",
    storageBucket: "chatapp-d0751.appspot.com",
    messagingSenderId: "395030302924",
    appId: "1:395030302924:web:a64777b24bce1fddb63269",
    measurementId: "G-WSQJXV9V10",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ShoppingLists">
        <Stack.Screen name="ShoppingLists">
          {(props) => <ShoppingLists db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
