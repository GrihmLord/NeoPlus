import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AchievementDetailScreen = ({ route }) => {
    const { achievement } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{achievement.name}</Text>
            <Text style={styles.description}>{achievement.description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    description: {
        marginTop: 16,
        fontSize: 16,
    }
});

export default AchievementDetailScreen;

// Path: src/screens/AchievementDetailScreen.js
// Compare this snippet from src/config/FirebaseConfig.js:
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
//
// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jnQ3Y6E",
//     authDomain: "prjctlazrus.firebaseapp.com",
//     projectId: "prjctlazrus",
//     storageBucket: "prjctlazrus.appspot.com",
//     messagingSenderId: "793985928839",
//     appId: "1:793985928839:web:50ab3faad3037e2d9c3222",
//     measurementId: "G-62WCEKB4P3"
// };
//
// // Initialize Firebase
// let app;
// let analytics;
// try {
//     app = initializeApp(firebaseConfig);
//     analytics = getAnalytics(app);
// } catch (error) {
//     console.error("Firebase initialization error", error);
// }
//
// export default app;
//
// // Path: src/config/FirebaseConfig.js
// // Compare this snippet from functions/modules/notifications.js:
// // const { onRequest } = require("firebase-functions/v2/https");
// //
// // exports.sendNotification = onRequest((request, response) => {
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
//
// const AchievementDetailScreen = ({ route }) => {
//     const { achievement } = route.params;
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>{achievement.name}</Text>
//             <Text style={styles.description}>{achievement.description}</Text>
//         </View>
//     );
// };
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//     },
//     description: {
//         marginTop: 16,
//         fontSize: 16,
//     }
// });
//
// export default AchievementDetailScreen;
//
// // Path: src/screens/AchievementDetailScreen.js
// // Compare this snippet from functions/modules/dataProcessing.js:
// // const { onRequest } = require("firebase-functions/v2/https");
// //
// // exports.processData = onRequest((request, response) => {
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
//
// const AchievementDetailScreen = ({ route }) => {
//     const { achievement } = route.params;
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>{achievement.name}</Text>
//             <Text style={styles.description}>{achievement.description}</Text>
//         </View>
//     );
// };
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//     },
//     description: {
//         marginTop: 16,
//         fontSize: 16,
//     }
// });
//
// export default AchievementDetailScreen;
//
// // Path: src/screens/AchievementDetailScreen.js
// // Compare this snippet from src/config/FirebaseConfig.js:
// // import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// //
// // // Your web app's Firebase configuration
// // const firebaseConfig = {

// //     apiKey: "AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jnQ3Y6E",
// //     authDomain: "prjctlazrus.firebaseapp.com",
// //     projectId: "prjctlazrus",
// //     storageBucket: "prjctlazrus.appspot.com",

// //     messagingSenderId: "793985928839",
// //     appId: "1:793985928839:web:50ab3faad3037e2d9c3222",

// //     measurementId: "G-62WCEKB4P3"
// // };
// //
// // // Initialize Firebase
// // let app;
// // let analytics;
// // try {
// //     app = initializeApp(firebaseConfig);
// //     analytics = getAnalytics(app);
// // } catch (error) {
// //     console.error("Firebase initialization error", error);
// // }
// //
// // export default app;
// //
// // // Path: src/config/FirebaseConfig.js

// // Compare this snippet from functions/modules/notifications.js:

// // const { onRequest } = require("firebase-functions/v2/https");
// //
// // exports.sendNotification = onRequest((request, response) => {
// import React from 'react';

// import { View, Text, StyleSheet } from 'react-native';

// const AchievementDetailScreen = ({ route }) => {
//     const { achievement } = route.params;
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>{achievement.name}</Text>
//             <Text style={styles.description}>{achievement.description}</Text>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {

//         flex: 1,
//         padding: 16,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//     },
//     description: {
//         marginTop: 16,
//         fontSize: 16,
//     }
// });

// export default AchievementDetailScreen;

// // Path: src/screens/AchievementDetailScreen.js
// // Compare this snippet from functions/modules/dataProcessing.js:
// // const { onRequest } = require("firebase-functions/v2/https");
// //
// // exports.processData = onRequest((request, response) => {
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// const AchievementDetailScreen = ({ route }) => {
//     const { achievement } = route.params;
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>{achievement.name}</Text>
//             <Text style={styles.description}>{achievement.description}</Text>
//         </View>
//     );
// };
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//     },
//     description: {
//         marginTop: 16,
//         fontSize: 16,
//     }
// });
// export default AchievementDetailScreen;
// // Path: src/screens/AchievementDetailScreen.js
// // Compare this snippet from src/config/FirebaseConfig.js:
// // import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// //
// // // Your web app's Firebase configuration
// // const firebaseConfig = {
// //     apiKey: "AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jnQ3Y6E",
// //     authDomain: "prjctlazrus.firebaseapp.com",
// //     projectId: "prjctlazrus",
// //     storageBucket: "prjctlazrus.appspot.com",
// //     messagingSenderId: "793985928839",
// //     appId: "1:793985928839:web:50ab3faad3037e2d9c3222",
// //     measurementId: "G-62WCEKB4P3"
// // };
// //
// // // Initialize Firebase
// // let app;
// // let analytics;
// // try {
// //     app = initializeApp(firebaseConfig);
// //     analytics = getAnalytics(app);
// // } catch (error) {
// //     console.error("Firebase initialization error", error);
// // }
// //
// // export default app;
// //
// // // Path: src/config/FirebaseConfig.js

// // Compare this snippet from functions/modules/notifications.js:

