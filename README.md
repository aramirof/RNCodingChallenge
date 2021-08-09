# Maniak's React Native Coding Challenge

## How tu run this app?

1. Download github repo
2. Install dependencies
```
  yarn install
  cd ios && pod install
```
3. On root folder, build and run.
```
# For Android
npx react-native run-android

# For iOS
npx react-native run-ios
```

## Troubleshooting

If iOS build can't run, try changing the development team on Xcode.

1. Open ios/RNCodingChallenge.xcworkspace
2. Go to RNCodingChallenge target - Signing & Capabilities
3. Select a correct team