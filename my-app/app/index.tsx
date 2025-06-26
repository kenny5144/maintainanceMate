import { Text, View } from "react-native";
import "@/global.css";
import { Button } from "@react-navigation/elements";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View>
      <View>
        <Button className=" bg-none">1 vernon place</Button>
        <Button className=""> user profile</Button>
      </View>
      {/* weather section with tips  */}
      <View>
        <Text className="font-bold text-rose-300">weather</Text>
      </View>
      <View>
        <Text> Daily tasks</Text>
        <Link href={"/login"}>to login</Link>
      </View>
    </View>
  );
}
