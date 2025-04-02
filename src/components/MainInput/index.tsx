import { FlatList, Text, TextInput, View } from "react-native"
import { MainButton } from "../MainButton"
import { useState } from "react"

export const MainInput = () => {
    const [textInput, setTextInput] = useState('')

    const [task, setAddTask] = useState<{ id: string; title: string }[]>([])

    const addTask = () => {
        if (textInput.trim() === '') {
            return
        }
        setAddTask((task) => [
            ...task,
            {
                id: Date.now().toString(),
                title: textInput,
            },
        ])


        setTextInput('')
    }

    return (
        <View className="w-full h-full ">
            <View className="flex-row justify-center items-center gap-2 mt-[-26px]">
                <TextInput
                    value={textInput}
                    onChangeText={setTextInput}
                    placeholder="Adicionar tarefa"
                    className="bg-[#333333] w-[271px] h-[52px] rounded-md text-white px-3"
                    placeholderTextColor="#AAAAAA"
                />
                <MainButton onPress={addTask} />
            </View>
            <View className="p-4">
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={task}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View className="items-center justify-center bg-[#d60d0d] p-4 rounded-md mb-2 mt-4">
                            <Text className="text-white">{item.title}</Text>
                        </View>
                    )}
                />
            </View>
        </View>

    )
}