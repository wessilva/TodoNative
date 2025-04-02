import { Image, View } from "react-native"

export const Header = () => {
    return (
        <View className="flex w-full h-[173px] justify-center items-center bg-[#0D0D0D]">
            <Image source={require('../../assets/Logo.png')} />
        </View>
    )
}