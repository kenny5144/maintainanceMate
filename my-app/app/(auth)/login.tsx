import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {/* Top image */}
      <Image
        source={require("@/assets/images/zoe.jpg")} // replace with your uploaded image path
        style={styles.image}
        resizeMode="contain"
      />

      {/* Form */}
      <View>
        <Text style={styles.loginTitle}>Login</Text>

        {/* Email Input */}
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            style={styles.input}
            defaultValue="hungnk1996@gmail.com"
          />
          <Text style={styles.icon}>✓</Text>
        </View>

        {/* Password Input */}
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry={!showPassword}
            style={styles.input}
            defaultValue="12345678"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.icon}>{showPassword ? "🙈" : "👁️"}</Text>
          </TouchableOpacity>
        </View>

        {/* Sign In Button */}
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </Pressable>

        {/* Icons */}
        <View style={styles.platformIcons}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-filled/50/android-os.png",
            }}
            style={styles.platformIcon}
          />
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/50/mac-os.png" }}
            style={styles.platformIcon}
          />
          <Image
            source={{
              uri: "https://img.icons8.com/ios-glyphs/30/internet--v1.png",
            }}
            style={styles.platformIcon}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff", // warm soft background
    justifyContent: "flex-start",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 220,
    marginBottom: 20,
  },

  loginTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#000",
  },
  inputWrapper: {
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    color: "#000",
  },
  icon: {
    fontSize: 16,
    color: "#999",
    paddingLeft: 8,
  },
  button: {
    backgroundColor: "#0ceb78", // orange-400
    borderRadius: 12,
    paddingVertical: 14,
    marginTop: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  platformIcons: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
    gap: 20,
  },
  platformIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
});

export default Login;
