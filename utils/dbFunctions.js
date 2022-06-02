import { collection, addDoc, getDoc, doc, getDocs, query, where, limit } from "firebase/firestore";
import { db } from "../init-firebase";

export const addObjectToDb = async (data, collection_) => {
    // {
    //     time: "Ada",
    //     location: "Lovelace",
    //     vehicle: 1815,

    // }
    try {
        const docRef = await addDoc(collection(db, collection_ ? collection_ : "alerts"), data);
        console.log("Document written with ID: ", docRef.id);
        alert('success')
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

export const deleteData = async (docId) => {
    await deleteDoc(doc(db, "/userInfo/" + docId));
}

export const readDataWithQuery = async (collection_, param1, param2) => {
    var data_;
    const q = query(collection(db, collection_), where(param1, "==", param2));
    const querySnapshot = await getDocs(q);
    console.log('k', querySnapshot);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        data_ = doc.data();
    });
    return data_
}   
