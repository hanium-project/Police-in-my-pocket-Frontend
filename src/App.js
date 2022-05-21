import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const App = () => {
  return (
    <View style = {styles.container}>
      <Text style={styles.title}>폴인포</Text>
      <Button 
        color={'#043BFF'}
        title="START" 
        onPress={() => alert('사이렌소리!!!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6799FF'
  },
  title: {
    fontSize: 30,
    marginBottom: 10 
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#043BFF'
  }
});
 
export default App;