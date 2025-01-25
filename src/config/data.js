import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import db from "./firebase";

export const getProducts = async () => {
  const productsCollection = collection(db, "items");
  const snapshot = await getDocs(productsCollection);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getProductById = async (id) => {
  const productRef = doc(db, "items", id);
  const snapshot = await getDoc(productRef);

  if (snapshot.exists()) {
    return { id: snapshot.id, ...snapshot.data() };
  } else {
    throw new Error("Producto no encontrado");
  }
};

export const getProductsByCategory = async (category) => {
  const productsCollection = collection(db, "items");
  const q = query(productsCollection, where("category", "==", category));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};