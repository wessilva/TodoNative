import { Modal, Text, TouchableOpacity, View } from "react-native";

interface ConfirmationModalProps {
    visible: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
}




export const ConfirmationModal = ({ visible, onClose, onConfirm, title, message }: ConfirmationModalProps) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View className="flex-1 justify-center items-center bg-black/50">
                <View className="bg-[#333333] w-[80%] p-5 rounded-lg">
                    <Text className="text-lg font-bold text-white mb-2">{title}</Text>
                    <Text className="text-white mb-4">{message}</Text>

                    <View className="flex-row justify-end">
                        <TouchableOpacity
                            onPress={onClose}
                            className="bg-[#808080] py-2 px-4 rounded-md mr-2"
                        >
                            <Text className="text-white">Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={onConfirm}
                            className="bg-[#E25858] py-2 px-4 rounded-md"
                        >
                            <Text className="text-white">Confirmar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}