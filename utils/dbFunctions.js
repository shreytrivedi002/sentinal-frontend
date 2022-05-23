import { collection, addDoc, getDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../init-firebase";

export const addObjectToDb = async (data) => {
    // {
    //     time: "Ada",
    //     location: "Lovelace",
    //     vehicle: 1815,

    // }
    try {
        const docRef = await addDoc(collection(db, "alerts"), data);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export const readData = async (collection_) => {
    const arr = [];
    const querySnapshot = await getDocs(collection(db, collection_));
    querySnapshot.forEach((doc) => {
        arr.push(doc.data());
    });
    return arr;
}