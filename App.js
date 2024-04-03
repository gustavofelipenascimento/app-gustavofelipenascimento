import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styles from './config/styles';
import ImageViewer from './components/ImageViewer';
import Button from './components/button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import IconButton from './components/IconButton';
import EmojiPicker from './components/EmojiPicker';
import EmojiList from './components/EmojiList';
import EmojiSticker from './components/EmojiSticker';

const PlaceholderImage = require('./assets/images/gato.jpg');

export default function App() {
  const [pickedEmoji, setPickedEmoji] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectImage, setSelectImage] = useState(null);
  const onReset = () => {
    setShowAppOptions(false);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onAddSticker = () => {
    setIsModalVisible(true);
  }

  const onSaveImageAsync = async () => {
    setIsModalVisible(false);
  }

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
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton icon="refresh" label="Reset" onPress={onReset} />
              <CircleButton onPress={onAddSticker} />
              <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
            </View>
          </View>

        ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Escolhe essa foto ai bro" onPress={pickImageAsync} />
          <Button label="Use essa aqui" onPress={() =>setShowAppOptions(true)} />
        </View>
        )}
        <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
          <EmojiPicker onSelect={setPickedEmoji} onCloseModal={onModalClose} />
          <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
        </EmojiPicker>
        <StatusBar style="auto" />
      </View>
    );
  }
}