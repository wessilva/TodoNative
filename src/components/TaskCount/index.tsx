import { Text, View } from "react-native";



export const TaskCount = ({ total, completed }: { total: number; completed: number }) => {
    return (
        <>
            <View className="flex-row justify-between items-center px-10 mt-4  ">
                <Text className="text-[#4EA8DE] text-[14px] font-bold">
                    Criadas
                    <Text className="text-[#808080]"> {total}</Text>
                </Text>
                <Text className="text-[#8284FA] text-[14px] font-bold">
                    Concluídas
                    <Text className="text-[#808080]"> {completed}</Text>
                </Text>


            </View>

        </>
    )
}