import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection } from "firebase/firestore";

export const Firebase = () => {
  console.log("INIT FIREBASE...")
  initializeApp(
    {
      "type": process.env.REACT_APP_FIREBASE_TYPE,
      "project_id": process.env.REACT_APP_FIREBASE_PROJECT_ID,
      "private_key_id": process.env.REACT_APP_FIREBASE_PRIVATE_KEY_ID,
      "private_key": process.env.REACT_APP_FIREBASE_PRIVATE_KEY,
      "client_email": process.env.REACT_APP_FIREBASE_CLIENT_EMAIL,
      "client_id": process.env.REACT_APP_FIREBASE_CLIENT_ID,
      "auth_uri": process.env.REACT_APP_FIREBASE_AUTH_URI,
      "token_uri": process.env.REACT_APP_FIREBASE_TOKEN_URI,
      "auth_provider_x509_cert_url": process.env.REACT_APP_FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
      "client_x509_cert_url": process.env.REACT_APP_FIREBASE_CLIENT_X509_CERT_URL,
      "universe_domain": process.env.REACT_APP_FIREBASE_UNIVERSE_DOMAIN,
      "projectId": process.env.REACT_APP_FIREBASE_PROJECT_ID
    }
  )

  async function loadPeople () {
    const arr = []
    const database = getFirestore();

    const querySnapshot = await getDocs(collection(database, "people"));
    querySnapshot.forEach((doc) => {
      arr.push(doc.data())
    });
    return arr
  }
 
  return {
    loadPeople: loadPeople
  }
}