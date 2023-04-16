importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js')

firebase.initializeApp({
  apiKey: "AIzaSyCIwj9esPw7GcHNEt_n-lT3eaV47O1vRw0",
  authDomain: "angular-push-notify.firebaseapp.com",
  projectId: "angular-push-notify",
  storageBucket: "angular-push-notify.appspot.com",
  messagingSenderId: "797556353644",
  appId: "1:797556353644:web:941c28cb4fb0537ad44649"
})

const messaging = firebase.messaging();
