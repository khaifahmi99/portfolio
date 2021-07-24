import app from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'khaifahmicreative.firebaseapp.com',
  databaseURL: 'https://khaifahmicreative.firebaseio.com',
  projectId: 'khaifahmicreative',
  storageBucket: 'khaifahmicreative.appspot.com',
  messagingSenderId: '1036991746064',
  appId: '1:1036991746064:web:24eee9338e1d65a5483a95',
};

app.initializeApp(firebaseConfig);
const db = app.firestore();

export default db;
