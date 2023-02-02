import { NativeScriptConfig } from "@nativescript/core";

type OpenNativeConfig = {
  /**
   * Running `HeadlessJSTasks` on android in background/killed state,
   * requires that we patch NativeScript application to install ReactNativeHost.
   */
  "open-native": {
    patchAndroidApplication?: boolean;
  };
};

export default {
  id: "org.nativescript.notifeeexample",
  appPath: "app",
  appResourcesPath: "App_Resources",
  android: {
    v8Flags: "--expose_gc",
    markingMode: "none",
  },
  "open-native": {
    patchAndroidApplication: true,
  },
} as NativeScriptConfig & OpenNativeConfig;
