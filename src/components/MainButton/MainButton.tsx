import { Button, View, TouchableOpacity, Text } from "react-native"


export const MainButton = () => {
    return (
        <TouchableOpacity className='rounded-lg flex justify-center items-center bg-[#1E6F9F] w-[53px] h-[53px]'>

            <Text className={styles.ButtonText}>+</Text>


        </TouchableOpacity>

    )
}


const styles = {
    ButtonStyle: 'flex  bg-[#1E6F9F] w-[56px] h-[56px]',
    ButtonText: 'text-[#fff] text-[24px] font-bold'
}