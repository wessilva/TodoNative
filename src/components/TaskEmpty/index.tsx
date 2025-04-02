import { Image, Text, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"



export const TaskEmpty = () => {

    return (
        <View className="flex items-center justify-center gap-2 mt-7 bg-[#1A1A1A]">

            <Image
                source={require("../../assets/Clipboard.png")}
                className="w-[56px] h-[56px]" />
            <Text className="text-[#808080] text-[14px] font-bold">
                Você ainda não tem tarefas cadastradas
            </Text>
            <Text className="text-[#808080] text-[13px] font-normal">
                Crie tarefas e organize seus itens a fazer
            </Text>
        </View>
    )
}