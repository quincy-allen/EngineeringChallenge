import { ScrollView, StyleSheet, Text, ToastAndroid, View } from "react-native";
import React, { useState } from "react";
import AppTextInput from "../../components/AppTextInput";
import { PrimaryButton } from "../../components/Button";
import { Link, Redirect, router } from "expo-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = () => {
  const auth = getAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [value, setValue] = React.useState({
    email: "",
    password: "",
    error: "",
  });

  async function handleSignIn() {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Email and password are mandatory.",
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
      setIsAuthenticated(true);
      ToastAndroid.show("Login successfully!", ToastAndroid.SHORT);
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      });
    }
  }
  if (isAuthenticated) {
    return <Redirect href="/(tabs)/" />;
  }

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
            value={value.email}
            onChangeText={(text) => setValue({ ...value, email: text })}
            textContentType="emailAddress"
          />
        </View>
        <View style={styles.textInput}>
          <AppTextInput
            placeholder="enter password"
            value={value.password}
            onChangeText={(text) => setValue({ ...value, password: text })}
          />
        </View>
        <View style={styles.reg}>
          <Text>Don't have an account?</Text>
          {value.error ? (
            <Text style={{ color: "red" }}>{value.error}</Text>
          ) : null}

          <Link href="/auth/Register" style={styles.link}>
            Sign up
          </Link>
        </View>
      </ScrollView>
      <View style={styles.btn}>
        <PrimaryButton title="Login" onPress={handleSignIn} />
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
