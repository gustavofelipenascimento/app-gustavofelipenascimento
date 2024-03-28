import { FontAwesome } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import styles from "../config/styles";

export default function Button({ label, theme }) {
    if (theme === "primary") {
        return (
            <View style={styles.buttonContainer}>
                <View style={[styles.buttonContainer,
                {
                    borderWidth: 4,
                    borderColor: "#ffd33d",
                    borderRadius: 18
                }]}>
                </View>
                <Pressable
                    style={[styles.button, { backgroundColor: "#fff" }]}
                    onPress={onPress}>
                    <Text style={styles.container}>{label}</Text>
                    <FontAwesome
                        name="picture-o"
                        size={18}
                        color="#25292e"
                        style={styles.buttonIcon}
                    />
                    <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
                </Pressable>
            </View>
        );
    }

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button}
                onPress={onPress}>
                <Text style={styles.container}>{label}</Text>
            </Pressable>
        </View>
    )
}