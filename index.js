import "@expo/metro-runtime";
import { registerRootComponent } from "expo";
import { ExpoRoot } from "expo-router";
import { Platform } from "react-native";
// import { Database } from "@nozbe/watermelondb";
// import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

// import schema from "./src/model/schema";
// import migrations from "./src/model/migrations";
// import Subject from "./src/model/Subject";
// import Instructor from "./src/model/Instructor";
// import Schedule from "./src/model/Schedule";

// // First, create the adapter to the underlying database:
// const adapter = new SQLiteAdapter({
//   schema,
//   // (You might want to comment it out for development purposes -- see Migrations documentation)
//   migrations,
//   // (optional database name or file system path)
//   // dbName: 'myapp',
//   // (recommended option, should work flawlessly out of the box on iOS. On Android,
//   // additional installation steps have to be taken - disable if you run into issues...)
//   jsi: true /* Platform.OS === 'ios' */,
//   // (optional, but you should implement this method)
//   onSetUpError: (error) => {
//     // Database failed to load -- offer the user to reload the app or log out
//   },
// });

// // Then, make a Watermelon database from it!
// const database = new Database({
//   adapter,
//   modelClasses: [
//     // Post, // ⬅️ You'll add Models to Watermelon here
//     Subject,
//     Instructor,
//     Schedule,
//   ],
// });

// https://docs.expo.dev/router/reference/troubleshooting/#expo_router_app_root-not-defined

// Must be exported or Fast Refresh won't update the context
export function App() {
  const ctx = require.context("./src/app");
  return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);
