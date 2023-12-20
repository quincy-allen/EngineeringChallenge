import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

export const PrimaryButton = ({title, onPress}) => {
  return (
    <Pressable style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#333",
    padding: 10,
    marginHorizontal:30,
    borderRadius:7,
  
  },
  text:{
    color:"#fff",
    textAlign:'center',
    fontSize:17,
    fontWeight:"500"
  }
});
