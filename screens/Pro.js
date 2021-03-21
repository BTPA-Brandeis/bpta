import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Block, Text, theme } from "galio-framework";
import { Button } from "../components/";

import argonTheme from "../constants/Theme";

export default class Agreement extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Block flex style={{ position: "relative" }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.agreements}
          overScrollMode="always"
        >
          <Text
            style={{ fontFamily: "open-sans-bold" }}
            size={16}
            color={argonTheme.COLORS.TEXT}
          >
            Behavior Guidelines - Students shall be responsible for their words
            and actions. Students shall be respectful of others. Students shall
            follow directions from staff members. Prohibited Behaviors
            Endangering the health and safety of themselves, other campers,
            and/or staff or volunteers.
          </Text>
          <Text
            style={{ fontFamily: "open-sans-regular" }}
            size={16}
            color={argonTheme.COLORS.TEXT}
            style={{ paddingTop: 9 }}
          >
            • Stealing, damaging, or failing to care for University or personal
            property. • Continual disruption of the program. • Refusal to follow
            the behavior guidelines. • Inappropriate physical contact. • Using
            profanity or inappropriate language or displaying clothing or other
            personal items with offensive content. • Bullying or acts of
            aggression or violence.
          </Text>
          <Text
            style={{ fontFamily: "open-sans-regular" }}
            size={16}
            color={argonTheme.COLORS.TEXT}
            style={{ paddingTop: 9 }}
          >
            • Possession or use of illegal substances, tobacco, or alcohol. •
            Possession of weapons - any object that may cause harm to another,
            or place another person in fear of his/her safety, may be considered
            a weapon.
          </Text>
          <Block center>
            <Button
              textStyle={{ fontFamily: "open-sans-bold" }}
              color="primary"
              style={styles.button}
              onPress={() => navigation.navigate("App")}
            >
              Accept
            </Button>
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  agreements: {
    padding: theme.SIZES.BASE,
  },
});
