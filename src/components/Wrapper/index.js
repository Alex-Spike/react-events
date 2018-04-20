import React, { Component } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

import styles from './styles';

export default class Wrapper extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.view}>
          {this.props.children}
        </View>
      </SafeAreaView>
    )
  }
}