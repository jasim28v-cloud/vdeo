// 💖 MNAENCA 2026 - Rose Gold Configuration
// Firebase: bomk-9f6ec | Cloudinary: kmdcjwoi
// ✨ PREMIUM: Notifications + Compact Grid + Delete Videos + Mask Reveal

const firebaseConfig = {
    apiKey: "AIzaSyAAiH5kBtNBfuRbXddoCuLet9IGMG2U7q0",
    authDomain: "bomk-9f6ec.firebaseapp.com",
    databaseURL: "https://bomk-9f6ec-default-rtdb.firebaseio.com",
    projectId: "bomk-9f6ec",
    storageBucket: "bomk-9f6ec.firebasestorage.app",
    messagingSenderId: "743058000945",
    appId: "1:743058000945:web:a862e1eecf7d3d98925910",
    measurementId: "G-7F4W2H5Z3Y"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();

// Cloudinary Configuration
const CLOUD_NAME = "kmdcjwoi";
const UPLOAD_PRESET = "fo23_go";

// 💖 MNAENCA Settings
const ADMIN_EMAILS = ['jasim28v@gmail.com'];
const DICEBEAR_URL = "https://api.dicebear.com/7.x/big-smile/svg";
const COVER_COLORS = [
    "linear-gradient(135deg, #831843, #9d174d, #be185d)",
    "linear-gradient(135deg, #4c0519, #831843, #9d174d)",
    "linear-gradient(135deg, #701a75, #86198f, #a21caf)",
    "linear-gradient(135deg, #ec4899, #db2777, #be185d)",
    "linear-gradient(135deg, #f472b6, #ec4899, #db2777)",
    "linear-gradient(135deg, #1a0a15, #2d0a1e, #ec4899)"
];

// 💖 App Info
const APP_NAME = "MNAENCA";
const APP_VERSION = "2026.1";
const PRIMARY_COLOR = "#ec4899";
const SECONDARY_COLOR = "#f472b6";

console.log('💖 %c'+APP_NAME+' v'+APP_VERSION+' Ready ✨', 'color: #ec4899; font-size: 16px; font-weight: bold;');
