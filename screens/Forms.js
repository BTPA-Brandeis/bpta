import React from "react";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants/";
import { Button, Select, Icon, Input, Header, Switch } from "../components/";

const { width } = Dimensions.get("screen");

class Elements extends React.Component {
  state = {
    "switch-1": true,
    "switch-2": false
  };

  toggleSwitch = switchId =>
    this.setState({ [switchId]: !this.state[switchId] });

  renderButtons = () => {
    return (
      <Block flex>
        <Text size={16} style={styles.title}>
          Forms and Surveys
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Block center>
            <Button textStyle={{ fontFamily: 'open-sans-bold' }} color="default" style={styles.button}>
              I9 Form Description
            </Button>
          </Block>
          <Block center>
            <Button textStyle={{ fontFamily: 'open-sans-bold' }} color="default" style={styles.button}>
              I9 Form
              </Button>
          </Block>
          <Block center>
            <Button textStyle={{ fontFamily: 'open-sans-bold' }} color="default" style={styles.button}>
              W2 Tax Forms
            </Button>
          </Block>
          <Block center>
            <Button textStyle={{ fontFamily: 'open-sans-bold' }} color="primary" style={styles.button}>
              Self Assessment
            </Button>
          </Block>
          <Block center>
            <Button textStyle={{ fontFamily: 'open-sans-bold' }} color="primary" style={styles.button}>
              PT Forms
            </Button>
          </Block>
        </Block>
      </Block>
    );
  };

  render() {
    return (
      <Block flex center>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30, width }}
        >
          {this.renderButtons()}

        </ScrollView>
      </Block>
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

export default Elements;
