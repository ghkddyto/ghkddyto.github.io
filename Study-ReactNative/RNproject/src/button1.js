import React, { 
  useState, 
  useEffect 
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const App = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (count > 1) setCount(count - 1);
    }, 1000);
    return () => clearInterval(countdown);
  }, [count]);

  function button_start(){
    setCount(10); //카운트를 10으로
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <Button title="카운트 시작" onPress={() => button_start()} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', //가로
    justifyContent: 'center' //세로
  },

  text: {
    fontSize: 30,
  },
});

export default App;