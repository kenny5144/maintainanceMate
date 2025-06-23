import { Button } from "@react-navigation/elements";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Main = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Logo}>Maintanance Mate</Text>
      <Text style={styles.Maintext}>
        Stay ahead of home care with smarth alerts
      </Text>
      <Button> Get Started </Button>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#ffffff",
    height: "100%",
  },
  Maintext: {
    fontSize: 70,
    textAlign: "right",
    marginBottom: 20,
    marginTop: 40,
    width: 400,
  },
  Logo: {
    fontSize: 20,
  },
});
