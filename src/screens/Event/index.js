import React, { Component } from 'react';
import { Text, Image, StyleSheet, ActivityIndicator, View, ScrollView } from 'react-native';

import HTML from 'react-native-render-html';

import { DATA_ENDPOINT } from '../../constants';
import Wrapper from '../../components/Wrapper';

export default class Event extends Component {
  static async fetchEventByPage(id) {
    try {
      const response = await fetch(`${DATA_ENDPOINT}/events/${id}`);

      return response.json();
    } catch (error) {
      console.log(error);
    }
  }

  state = {
    event: {},
    loading: true
  }

  componentDidMount() {
    this.fetchAndSetInitialEvent();
  }

  async fetchAndSetInitialEvent() {
    const { id } = this.props.navigation.state.params;
    const event = await Event.fetchEventByPage(id);

    this.setState({
      event,
      loading: false
    });
  }

  render() {
    const { event, loading } = this.state;

    return (
      <Wrapper>
        {loading ? (
          <View style={styles.loadingWrapper}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <ScrollView>
            <Image
              source={{ uri: event.hero_image_url }}
              style={styles.image}
            />
            <View style={styles.content}>
              <Text style={styles.title}>{event.title}</Text>
              <HTML html={event.content} />
            </View>
          </ScrollView>
        )}

      </Wrapper>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    height: 300
  },
  loadingWrapper: {
    flex: 1,
    justifyContent: 'center'
  },
  content: {
    flex: 1,
    padding: 10
  },
  title: {
    fontSize: 18,
    fontWeight: '700'
  }
});