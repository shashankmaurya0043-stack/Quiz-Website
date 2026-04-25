import { useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User,
} from "firebase/auth";
import { getFirebaseAuth, isFirebaseConfigured } from "./firebase";

export interface AdminAuthState {
  ready: boolean;
  user: User | null;
}

export function useAdminAuth(): AdminAuthState {
  const [state, setState] = useState<AdminAuthState>({
    ready: !isFirebaseConfigured,
    user: null,
  });

  useEffect(() => {
    if (!isFirebaseConfigured) {
      setState({ ready: true, user: null });
      return;
    }
    const unsub = onAuthStateChanged(getFirebaseAuth(), (u) => {
      setState({ ready: true, user: u });
    });
    return () => unsub();
  }, []);

  return state;
}

export async function adminSignIn(email: string, password: string) {
  const auth = getFirebaseAuth();
  await signInWithEmailAndPassword(auth, email, password);
}

export async function adminSignOut() {
  const auth = getFirebaseAuth();
  await signOut(auth);
}
