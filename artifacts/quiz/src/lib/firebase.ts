import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

const cfg = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
} as const;

export const isFirebaseConfigured: boolean = Boolean(
  cfg.apiKey && cfg.authDomain && cfg.projectId && cfg.appId,
);

let _app: FirebaseApp | null = null;
let _auth: Auth | null = null;
let _db: Firestore | null = null;

function getApp(): FirebaseApp {
  if (!isFirebaseConfigured) {
    throw new Error(
      "Firebase is not configured. Set VITE_FIREBASE_* env vars to enable the admin panel.",
    );
  }
  if (!_app) {
    _app = initializeApp({
      apiKey: cfg.apiKey as string,
      authDomain: cfg.authDomain as string,
      projectId: cfg.projectId as string,
      storageBucket: cfg.storageBucket as string | undefined,
      messagingSenderId: cfg.messagingSenderId as string | undefined,
      appId: cfg.appId as string,
    });
  }
  return _app;
}

export function getFirebaseAuth(): Auth {
  if (!_auth) _auth = getAuth(getApp());
  return _auth;
}

export function getDb(): Firestore {
  if (!_db) _db = getFirestore(getApp());
  return _db;
}
