import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database"
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics"

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()

    const firebaseConfig = {
        apiKey: "AIzaSyBi8dJvahsGnlEJxt2XW9CbCVCZ_F8QbIA",
        authDomain: "eco-enzym.firebaseapp.com",
        databaseUrl: "https://aqualora-a7bea-default-rtdb.asia-southeast1.firebasedatabase.app/",
        projectId: "eco-enzym",
        storageBucket: "eco-enzym.appspot.com",
        messagingSenderId: "1090135367285",
        appId: "1:1090135367285:web:024ab437397e3ea199623c",
        measurementId: "G-57LTEMH91G"
    };

    const app = initializeApp(firebaseConfig)

    const analytics = getAnalytics(app)
    const auth = getAuth(app)
    const firestore = getFirestore(app)
    const storage = getStorage(app)
    const database = getDatabase(app)

    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)

    nuxtApp.vueApp.provide('firestore', firestore)
    nuxtApp.provide('firestore', firestore)

    nuxtApp.vueApp.provide('storage', storage)
    nuxtApp.provide('storage', storage)

    nuxtApp.vueApp.provide('database', database)
    nuxtApp.provide('database', database)

    nuxtApp.vueApp.provide('analytics', analytics)
    nuxtApp.provide('analytics', analytics)
})