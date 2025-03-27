import { TextInput, View } from "react-native"
import { MainButton } from "../MainButton/MainButton";



export const MainInput = () => {

    return (
        <View className='gap-2 flex-row ali  justify-center items-center mt-[-30px]'>

            <TextInput className='bg-[#1A1A1A] w-[271px] h-[56px] rounded-xl border-black border  ' />

            <MainButton />

        </View>
    );
}

const styles = {
    Container: 'flex   justify-center items-center',
    InputStyle: 'bg-[#1A1A1A] w-[271px] h-[56px] rounded-xl border-black border  ',

}
