const chatBox = document.getElementById('chat-box');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');
const sidebar = document.getElementById('sidebar');
const openSidebar = document.getElementById('open-sidebar');
const closeSidebar = document.getElementById('close-sidebar');

// Apre la barra laterale
openSidebar.addEventListener('click', () => {
    sidebar.classList.add('open');
});

// Chiude la barra laterale
closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('open');
});

// Gestione dei messaggi
sendButton.addEventListener('click', () => {
    const userMessage = chatInput.value.trim();
    if (userMessage !== '') {
        appendMessage(userMessage, 'user');
        chatInput.value = '';
        
        setTimeout(() => {
            const botMessage = "Questa è una risposta automatica.";
            appendMessage(botMessage, 'bot');
        }, 1000);
    }
});

function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}









document.addEventListener("DOMContentLoaded", () => {
    const rects = document.querySelectorAll('.rect');
    rects.forEach((rect, index) => {
      setTimeout(() => {
        rect.classList.add('show');
      }, 1000); // Tutti compaiono dopo 1 secondo
    });
});














const firebaseConfig = {
    apiKey: "AIzaSyBsc4n-5KbzEiJl9C3IaF8zpFKPkjENUpw",
    authDomain: "h-farm-ai-b7b70.firebaseapp.com",
    projectId: "h-farm-ai-b7b70",
    storageBucket: "h-farm-ai-b7b70.firebasestorage.app",
    messagingSenderId: "562049444908",
    appId: "1:562049444908:web:1c36e735eea99b3c77f589",
    measurementId: "G-2Q8HQ12XK5"
  };
  
  
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  document.getElementById("googleSignIn").addEventListener("click", () => {
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        alert(`Benvenuto, ${user.displayName}!`);
      })
      .catch((error) => {
        console.error("Errore durante il login:", error.message);
        alert("Errore durante il login. Riprova");
      });
  });