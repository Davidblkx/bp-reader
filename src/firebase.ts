import { auth, firestore, initializeApp } from 'firebase';

let loaded = false;

export async function initFirebase() {
  if (loaded) { return; }

  const config = {
    apiKey: 'AIzaSyCbXXyOXm7tworCbrLqWV9gQOFsT85SAqo',
    authDomain: 'bp-list.firebaseapp.com',
    databaseURL: 'https://bp-list.firebaseio.com',
    projectId: 'bp-list',
    storageBucket: 'bp-list.appspot.com',
    messagingSenderId: '342772457525',
  };
  initializeApp(config);
  await firestore().enablePersistence();
  await auth().signInAnonymously();

  loaded = true;
}
