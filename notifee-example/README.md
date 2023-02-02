[Notifee](https://notifee.app) example

An example app running Notifee notifications library on android & ios in NativeScript.

Extra steps required for using the library in your NativeScript app.

## before-plugins.gradle

Add the following to `App_Resources/Android/before-plugins.gradle`.

```groovy
// Provide @notifee/core
def notifeeDir = new File(["node", "--print", "require.resolve('@notifee/react-native/package.json')"].execute(null, rootDir).text.trim()).parentFile
rootProject.allprojects {
  repositories {
    maven {
      url "$notifeeDir/android/libs"
    }
  }
}
// We set compileSdkVersion to 33 since @notifee requires it minimum.
project.ext {
  compileSdkVersion = 33
  minSdkVersion = 20
}
```

## app.gradle

Set `minSdkVersion` to 20.

```
defaultConfig {
    minSdkVersion 20
```

## nativescript.config.ts

Running `HeadlessJSTasks` on android in background/killed state, requires that we patch NativeScript application to install ReactNativeHost.

```
export default {
  ...
  "open-native": {
    patchAndroidApplication: true,
  }
}
```
