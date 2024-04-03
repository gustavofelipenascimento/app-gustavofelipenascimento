import { MaterialIcons } from "@expo/vector-icons/MaterialIcons";
import { Modal, Pressable, Text, View } from "react-native";
import styles from "../config/styles";

export default function EmojiPicker({ isVisible, children, onClose }) {
    return (
        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <View style={styles.modalContent}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Escolha um sticker bro</Text>
                    <Pressable>
                        <MaterialIcons name="close" color="#fff" size={24}/>
                    </Pressable>
                </View>
                {children}
            </View>
        </Modal>
    )
}