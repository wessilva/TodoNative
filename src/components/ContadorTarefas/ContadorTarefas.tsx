import { View } from "react-native"
import { ContadorCriadas } from "./ContadorCriadas/ContadorCriadas"
import { ContadorConcluidas } from "./ContatorConcluidas/ContadorConcluidas"

export const ContadorTarefas = () => {

    return (
        <View className="flex-row justify-between w-[327] mt-8 ">
            <ContadorCriadas />
            <ContadorConcluidas />
        </View>
    )
}