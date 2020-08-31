import app from 'firebase/app';
import 'firebase/firestore';

app.initializeApp(firebaseConfig);
const db = app.firestore();

export default db;