import { addDoc, collection, getDocs } from "firebase/firestore";
import { firestoreDb } from "../FirebaseConfig";

export const writeData = async (title, category, Tdonation, image) => {
  try {
    const docRef = await addDoc(collection(firestoreDb, "fundraising"), {
      title: title,
      category: category,
      Tdonation: Tdonation,
      image: image
    });
    console.log(docRef);
  } catch (error) {
    console.error(error);
  }
};

export const readData = async () => {
  const arr = [];
  try {
    const querySnapshot = await getDocs(collection(firestoreDb, "fundraising"));
    querySnapshot.forEach((doc) => {
      arr.push({ ...doc.data(), id: doc.id });
    });
    return arr;
  } catch (error) {
    console.error(error);
    return [];
  }
};
