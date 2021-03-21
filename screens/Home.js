import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  FlatList,
  View,
} from "react-native";
import { Block, theme, Text } from "galio-framework";
import Data from "../components/Resources";
import { Card } from "../components";
import articles from "../constants/articles";
const { width } = Dimensions.get("screen");

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    // https://localhost1337:api/
    fetch("http://localhost:1337/api/resources")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({ data: json });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}
      >
        <Block flex>
          <Text>{Data}</Text>
          <Card item={articles[0]} horizontal />
          <Card item={articles[1]} horizontal />
          <Card item={articles[2]} horizontal />
          <Card item={articles[3]} horizontal />
          <Card item={articles[4]} horizontal />
          <Card item={articles[5]} horizontal />
          {/* <Block flex row>
            <Card
              item={articles[1]}
              style={{ marginRight: theme.SIZES.BASE }}
            />
            <Card item={articles[2]} />
          </Block> */}
          {/* <Card item={articles[4]} full /> */}
        </Block>
      </ScrollView>
    );
  };

  render() {
    const { data, isLoading } = this.state;
    return (
      <View style={{ flex: 1, padding: 24 }}>
        <Block flex center style={styles.home}>
          {this.renderArticles()}
        </Block>
        {/* {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>
                {item.subject}, {item.url}
              </Text>
            )}
          />
        )} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
    paddingHorizontal: 2,
  },
});

export default Home;
