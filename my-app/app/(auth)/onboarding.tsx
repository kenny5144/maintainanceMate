import React, { Component } from "react";
import { Text, TextInput, View } from "react-native";

const Onboarding = () => {
  //   function handleAddress() {
  //     console.log("you have clicked this bitch ");
  //   }
  return (
    <View>
      <Text> what is Your address </Text>
      <TextInput
        placeholderTextColor="#aaa"
        keyboardType="default"
        // style={styles.input}
        defaultValue="hungnk1996@gmail.com"
      />
    </View>
  );
};

export default Onboarding;
