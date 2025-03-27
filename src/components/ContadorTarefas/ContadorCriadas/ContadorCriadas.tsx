import { Text, View } from "react-native";


export const ContadorCriadas = () => {

    return (
        <View className="flex-row gap-3" >
            <Text className="font-bold color-[#4EA8DE]  ">Concluidas</Text>
            <Text className="rounded-xl text-center bg-[#808080] w-6 h-6">0</Text>
        </View>
    );
}