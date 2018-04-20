import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

import { window } from '../../../../constants';

export default function Item(props) {
  const { item, onPress } = props;

  return (
    <TouchableOpacity onPress={() => onPress(item._id)}>
      <ImageBackground style={styles.backgroundImage} source={{ uri: item.hero_image_url }}>
        <Text style={styles.text}>
          {item.title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    width: null,
    height: 300,
  },
  text: {
    bottom: 0,
    padding: 20,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  }
});