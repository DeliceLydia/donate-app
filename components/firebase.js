import { addDoc, collection, getDocs } from "firebase/firestore"
import { firestoreDb } from "../FirebaseConfig";

export const writeData = async(title, category, Tdonation) => {
    try {
        const docRef = await addDoc(collection(firestoreDb, "fundraising"), 
        {title: title, category: category, Tdonation: Tdonation})
    console.log(docRef); 
    } catch (error) {
        console.error(error);
    }
   
}

export const readData = async() => {
    const arr = []
    try {
    const user = await getDocs(collection(firestoreDb, "fundraising"),)
user.forEach((doc)=> {
   arr.push({...doc.data(), id: doc.id}); 
})        
console.log(arr);
    } catch (error) {
        console.error(error);
    }
}