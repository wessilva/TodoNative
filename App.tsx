import { ScreenContent } from './src/ScreenContent';
import { StatusBar } from 'expo-status-bar';

import './global.css';
import { Text } from 'react-native';
import { View } from 'react-native';
export default function App() {
  return (
    <View className={styles.container}>
      <ScreenContent  >

      </ScreenContent>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = {
  container: `flex-1  justify-center bg-[#1A1A1A]`,
}