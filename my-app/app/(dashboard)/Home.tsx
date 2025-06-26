import React, { Component, useState } from "react";
import { Text, Button, StyleSheet, View, Modal } from "react-native";
const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View>
      <Button title="1 vernon place " onPress={() => setIsModalVisible(true)} />
      <Modal visible={isModalVisible}>
        <View>
          <Text>Manage homes </Text>
          <Button title="address" onPress={() => console.log("press")} />
          <Button title="Add homes" onPress={() => console.log("press")} />
          <Button title="close" onPress={() => setIsModalVisible(false)} />
        </View>
      </Modal>
      <Button title="user profile " onPress={() => console.log("pressed")} />
      <View>{/* weather part  */}</View>
      <View>
        <Text>To Do</Text>

        {/* this is going to show all the upcoming tasks  */}
      </View>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({});
