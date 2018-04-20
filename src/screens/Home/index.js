import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, SafeAreaView } from 'react-native';

import { DATA_ENDPOINT } from '../../constants';

import Wrapper from '../../components/Wrapper';
import Item from './components/Item';

export default class Home extends Component {
  static async fetchEventsByPage() {
    try {
      const response = await fetch(`${DATA_ENDPOINT}/events?page=${0}`);

      return response.json();
    } catch (error) {
      console.log(error);
    }
  }

  state = {
    events: []
  }

  componentDidMount() {
    this.fetchAndSetInitialEvents();
  }

  async fetchAndSetInitialEvents() {
    const events = await Home.fetchEventsByPage();

    this.setState({
      events,
      nextPage: 1,
      refreshing: false
    });
  }

  renderItem = ({ item }) => (
    <Item
      item={item}
      onPress={this.onItemPress}
    />
  );

  onItemPress = (id) => {
    const { navigation } = this.props;

    navigation.navigate('Event', { id });
  }

  keyExtractor = (item) => item._id;

  render() {
    return (
      <Wrapper>
        <FlatList
          style={styles.list}
          data={this.state.events}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </Wrapper>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  }
});