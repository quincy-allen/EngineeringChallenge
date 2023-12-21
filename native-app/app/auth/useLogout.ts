import { router } from "expo-router";
import { getAuth, signOut } from "firebase/auth";

export default function useLogout() {
  const auth = getAuth();
  async function handleLogout() {
    try {
      await signOut(auth);
      // User is signed out
      // Redirect to login or do other stuff here
      router.push("/auth/Login");
    } catch (error) {
      // Handle any errors during sign out
      console.error("Error signing out: ", error);
    }
  }

  return { handleLogout };
}
