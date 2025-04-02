import { TouchableOpacity, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"



type MainButtonProps = {
    onPress: () => void;
};

export const MainButton = ({ onPress }: MainButtonProps) => {
    return (

        <TouchableOpacity onPress={onPress} className="bg-[#1E6F9F] w-[52px] h-[52px] rounded-md flex justify-center items-center ">
            <AntDesign name="pluscircleo" size={24} color="white" />
        </TouchableOpacity>

    )
}