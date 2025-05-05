const questionInput = document.getElementById('questionInput');
const questionsList = document.getElementById('questionsList');
const questionsCollection = db.collection('questions'); // שם הקולקציה במסד הנתונים

async function addQuestion() {
    const newQuestionText = questionInput.value.trim();
    if (newQuestionText !== '') {
        try {
            await questionsCollection.add({
                text: newQuestionText,
                timestamp: firebase.firestore.FieldValue.serverTimestamp() // הוספת חותם זמן
            });
            questionInput.value = ''; // ניקוי שדה הקלט
        } catch (error) {
            console.error("שגיאה בהוספת שאלה: ", error);
            alert("אירעה שגיאה בשמירת השאלה.");
        }
    }
}

function displayQuestions() {
    questionsCollection
        .orderBy('timestamp', 'desc') // הצגת השאלות מהחדשות לישנות
        .onSnapshot((snapshot) => {
            questionsList.innerHTML = ''; // ניקוי התצוגה הקודמת
            snapshot.forEach((doc) => {
                const questionData = doc.data();
                const listItem = document.createElement('li');
                listItem.classList.add('question');
                listItem.textContent = questionData.text;
                questionsList.appendChild(listItem);
            });
        }, (error) => {
            console.error("שגיאה בקבלת שאלות: ", error);
            alert("אירעה שגיאה בטעינת השאלות.");
        });
}

// טעינת השאלות בעת טעינת הדף
displayQuestions();