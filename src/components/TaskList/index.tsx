import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Task } from "../../types/"
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TaskEmpty } from "../TaskEmpty";
import { useState } from "react";
import { ConfirmationModal } from "../Modal";

interface TasklistProps {
    tasks: Task[];
    onToggleTask: (id: string) => void;
    onRemoveTask: (id: string) => void;
}

export const TaskList = ({ tasks, onToggleTask, onRemoveTask }: TasklistProps) => {

    const [pressedId, setPressedId] = useState<string | null>(null);
    const [removingId, setRemovingId] = useState<string | null>(null)
    const [modalVisible, setModalVisible] = useState(false);
    const [taskToDelete, setTaskToDelete] = useState<string | null>(null);

    const handleRemoveRequest = (id: string) => {

        const task = tasks.find(task => task.id === id)

        if (task && !task.completed) {
            setTaskToDelete(id)
            setModalVisible(true)
        } else {
            handleRemoveWithDelay(id)
        }

    }

    const handleConfirmDelete = () => {
        if (taskToDelete) {
            handleRemoveWithDelay(taskToDelete);
            setModalVisible(false);
            setTaskToDelete(null);
        }
    };

    const handleRemoveWithDelay = (id: string) => {
        setRemovingId(id);

        setTimeout(() => {
            onRemoveTask(id);
            setRemovingId(null);
        }, 400);
    };

    return (
        <View className="flex items-center p-4 h-screen-safe">
            <FlatList
                showsVerticalScrollIndicator={false}
                data={tasks}
                contentContainerStyle={{ paddingBottom: 515 }}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View className={`flex flex-row justify-between w-[327px] h-[78px] items-center  bg-[#333333] p-4 rounded-lg border-[0.5px] ${item.completed ? 'border-[#4EA8DE]' : 'border-[#808080]'}  mt-3`}>
                        <TouchableOpacity onPress={() => onToggleTask(item.id)}>
                            {item.completed ? (
                                <AntDesign name="checkcircle" size={24} color="#4EA8DE" />
                            ) : (
                                <MaterialIcons name="radio-button-unchecked" size={24} color="#4EA8DE" />

                            )}

                        </TouchableOpacity>

                        <Text className={`flex mx-3 ${item.completed ? 'text-[#808080] line-through' : 'text-white'}`}>
                            {item.title}
                        </Text>

                        <TouchableOpacity
                            className={`w-[28px] h-[28px] rounded-lg flex items-center justify-center ${pressedId === item.id
                                ? 'bg-[#808080]'
                                : removingId === item.id
                                    ? <Feather name="trash-2" size={20} color="#E25858" />
                                    : ''
                                }`}
                            onPress={() => handleRemoveRequest(item.id)}
                            onPressIn={() => setPressedId(item.id)}
                            onPressOut={() => setPressedId(null)}
                        >
                            <Feather
                                name="trash-2"
                                size={20}
                                color={pressedId === item.id || removingId === item.id ? "#E25858" : "#808080"}
                            />
                        </TouchableOpacity>
                    </View>
                )}
            />
            <ConfirmationModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onConfirm={handleConfirmDelete}
                title="Confirmar exclusão"
                message="Esta tarefa não está concluída. Tem certeza que deseja excluí-la?"
            />
        </View>
    );
};