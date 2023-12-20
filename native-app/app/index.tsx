import { Redirect } from "expo-router";

export default function DefaultScreen() {
  return <Redirect href="/auth/Login" />;
}
