const firebaseConfig = {
    apiKey: "AIzaSyA_DmxyMwfp60oR4EqyuEistIH7aaOIN0w",
    authDomain: "questionsformapal.firebaseapp.com",
    projectId: "questionsformapal",
    storageBucket: "questionsformapal.firebasestorage.app",
    messagingSenderId: "740370131718",
    appId: "1:740370131718:web:adc3d6caf9110d63d34c87",
    measurementId: "G-C8WNV8LRZL"
  };
  
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore(app);
  const questionsCollection = db.collection('questions'); // שם הקולקציה במסד הנתונים
const questionInput = document.getElementById('questionInput');
const questionsList = document.getElementById('questionsList');

// async function addQuestion() {
//     console.log(app);
//     console.log(db);
//     const newQuestionText = questionInput.value.trim();
//     if (newQuestionText !== '') {
//         try {
//             await questionsCollection.add({
//                 text: newQuestionText,
//                 timestamp: firebase.firestore.FieldValue.serverTimestamp() // הוספת חותם זמן
//             });
//             questionInput.value = ''; // ניקוי שדה הקלט
//         } catch (error) {
//             console.error("שגיאה בהוספת שאלה: ", error);
//             alert("אירעה שגיאה בשמירת השאלה.");
//         }
//     }
// }

// function displayQuestions() {
//     questionsCollection
//         .orderBy('timestamp', 'desc') // הצגת השאלות מהחדשות לישנות
//         .onSnapshot((snapshot) => {
//             questionsList.innerHTML = ''; // ניקוי התצוגה הקודמת
//             snapshot.forEach((doc) => {
//                 const questionData = doc.data();
//                 const listItem = document.createElement('li');
//                 listItem.classList.add('question');
//                 listItem.textContent = questionData.text;
//                 questionsList.appendChild(listItem);
//             });
//         }, (error) => {
//             console.error("שגיאה בקבלת שאלות: ", error);
//             alert("אירעה שגיאה בטעינת השאלות.");
//         });
// }

// // טעינת השאלות בעת טעינת הדף
// displayQuestions();