import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Task } from "../../types/"
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { TaskEmpty } from "../TaskEmpty";

interface TasklistProps {
    tasks: Task[];
}

export const TaskList = ({ tasks }: TasklistProps) => {

    if (tasks.length === 0) {
        return (
            <TaskEmpty />
        )
    }

    return (
        <View className="flex items-center p-4 ">
            <FlatList
                showsVerticalScrollIndicator={false}
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View className="flex flex-row justify-between w-[327px] h-[64px] items-center  bg-[#333333] p-4 rounded-md mb-2 mt-4">
                        <TouchableOpacity >
                            <AntDesign name="checkcircleo" size={20} color="#4EA8DE" />
                        </TouchableOpacity>
                        <Text className="text-white">{item.title}</Text>
                        <TouchableOpacity>
                            <Feather name="trash-2" size={20} color="#808080" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};