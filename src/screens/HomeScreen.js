import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi There !</Text>
      <Button
        title="Go To Components Demo"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Go To List Demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go To Image Demo"
        onPress={() => navigation.navigate("ImageScreen")}
      />
      <Button
        title="Go To Counter Screen"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go To Colors Screen"
        onPress={() => navigation.navigate("Colors")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
