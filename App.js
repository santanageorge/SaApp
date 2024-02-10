import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.myContainer}>
      <View>
        <TextInput placeholder='Add Goal'/>
        <Button title="Add Goal"/>
      </View>
      <View></View>

      <Text style={styles.textStyle}>Hello Worlds</Text>
      <StatusBar style="auto" />
      <Button title="Click me!"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle:{
    color:"red", fontWeight:"bold",  borderWidth:2, borderColor:"orange", margin:5
  },
  myContainer:{
    padding:50
  }
});
