import { Button } from "@react-navigation/elements";
import { Stack, Tabs } from "expo-router";
import { View, Text, Image } from "react-native";

export default function Profile() {
  return (
    <View className="h-full">
      <View
        className="w-[50%] mt-20 text-center flex
    mx-auto "
      >
        {/* <Image
          source={require("@/assets/images/zoe.jpg")}
          className="w-[10%] h-[10%] rounded-full"
          resizeMode="cover"
        /> */}
        <Text className="font-bold text-center text-blue">
          {" "}
          kehinde ojo with an edit btn{" "}
        </Text>
        <Text className="text-center"> ojok761@gmail.com</Text>
      </View>
      <View className="border-4 w-[80%] h-[80%] text-center mx-auto mt-10">
        <Text>Notificatiom</Text>
        <View className="flex">
          <Text>Weather Notification : </Text>
          <Button className="w-[2%] ">on oe off</Button>
        </View>
        tas
      </View>

      <Button>Logout</Button>
    </View>
  );
}
