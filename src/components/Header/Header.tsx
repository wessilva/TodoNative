import { Image, View } from "react-native";


export const Header = () => {
    return (
        <View className={styles.Container}>
            <Image className={styles.Logo} source={require('../../assets/Logo.png')} />
        </View>
    );
}

const styles = {
    Container: 'bg-[#0D0D0D] h-[173px] w-full flex justify-center items-center',
    Logo: ''

}
