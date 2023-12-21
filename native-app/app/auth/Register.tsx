import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import AppTextInput from "../../components/AppTextInput";
import { PrimaryButton } from "../../components/Button";
import { Link, Redirect } from "expo-router";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";


const Register = () => {
  
  const [value, setValue] = useState({
    email: "",
    password: "",
    error: "",
  });
  

  const auth = getAuth();

  // Add a new state variable for authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function handleSignup() {
    if (value.email === "" || value.password === "") {
      await setValue({
        ...value,
        error: "Email and password are mandatory.",
      });
      console.log(value.email, value.password, "submitted user");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      // Set isAuthenticated to true when signup is successful
      setIsAuthenticated(true);
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      });
    }
  }

  // If the user is authenticated, redirect them
  if (isAuthenticated) {
    return <Redirect href="/auth/Login" />;
  }

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Register</Text>
        <Text style={styles.headerTextSub}>
          Welcome! please register to use the app
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
          <Text>Already have an account?</Text>
          <Link href="/auth/Login" style={styles.link}>
            Sign in
          </Link>
        </View>
      </ScrollView>
      <View style={styles.btn}>
        <PrimaryButton title="Register" onPress={handleSignup} />
      </View>
    </View>
  );
};

export default Register;

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
