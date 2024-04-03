import { MaterialIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import styles from "../config/styles";

export default function IconButton({ icon, label, onPress }) {
    return (
        <Pressable style={styles.iconButton} onPress={onPress}>
            <MaterialIcons name={icon} size={25} color="#fff" />
            <Text style={styles.iconButtonLabel}>{label}</Text>
        </Pressable>
    );
}