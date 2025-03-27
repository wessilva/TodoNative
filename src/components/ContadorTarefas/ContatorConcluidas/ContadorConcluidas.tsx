import { Text, View } from "react-native";


export const ContadorConcluidas = () => {

    return (
        <View className="flex-row gap-3" >
            <Text className="font-bold color-[#5E60CE]  ">Concluidas</Text>
            <Text className="rounded-xl text-center bg-[#808080] w-6 h-6">0</Text>
        </View>
    );
}