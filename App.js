import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>React Native Blank project created with Expo
      { 
        /** 
         * Created using expo with these steps
         * 1. expo init `project-name`
         * 2. Choose `blank`
        **/
      }
      </Text>
      
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
