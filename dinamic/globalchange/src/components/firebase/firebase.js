// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { doc, onSnapshot } from "firebase/firestore";
import { onUnmounted } from "vue";
import { ref } from "vue";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ_Y6sDkpJoV_XtSPfS2kJ8OvVDefPV40",
  authDomain: "globalchange-7e79c.firebaseapp.com",
  projectId: "globalchange-7e79c",
  storageBucket: "globalchange-7e79c.appspot.com",
  messagingSenderId: "85817996255",
  appId: "1:85817996255:web:96f65412f62e7c8232ca6a",
  measurementId: "G-4EC9F4JL5M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db=getFirestore(app)

const commentsCollection=collection(db, 'comments')

export const createComment = comment => {
    // return commentsCollection.add(comments)
}

export const getComment = async id => {
    // const querySnapshot = getDocs(collection(db, "cities"));
    // querySnapshot.forEach((doc) => {
    // // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    // });
}

export const updateComment = (id, comment) => {
    // return commentsCollection.doc(id).update(comment)
}

export const deleteComment = id => {
    // return commentsCollection.doc(id).delete()
}

export const useLoadComments = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "comments"));
      const comments = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        comments.push(doc.data());
      });
      return comments;
    } catch (error) {
      console.error("Error getting comments: ", error);
      return [];
    }
  };
  