import { useState } from 'react';
import { View, SafeAreaView, Alert } from 'react-native';
import { Header } from 'src/components/Header';
import { MainInput } from '~/components/MainInput';
import { Separator } from '~/components/Separator';
import { TaskCount } from '~/components/TaskCount';
import { TaskList } from '~/components/TaskList';
import { Task } from '~/types';

export const HomeScreen = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const toggleTaskCompleted = (id: string) => {
        setTasks((prevTasks) => {
            return prevTasks.map((task) => {
                return task.id === id ? { ...task, completed: !task.completed } : task
            })
        })

    }

    const removeTask = (id: string) => {


        setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));

    }

    const completedTasks = tasks.filter(tasks => tasks.completed).length

    return (
        <SafeAreaView className="w-full h-full flex-1 bg-[#1A1A1A] ">

            <View className="w-full h-full ">
                <Header />
                <MainInput setTasks={setTasks} tasks={tasks} />
                <TaskCount total={tasks.length} completed={completedTasks} />
                <Separator />
                <TaskList onToggleTask={toggleTaskCompleted} onRemoveTask={removeTask} tasks={tasks} />
            </View>

        </SafeAreaView>
    )
        ;
}