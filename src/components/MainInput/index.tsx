import { FlatList, Text, TextInput, View } from "react-native"
import { MainButton } from "../MainButton"
import { useState } from "react"
import { Task, SetTasksAction } from "~/types"


interface MainInputProps {
    setTasks: SetTasksAction,
    tasks: Task[]

}
export const MainInput = (props: MainInputProps) => {
    const { tasks, setTasks } = props
    const [textInput, setTextInput] = useState('')


    const addTask = () => {
        if (textInput.trim() === '') {
            return
        }
        setTasks((tasks) => [
            ...tasks,
            {
                id: Date.now().toString(),
                title: textInput,
                completed: false,

            },
        ])


        setTextInput('')
    }

    return (
        <View className="w-full">
            <View className="flex-row justify-center items-center gap-2 mt-[-26px]">
                <TextInput
                    value={textInput}
                    onChangeText={setTextInput}
                    placeholder="Adicionar tarefa"
                    className="bg-[#333333] w-[271px] h-[52px] rounded-md text-white px-3"
                    placeholderTextColor="#AAAAAA"
                />
                <MainButton onPress={addTask} icon="pluscircleo" size={24} color="white" />
            </View>

        </View>

    )
}