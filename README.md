# To test this in a simulator/emulator:

Make sure your env is good to run Expo apps locally. This is using Expo development builds in order to utilize the `react-native-launch-arguments` library.

## iOS

1. Prebuild native directories `npm run clean`
2. Build/Run iOS app: `npm run ios`
3. Close app on simulator once opened and running
4. Launch app with CLI args: `xcrun simctl launch booted com.adam.tyler.launchargstest -param "HELLO" -param2 "Adam"`

## Android

1. Prebuild native directories `npm run clean`
2. Build/Run Android app: `npm run android`
3. Close app on emulator once opened and running
4. Launch app: `adb shell am start -W -n com.adam.tyler.launchargstest/.MainActivity -S --es param HELLO --es param2 Adam`

## Use Maestro to Test

Make sure you have Maestro CLI installed locally: [instructions here](https://docs.maestro.dev/getting-started/installing-maestro)

Maestro currently doesn't allow you to select the platform with a CLI command, so only open one of either the simulator or emulator when you want to test.

Run `maestro test .maestro/flow.yaml`
