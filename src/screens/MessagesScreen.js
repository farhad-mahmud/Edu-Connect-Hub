import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';

const MessagesScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const conversations = [
    {
      id: '1',
      name: 'Dr. Aliur Rahman',
      avatar: require('../../assets/aliur-rahman.jpg'),
      lastMessage: 'Thanks for the research paper!',
      time: '10:30 AM',
      unread: 2,
      online: true,
    },
    {
      id: '2',
      name: 'Shahriar Kabir',
      avatar: require('../../assets/shahriar-kabir.jpg'),
      lastMessage: 'When is our next meeting?',
      time: 'Yesterday',
      unread: 0,
      online: false,
    },
    {
      id: '3',
      name: 'Prof. Koushik Hasan',
      avatar: require('../../assets/koushik-hasan.jpg'),
      lastMessage: 'I reviewed your thesis draft',
      time: '2 days ago',
      unread: 1,
      online: true,
    },
    {
      id: '4',
      name: 'Farhad Mahmud',
      avatar: require('../../assets/farhad-mahmud.jpg'),
      lastMessage: 'See you at the conference!',
      time: '3 days ago',
      unread: 0,
      online: false,
    },
    {
      id: '5',
      name: 'Research Team',
      avatar: require('../../assets/refat.jpg'),
      lastMessage: 'Refat: Meeting at 3 PM tomorrow',
      time: '4 days ago',
      unread: 5,
      online: false,
      isGroup: true,
    },
    {
      id: '6',
      name: 'Dr. Tanvir Ahmed',
      avatar: require('../../assets/tanvir-ahmed.jpg'),
      lastMessage: 'Your presentation was excellent!',
      time: '1 week ago',
      unread: 0,
      online: true,
    },
  ];

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderConversation = ({ item }) => (
    <TouchableOpacity
      style={styles.conversationCard}
      onPress={() => navigation.navigate('Chat', { 
        id: item.id, 
        name: item.name,
        avatar: item.avatar 
      })}
      activeOpacity={0.7}
    >
      <View style={styles.avatarContainer}>
        <Image source={item.avatar} style={styles.avatar} />
        {item.online && <View style={styles.onlineIndicator} />}
      </View>

      <View style={styles.conversationInfo}>
        <View style={styles.conversationHeader}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <View style={styles.conversationFooter}>
          <Text 
            style={[
              styles.lastMessage,
              item.unread > 0 && styles.lastMessageUnread
            ]}
            numberOfLines={1}
          >
            {item.lastMessage}
          </Text>
          {item.unread > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadText}>{item.unread}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color={colors.textLight} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search conversations..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor={colors.textLight}
        />
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.quickActionButton}>
          <View style={styles.quickActionIcon}>
            <Ionicons name="people-outline" size={24} color={colors.primary} />
          </View>
          <Text style={styles.quickActionText}>Groups</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quickActionButton}>
          <View style={styles.quickActionIcon}>
            <Ionicons name="person-add-outline" size={24} color={colors.primary} />
          </View>
          <Text style={styles.quickActionText}>New Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quickActionButton}>
          <View style={styles.quickActionIcon}>
            <Ionicons name="videocam-outline" size={24} color={colors.primary} />
          </View>
          <Text style={styles.quickActionText}>Video Call</Text>
        </TouchableOpacity>
      </View>

      {/* Conversations List */}
      <View style={styles.conversationsHeader}>
        <Text style={styles.conversationsTitle}>Messages</Text>
        <Text style={styles.conversationsCount}>
          {filteredConversations.filter(c => c.unread > 0).length} unread
        </Text>
      </View>

      <FlatList
        data={filteredConversations}
        renderItem={renderConversation}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="create-outline" size={28} color={colors.white} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 15,
    borderRadius: 12,
    paddingHorizontal: 15,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: colors.text,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 15,
    marginBottom: 20,
  },
  quickActionButton: {
    alignItems: 'center',
  },
  quickActionIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  quickActionText: {
    fontSize: 12,
    color: colors.text,
    fontWeight: '500',
  },
  conversationsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 10,
  },
  conversationsTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
  },
  conversationsCount: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
  },
  listContent: {
    paddingBottom: 120,
  },
  conversationCard: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginHorizontal: 15,
    marginVertical: 4,
    padding: 12,
    borderRadius: 12,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.success,
    borderWidth: 2,
    borderColor: colors.white,
  },
  conversationInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  conversationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  time: {
    fontSize: 12,
    color: colors.textLight,
  },
  conversationFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lastMessage: {
    flex: 1,
    fontSize: 14,
    color: colors.textLight,
  },
  lastMessageUnread: {
    fontWeight: '600',
    color: colors.text,
  },
  unreadBadge: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    minWidth: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
    marginLeft: 8,
  },
  unreadText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '600',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
});

export default MessagesScreen;
