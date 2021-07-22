// importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js');
// 
// if ('serviceWorker' in navigator) {
//     
//     navigator.serviceWorker.register('../firebase-messaging-sw.js')
//         .then(function (registration) {
//             
//             console.log('Registration successful, scope is:', registration.scope);
//         }).catch(function (err) {
//             
//             console.log('Service worker registration failed, error:', err);
//         });
// }

// // firebase.initializeApp({
// //     messagingSenderId: "493556652405",
// // })
// let credential = JSON.parse(localStorage.getItem("userinfo"));
// 
// if (credential) {
//     firebase.initializeApp({
//         messagingSenderId: "493556652405",
//     })
// }
// const initMessaging = firebase.messaging()