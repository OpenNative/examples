/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first page.
*/

import { svelteNativeNoFrame } from "svelte-native";
import App from "./App.svelte";
import notifee, { EventType } from "@notifee/react-native";
import { Alert } from "@open-native/core";

notifee.onBackgroundEvent(async (event) => {
  if (event.type === EventType.ACTION_PRESS) {
    Alert.alert("Pressed notification");
  }
});

svelteNativeNoFrame(App, {});
