import { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { Header } from 'src/components/Header';
import { MainInput } from '~/components/MainInput';
import { TaskList } from '~/components/TaskList';
import { Task } from '~/types';

export const HomeScreen = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    return (
        <SafeAreaView className="w-full h-full flex-1 bg-white ">

            <View className="w-full h-full ">
                <Header />
                <MainInput setTasks={setTasks} tasks={tasks} />
                <TaskList tasks={tasks} />
            </View>

        </SafeAreaView>
    );
}