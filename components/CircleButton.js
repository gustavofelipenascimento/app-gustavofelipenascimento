import { MaterialIcons } from "@expo/vector-icons/MaterialIcons";
import { Pressable, View } from "react-native";
import styles from "../config/styles";

export default function circleButton({ onPress }) {
    return (
        <View style={styles.circleButtonContainer} >
            <Pressable style={styles.circleButton}>
                <MaterialIcons name="add" size={40} color="#c0c0c0"></MaterialIcons>
            </Pressable>
        </View>
    );
}

