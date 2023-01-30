import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Main from "./components/Main";

//before run your project plz run -> ( export NODE_OPTIONS=--openssl-legacy-provider ) on git bash
export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar style="light" />
        <View style={styles.container}>
          <Main />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    color: "#fff",
    width: "100%",
    height: '100%',
    alignItems: "center",
  },
});
