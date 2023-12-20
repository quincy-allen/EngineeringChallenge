import { StyleSheet, TextInput } from "react-native";
import React from "react";

const AppTextInput = ({ placeholder, onChangeText, value, textContentType="none" }) => {
  return (
    <>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        textContentType={textContentType}
        value={value}
        style={styles.input}
      />
    </>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 0.5,
    marginHorizontal:30,
    borderRadius:7,
    padding:6
  },
});
