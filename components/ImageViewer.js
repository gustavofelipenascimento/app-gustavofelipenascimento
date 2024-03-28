import { Image } from "react-native";
import styles from "../config/styles";

export default function ImageViewer({placeholderImageSource, selectedImage}) {
    const imageSource = selectedImage ? { uri : selectedImage } : placeholderImageSource;

    return <Image source={imageSource} style={styles.image}/> 
}