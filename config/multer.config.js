const { credential } = require('firebase-admin')
const multer = require('multer')
const firebasestorage = require('multer-firebase-storage')
const firebase = require('./firebase.config');
const serviceAccount = require('../drive-ba4c1-firebase-adminsdk-fbsvc-b76c9bb33a.json')

const storage = firebasestorage({
    credentials: firebase.credential.cert(serviceAccount),
    bucketName: 'drive-ba4c1.firebasestorage.app',
    unique:true
})

const upload = multer({
    storage: storage,
})

module.exports = upload;