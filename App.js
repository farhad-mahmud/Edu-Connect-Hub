import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

export default function App() {
 let x = 1;
      console.log("app executed"); 
      return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome to React Native!</Text>
      <Button
        title="Click Me"
        onPress={() => {
          x++;
          window.alert("Button clicked ${x}",);
        }}
      />
      
      </SafeAreaView>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
