import React, { Component } from "react";
import { Text, TextInput, View } from "react-native";

const Onboarding = () => {
  //   function handleAddress() {
  //     console.log("you have clicked this bitch ");
  //   }
  return (
    <View>
      <TextInput placeholder="e.g first home ,main house " />
      <Text> what is Your address </Text>
      <TextInput
        placeholderTextColor="#aaa"
        keyboardType="default"
        // style={styles.input}
        defaultValue="123, gdd ave"
      />
    </View>
  );
};

export default Onboarding;
