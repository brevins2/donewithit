import { SafeAreaView, StyleSheet, Text, Image, Button, Alert, View } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  console.log('====================================');
  console.log(useDeviceOrientation());
  console.log('====================================');
  return (
    <SafeAreaView>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: '50%',
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
      }}>

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
});
