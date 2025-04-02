import { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { Header } from 'src/components/Header';
import { MainInput } from '~/components/MainInput';
import { Separator } from '~/components/Separator';
import { TaskCount } from '~/components/TaskCount';
import { TaskEmpty } from '~/components/TaskEmpty';
import { TaskList } from '~/components/TaskList';
import { Task } from '~/types';

export const HomeScreen = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    return (
        <SafeAreaView className="w-full h-full flex-1 bg-[#1A1A1A] ">

            <View className="w-full h-full ">
                <Header />
                <MainInput setTasks={setTasks} tasks={tasks} />
                <TaskCount total={5} completed={3} />
                <Separator />
                <TaskList tasks={tasks} />
            </View>

        </SafeAreaView>
    );
}