# 📦 Building APK for AcademicConnect

## Quick Guide to Build Android APK

There are two main methods to build an APK with Expo:

---

## Method 1: EAS Build (Recommended - Easiest)

EAS (Expo Application Services) is the modern, recommended way to build your app.

### Step 1: Install EAS CLI

```bash
npm install -g eas-cli
```

### Step 2: Login to Expo Account

```bash
eas login
```

If you don't have an account, create one at [expo.dev](https://expo.dev)

### Step 3: Configure EAS Build

```bash
eas build:configure
```

This creates an `eas.json` configuration file.

### Step 4: Build APK for Android

```bash
eas build -p android --profile preview
```

**Build Options:**

- `--profile preview` - Creates APK (faster, good for testing)
- `--profile production` - Creates AAB for Play Store

### Step 5: Download Your APK

Once build completes (10-20 minutes):

1. EAS will provide a download link
2. Download the APK to your computer
3. Transfer to your Android device
4. Install and test!

---

## Method 2: Local Build with Expo (Older Method)

⚠️ **Note**: This requires Android Studio and more setup.

### Prerequisites

1. Install Android Studio
2. Set up Android SDK
3. Configure environment variables

### Build Locally

```bash
# For development build
npx expo run:android

# For production build
npx expo build:android
```

---

## Method 3: Expo Go (No Build Required - Testing Only)

For quick testing without building:

1. Install **Expo Go** on your Android phone from Play Store
2. Run your development server:
   ```bash
   npm start
   ```
3. Scan the QR code with Expo Go app
4. App runs instantly!

**Limitations**:

- Requires internet connection
- Can't be shared as standalone app
- Only for development testing

---

## 📋 Recommended Workflow for Testing

### For You (Developer Testing):

```bash
# Option 1: Use Expo Go (Fastest)
npm start
# Scan QR code with Expo Go app

# Option 2: Build APK with EAS (Standalone)
eas build -p android --profile preview
```

### For Others (Testers/Clients):

```bash
# Build APK and share the file
eas build -p android --profile preview
# Share the downloaded APK file
```

---

## 🚀 Step-by-Step: Building Your First APK

Let me walk you through the **EAS Build** method (recommended):

### 1. Install EAS CLI

Open terminal and run:

```bash
npm install -g eas-cli
```

### 2. Create Expo Account

If you don't have one:

- Go to [expo.dev](https://expo.dev)
- Sign up for free account

### 3. Login via Terminal

```bash
eas login
```

Enter your Expo credentials.

### 4. Initialize EAS Build

In your project directory:

```bash
cd "e:\codes\react native project\simple project\DoneWithIt"
eas build:configure
```

This will ask:

- **"Would you like to automatically create an EAS project for..."** → Press `Y`
- It will create `eas.json` file

### 5. Start the Build

```bash
eas build -p android --profile preview
```

**What happens:**

1. Your code is uploaded to Expo servers
2. They build your APK in the cloud
3. You get a download link (10-20 minutes)

### 6. Download and Install

1. Click the provided link to download APK
2. Transfer to your Android phone
3. Enable "Install from Unknown Sources" in Android settings
4. Install the APK
5. Test your app!

---

## 📱 Installing APK on Android Device

### Method 1: USB Transfer

1. Connect phone to computer via USB
2. Copy APK to phone's Downloads folder
3. Open file manager on phone
4. Tap the APK file
5. Follow installation prompts

### Method 2: Cloud Transfer

1. Upload APK to Google Drive / Dropbox
2. Open link on phone
3. Download APK
4. Install

### Method 3: Direct Download

1. Host APK on a server
2. Open link directly on phone
3. Download and install

**Note**: You'll need to enable "Install from Unknown Sources" in your Android settings:

- Settings → Security → Unknown Sources → Enable

---

## 🔧 Configuration Tips

### Update app.json

Before building, update these in `app.json`:

```json
{
  "expo": {
    "name": "AcademicConnect",
    "slug": "academic-connect",
    "version": "1.0.0",
    "android": {
      "package": "com.yourname.academicconnect",
      "versionCode": 1,
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#6C63FF"
      }
    }
  }
}
```

### Important Fields:

- **package**: Must be unique (like `com.yourcompany.appname`)
- **version**: App version shown to users
- **versionCode**: Numeric version (increment for updates)

---

## ⚡ Quick Commands Reference

```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Configure EAS
eas build:configure

# Build APK (for testing)
eas build -p android --profile preview

# Build AAB (for Play Store)
eas build -p android --profile production

# Check build status
eas build:list

# Run locally (requires Android Studio)
npx expo run:android
```

---

## 🎯 Which Method Should You Use?

| Method          | Best For             | Pros                         | Cons                                   |
| --------------- | -------------------- | ---------------------------- | -------------------------------------- |
| **EAS Build**   | Production & Testing | Easy, no setup, professional | Requires Expo account                  |
| **Expo Go**     | Quick Development    | Instant, no build time       | Not standalone, needs internet         |
| **Local Build** | Advanced users       | Full control, offline        | Complex setup, requires Android Studio |

**My Recommendation**: Use **EAS Build** with `--profile preview` for your testing APK.

---

## 💰 Pricing

**EAS Build Pricing:**

- **Free Tier**: 30 builds/month (more than enough for testing!)
- **Production Tier**: Unlimited builds ($29/month) - only if you need more

For your testing purposes, the **free tier is perfect**!

---

## 🐛 Troubleshooting

### "EAS CLI not found"

```bash
# Install globally
npm install -g eas-cli

# Or use npx
npx eas-cli build -p android --profile preview
```

### "Build Failed"

- Check error message in terminal
- Ensure `app.json` is properly configured
- Check if package name is unique
- Try: `eas build:configure` again

### "Can't install APK on phone"

- Enable "Unknown Sources" in Android settings
- Check if APK download completed fully
- Ensure phone has enough storage

### "App crashes on startup"

- Check if all dependencies are installed
- Verify navigation setup is correct
- Test in Expo Go first to debug

---

## 📖 Additional Resources

- [EAS Build Documentation](https://docs.expo.dev/build/setup/)
- [Expo Build Process](https://docs.expo.dev/build/introduction/)
- [Android App Distribution](https://docs.expo.dev/distribution/building-standalone-apps/)

---

## 🎉 Next Steps After Building APK

1. **Test thoroughly** on multiple devices
2. **Gather feedback** from testers
3. **Fix bugs** and iterate
4. **Prepare for Play Store** (when ready)
5. **Build production version** with `--profile production`

---

## 📞 Need Help?

If you run into any issues during the build process, check:

1. Expo documentation
2. Error messages in terminal
3. EAS Build dashboard at expo.dev
4. Community forums

---

**Ready to build? Start with these commands:**

```bash
npm install -g eas-cli
eas login
eas build:configure
eas build -p android --profile preview
```

**Good luck with your build! 🚀**
