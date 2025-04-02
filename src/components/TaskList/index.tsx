import { FlatList, Text, View } from "react-native";
import { Task } from "../../types/"

interface TasklistProps {
    tasks: Task[];
}

export const TaskList = ({ tasks }: TasklistProps) => {
    return (
        <View className="p-4">
            <FlatList
                showsVerticalScrollIndicator={false}
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View className="items-center justify-center bg-[#d60d0d] p-4 rounded-md mb-2 mt-4">
                        <Text className="text-white">{item.title}</Text>
                    </View>
                )}
            />
        </View>
    );
};