import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styles from './config/styles';
import ImageViewer from './components/ImageViewer';
import Button from './components/button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const PlaceholderImage = require('./assets/images/gato.jpg');

export default function App() {
  const [showAppOptions, setShowOption] = useState(false);
  const [selectImage, setSelectImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectImage(resutl.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('Você não escolheu uma imagem');
    }

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer
            placeholderImageSource={PlaceholderImage}
            selectImage={selectImage}
          /> 
        </View>
        {showAppOptions ? ( 
          <View />
        ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Escolhe essa foto ai bro" onPress={pickImageAsync} />
          <Button label="Use essa aqui" onPress={() =>setShowAppOptions(true)} />
        </View>
        )}
        <StatusBar style="auto" />
      </View>
    );
  }
}