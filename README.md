# AcademicConnect - Social Platform for Academics

A comprehensive React Native mobile application designed for students, teachers, researchers, and industry experts to connect, collaborate, and grow together.

## 🎯 Features

### 1. Social Feed (Facebook-like)

- Share posts, research updates, and achievements
- Like, comment, and share content
- Follow other academics and researchers
- Image sharing capabilities
- Real-time engagement metrics

### 2. Jobs & Opportunities (LinkedIn-like)

- Browse academic job postings (Research, Teaching, Industry, Internships)
- Post job opportunities
- Filter jobs by category and location
- Detailed job descriptions with requirements and benefits
- Save favorite jobs
- Apply directly through the app

### 3. Messaging System (WhatsApp-like)

- Real-time chat with individuals and groups
- Online/offline status indicators
- Unread message badges
- Voice and video call integration (UI ready)
- Quick actions for new chats and group creation

### 4. Expert Consultation

- Browse expert profiles by category
- View expert ratings, reviews, and expertise
- Book consultation sessions with experts
- Flexible hourly rates based on experience
- Time slot booking system
- Payment integration ready
- Rate limiting based on expert ratings

### 5. Profile Management

- Comprehensive user profiles
- CV/Resume management
- Education and experience tracking
- Privacy and security settings
- Dark mode support
- Customizable notifications

## 🎨 Design Features

- **Clean & Modern UI**: Beautiful, intuitive interface with smooth animations
- **Consistent Color Scheme**: Professional purple and teal color palette
- **Responsive Design**: Works seamlessly on different screen sizes
- **Icon System**: Comprehensive Ionicons integration
- **Tab Navigation**: Easy access to all major features
- **Stack Navigation**: Smooth transitions between screens

## 📱 Screens

### Main Tabs:

1. **Home** - Social feed with posts
2. **Jobs** - Job listings and opportunities
3. **Messages** - Chat conversations
4. **Experts** - Expert consultation marketplace
5. **Profile** - User profile and settings

### Additional Screens:

- Post Details
- Create Post
- Job Details
- Create Job
- Chat (Individual conversation)
- Expert Detail (with booking)

## 🚀 Getting Started

### Prerequisites

- Node.js installed
- Expo CLI installed
- iOS Simulator or Android Emulator (or Expo Go app on your phone)

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Run on your preferred platform:

- Press `a` for Android
- Press `i` for iOS
- Scan QR code with Expo Go app

## 🛠️ Technology Stack

- **React Native** - Cross-platform mobile development
- **Expo** - Development and build tooling
- **React Navigation** - Navigation library
  - Bottom Tabs Navigator
  - Native Stack Navigator
- **Ionicons** - Icon library
- **React Native Safe Area Context** - Safe area handling

## 📦 Project Structure

```
DoneWithIt/
├── src/
│   ├── constants/
│   │   └── colors.js          # Color palette
│   ├── screens/
│   │   ├── HomeScreen.js       # Social feed
│   │   ├── JobsScreen.js       # Job listings
│   │   ├── MessagesScreen.js   # Chat list
│   │   ├── ExpertsScreen.js    # Expert marketplace
│   │   ├── ProfileScreen.js    # User profile
│   │   ├── PostDetailScreen.js
│   │   ├── JobDetailScreen.js
│   │   ├── ExpertDetailScreen.js
│   │   ├── ChatScreen.js
│   │   ├── CreatePostScreen.js
│   │   └── CreateJobScreen.js
│   └── components/             # Reusable components (future)
├── assets/                     # Images and static files
├── App.js                      # Main app component
└── package.json

```

## 🎯 Future Enhancements

### Phase 1 - Backend Integration:

- [ ] User authentication (Firebase/Auth0)
- [ ] Real-time database (Firebase/Supabase)
- [ ] Cloud storage for images
- [ ] Push notifications

### Phase 2 - Enhanced Features:

- [ ] Video conferencing for consultations
- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Advanced search and filters
- [ ] Recommendation algorithm
- [ ] Analytics dashboard

### Phase 3 - Social Features:

- [ ] Groups and communities
- [ ] Events and webinars
- [ ] Research collaboration tools
- [ ] Document sharing
- [ ] Citation management

### Phase 4 - Monetization:

- [ ] Premium subscriptions
- [ ] Featured job postings
- [ ] Expert verification badges
- [ ] Ad integration

## 🎨 Color Palette

- **Primary**: #6C63FF (Purple)
- **Secondary**: #4ECDC4 (Teal)
- **Accent**: #FF6B9D (Pink)
- **Success**: #2ECC71 (Green)
- **Warning**: #F39C12 (Orange)
- **Danger**: #E74C3C (Red)
- **Info**: #3498DB (Blue)

## 👥 Target Audience

- **Students**: Find internships, connect with peers, seek expert advice
- **Researchers**: Share findings, collaborate, find funding opportunities
- **Teachers/Professors**: Post job openings, offer consultations, network
- **Industry Experts**: Monetize knowledge, build reputation, recruit talent

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For questions or support, please open an issue in the repository.

---

**Built with ❤️ for the academic community**
