import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection } from "firebase/firestore";

export const Firebase = () => {
  console.log("INDEX.JS - initializeApp")
  
  // TODO: add config
  // initializeApp({})
  
  async function loadPeople () {
    const arr = []
    // TODO: ADD CONFIG FIREBASE
    // const database = getFirestore();
    
    // const querySnapshot = await getDocs(collection(database, "people"));
    // querySnapshot.forEach((doc) => {
    //   arr.push(doc.data())
    // });
    return arr
  }
 
  return {
    loadPeople: loadPeople
  }
}