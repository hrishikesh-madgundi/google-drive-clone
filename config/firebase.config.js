const Firebase = require('firebase-admin');
const serviceAccount = require('../drive-ba4c1-firebase-adminsdk-fbsvc-b76c9bb33a.json')

const firebase = Firebase.initializeApp({
    credential: Firebase.credential.cert(serviceAccount),
    storageBucket: 'drive-ba4c1.firebasestorage.app'
})

module.exports = Firebase;