import React, { useEffect, useState } from "react";
import { argonTheme, tabs } from "../constants/";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  FlatList,
  View, Linking
} from "react-native";
import { Block, theme, Text } from "galio-framework";
import Data from "../components/Resources";
import { Card, Button} from "../components";
import articles from "../constants/articles";
const { width } = Dimensions.get("screen");

class Resources extends React.Component {
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
        console.log({json});
        this.setState({ data: json });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
      
  }


  render() {
    const { data, isLoading } = this.state;
    return (<View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => 
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
        <Block center>
          {/* <Button textStyle={{ fontFamily: 'open-sans-bold' }} color="default" style={styles.button}> */}
          <Button onPress={() => Linking.openURL(  `${item.url}` )}style={styles.item}>{item.subject}</Button>
        </Block>
        </Block>

        }
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 44,
    color: argonTheme.COLORS.HEADER
  },
  group: {
    paddingTop: theme.SIZES.BASE * 2
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 2
  },
  button: {
    marginBottom: theme.SIZES.BASE,
    width: width - theme.SIZES.BASE * 2
  },
  optionsButton: {
    width: "auto",
    height: 34,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: 10
  },
  input: {
    borderBottomWidth: 1
  },
  inputDefault: {
    borderBottomColor: argonTheme.COLORS.PLACEHOLDER
  },
  inputTheme: {
    borderBottomColor: argonTheme.COLORS.PRIMARY
  },
  inputTheme: {
    borderBottomColor: argonTheme.COLORS.PRIMARY
  },
  inputInfo: {
    borderBottomColor: argonTheme.COLORS.INFO
  },
  inputSuccess: {
    borderBottomColor: argonTheme.COLORS.SUCCESS
  },
  inputWarning: {
    borderBottomColor: argonTheme.COLORS.WARNING
  },
  inputDanger: {
    borderBottomColor: argonTheme.COLORS.ERROR
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: "center"
  }
});

export default Resources;
