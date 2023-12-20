import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppTextInput from "../../components/AppTextInput";
import { PrimaryButton } from "../../components/Button";
import { Link, router } from "expo-router";


const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");


  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
        <Text style={styles.headerTextSub}>
          Welcome back! please login to continue using the app
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.login}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.textInput}>
          <AppTextInput
            placeholder="enter email"
            value={email}
            onChangeText={setEmail}
            textContentType="emailAddress"
          />
        </View>
        <View style={styles.textInput}>
          <AppTextInput
            placeholder="enter password"
            value={passWord}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.reg}>
          <Text>Don't have an account?</Text>
          <Link href="/auth/Register" style={styles.link}>
            Sign up
          </Link>
        </View>
      </ScrollView>
      <View style={styles.btn}>
        <PrimaryButton
          title="Login"
          onPress={() => {
            router.push("/(tabs)/");
          }}
        />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  login: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    // marginVertical: 50,
  },
  textInput: {
    width: "100%",
    marginVertical: 8,
  },
  btn: {
    marginVertical: 12,
  },
  reg: {
    alignItems: "flex-end",
    marginHorizontal: 30,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
    fontSize: 14,
  },
  header: {
    alignItems: "center",
    marginTop: 38,
  },
  headerText: {
    fontSize: 40,
  },
  headerTextSub: {
    fontSize: 15,
    width: 200,
    fontWeight: "300",
    textAlign: "center",
  },
});
