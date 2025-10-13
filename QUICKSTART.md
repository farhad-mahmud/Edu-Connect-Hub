# 🚀 Quick Start Guide - AcademicConnect

## Welcome to AcademicConnect!

Your academic social networking platform is ready to use. Here's everything you need to know to get started.

## 📱 What You Just Built

A full-featured social application with:

- ✅ Social Feed (Like Facebook)
- ✅ Job Board (Like LinkedIn)
- ✅ Messaging (Like WhatsApp)
- ✅ Expert Consultation Marketplace
- ✅ User Profiles with CV Management

## 🎯 How to Use

### 1. Running the App

The development server should be running. If not, run:

```bash
npm start
```

### 2. View on Device/Emulator

**Option A - Physical Device:**

1. Install "Expo Go" app from App Store/Play Store
2. Scan the QR code shown in terminal
3. App will load on your phone

**Option B - iOS Simulator:**

- Press `i` in the terminal
- Or press "Run on iOS simulator" in Expo Dev Tools

**Option C - Android Emulator:**

- Press `a` in the terminal
- Or press "Run on Android device/emulator" in Expo Dev Tools

### 3. Navigate the App

#### Home Tab (Social Feed)

- View posts from academics and researchers
- Tap "Share your thoughts..." to create a new post
- Like, comment, or share posts
- Tap any post to view full details and comments

#### Jobs Tab

- Browse job opportunities
- Use search bar to find specific jobs
- Filter by category (Research, Teaching, Industry, Internship)
- Tap "Post Job" to create a new job listing
- Tap any job to view details and apply

#### Messages Tab

- View all your conversations
- See online status and unread messages
- Quick actions: Create groups, start new chats, video calls
- Tap any conversation to open the chat

#### Experts Tab

- Browse expert consultants
- Filter by expertise category
- View ratings, reviews, and hourly rates
- Tap an expert to view profile and book consultation
- Select time slot and book a session

#### Profile Tab

- View and edit your profile
- Manage CV/Resume
- Access saved posts and job applications
- View scheduled consultations
- Adjust settings and preferences

## 🎨 Sample Data

The app comes pre-loaded with sample data:

- **4 sample posts** on the Home feed
- **6 sample jobs** across different categories
- **6 sample conversations** with different users
- **6 sample experts** from various fields

## 🛠️ Customization Guide

### Change Colors

Edit `src/constants/colors.js`:

```javascript
export default {
  primary: "#6C63FF", // Change this to your brand color
  secondary: "#4ECDC4", // Secondary brand color
  // ... more colors
};
```

### Add New Features

1. Create new screen in `src/screens/`
2. Import it in `App.js`
3. Add to navigation structure

### Modify Existing Screens

All screens are in `src/screens/` folder. Each is self-contained and easy to modify.

## 📊 Key Features to Explore

### 1. Create a Post

1. Go to Home tab
2. Tap "Share your thoughts..."
3. Write content
4. Add image (optional)
5. Add location/tags
6. Tap "Post"

### 2. Post a Job

1. Go to Jobs tab
2. Tap "Post Job" button
3. Fill in job details
4. Select job type
5. Add requirements
6. Tap "Post Job"

### 3. Send a Message

1. Go to Messages tab
2. Tap on any conversation
3. Type your message
4. Tap send button
5. Use attach button for media

### 4. Book Expert Consultation

1. Go to Experts tab
2. Browse or search experts
3. Tap on an expert
4. Select available time slot
5. Tap "Book Now"

## 🎓 Learning Resources

### React Navigation

- [Documentation](https://reactnavigation.org/)
- Used for tab and stack navigation

### Expo

- [Documentation](https://docs.expo.dev/)
- Platform for building React Native apps

### React Native

- [Documentation](https://reactnative.dev/)
- Core framework

## 🐛 Troubleshooting

### App won't start?

```bash
# Clear cache and restart
npm start --clear
```

### Metro bundler issues?

```bash
# Kill existing processes
npx expo start --clear
```

### Dependencies issue?

```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

### iOS Simulator not working?

```bash
# Make sure Xcode is installed
xcode-select --install
```

### Android Emulator not working?

- Ensure Android Studio is installed
- Start emulator from Android Studio first
- Then run: `npm start` and press `a`

## 📈 Next Steps

### Immediate Actions:

1. ✅ Test all navigation flows
2. ✅ Try creating posts and jobs
3. ✅ Explore expert consultation flow
4. ✅ Test messaging interface

### Development Tasks:

1. Connect to a backend (Firebase/Supabase)
2. Implement user authentication
3. Add real-time data updates
4. Integrate payment gateway
5. Add image picker functionality
6. Implement push notifications

### Design Improvements:

1. Add loading states
2. Implement pull-to-refresh
3. Add skeleton screens
4. Enhance animations
5. Add custom fonts

## 💡 Tips

1. **Hot Reload**: Just save your files, changes appear automatically
2. **Debug Menu**: Shake your device or press `Ctrl+M` (Android) / `Cmd+D` (iOS)
3. **Console Logs**: Check terminal for `console.log()` outputs
4. **Inspect Elements**: Use React Native Debugger

## 🎉 You're Ready!

Your application is fully functional and ready to customize. Start by exploring all the features, then begin adding your own touches!

## 📞 Need Help?

- Check the README.md for detailed documentation
- Review individual screen files for code examples
- Each screen is well-commented for learning

---

**Happy Coding! 🚀**
