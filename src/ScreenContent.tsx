import { Text, View } from 'react-native';

import { EditScreenInfo } from './EditScreenInfo';
import { Header } from './components/Header/Header';
import { MainInput } from './components/MainInput/MainInput';
import { ContadorTarefas } from './components/ContadorTarefas/ContadorTarefas';
type ScreenContentProps = {


  children?: React.ReactNode;
};

export const ScreenContent = ({ children }: ScreenContentProps) => {
  return (
    <View className={styles.container}>


      <Header />
      <MainInput />
      <ContadorTarefas />
    </View>
  );
};
const styles = {
  container: `items-center flex-1 justify-start bg-[]`,

};
