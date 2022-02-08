import React, {
  useState ,
} from 'react'
import { 
  View, 
  StyleSheet, 
  Image, 
  Button } from 'react-native'
import {
  launchCamera,
  launchImageLibrary 
} from 'react-native-image-picker'

const App = () => {

  const [avatar, setAvatar] = useState('');

  function camera(){
    launchCamera({}, (response)=>{
      setAvatar(response.assets[0].uri);
    })
  }

  function album() {
    launchImageLibrary({}, (response)=>{
        setAvatar(response.assets[0].uri);
    })
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: avatar }}
        style={styles.avatar}
      />

      <Button
        title='카메라 실행'
        onPress={() => { camera() }}
      />

      <Button
        title='앨범 실행'
        onPress={() => { album() }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center', //가로
    justifyContent: 'center' //세로
  },

  avatar: {
    width: '90%',
    height: 400
  }
})

export default App;