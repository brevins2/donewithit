import { SafeAreaView, StyleSheet, Text, Image, Button, Alert, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { useState } from 'react';

export default function App() {
  const [ count, setCount ] = useState(false);
  return (
    <SafeAreaView>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text style={styles.heading}>Welcome To DoneWithIt</Text>
        <Text style={{ color: 'white', fontSize: 20, }}>Number of counts {count}</Text>
        <TextInput style={{ borderWidth: 2, padding: 3, paddingLeft: 10, borderRadius: 8, borderColor: 'white', color: 'white', width: 200}} placeholder='Enter name' keyboardType='numeric'></TextInput>
        <TouchableOpacity style={styles.button} onPress={() => setCount(true)}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>

        <View style={styles.backpopup}>
          <ScrollView style={styles.popup}>
            She had a terrible habit o comparing her life to others. She realized that their life experiences were completely different than her own and that she saw only what they wanted her to see, but that didn't matter. She still compared herself and yearned for what she thought they had and she didn't.
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 30,
    width: 250,
    textAlign: 'center',
    lineHeight: 30
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    marginTop: 16,
  },
  buttonText: {
    color: 'dodgerblue',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backpopup: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 24,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  popup: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
