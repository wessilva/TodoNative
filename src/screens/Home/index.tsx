import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Header } from 'src/components/Header';
import { MainInput } from '~/components/MainInput';

export const HomeScreen = () => {
    return (
        <SafeAreaView className="w-full h-full flex-1 bg-white ">

            <View className="w-full h-full ">
                <Header />
                <MainInput />
            </View>

        </SafeAreaView>
    );
}