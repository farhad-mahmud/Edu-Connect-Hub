import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';
import { useAuth } from '../context/AuthContext';

const HomeScreen = ({ navigation }) => {
  const { user } = useAuth();
  const [posts, setPosts] = useState([
    {
      id: '1',
      author: 'Dr. Aliur Rahman',
      role: 'Professor of Computer Science',
      avatar: require('../../assets/aliur-rahman.jpg'),
      time: '2h ago',
      content: 'Just published a new research paper on Machine Learning applications in Healthcare. Check it out! 🎓',
      likes: 124,
      comments: 23,
      shares: 15,
      image: null,
    },
    {
      id: '2',
      author: 'Shahriar Kabir',
      role: 'PhD Student',
      avatar: require('../../assets/shahriar-kabir.jpg'),
      time: '4h ago',
      content: 'Looking for collaboration on my thesis about Quantum Computing. Anyone interested?',
      likes: 45,
      comments: 12,
      shares: 5,
      image: null,
    },
    {
      id: '3',
      author: 'Prof. Koushik Hasan',
      role: 'Research Director',
      avatar: require('../../assets/koushik-hasan.jpg'),
      time: '6h ago',
      content: 'Exciting breakthrough in our lab! Our team has developed a new algorithm that improves efficiency by 40%.',
      likes: 256,
      comments: 45,
      shares: 67,
      image: require('../../assets/lab.jpg'),
    },
    {
      id: '4',
      author: 'Farhad Mahmud',
      role: 'Graduate Student',
      avatar: require('../../assets/farhad-mahmud.jpg'),
      time: '1d ago',
      content: 'Attending the International AI Conference next week. Who else is going? Would love to connect! 🤝',
      likes: 89,
      comments: 34,
      shares: 12,
      image: null,
    },
    {
      id: '5',
      author: 'Tanha',
      role: 'Research Assistant',
      avatar: require('../../assets/tanha.jpg'),
      time: '2d ago',
      content: 'Excited to share my latest findings on Neural Networks and Deep Learning! The future of AI is incredibly promising. 🚀✨',
      likes: 167,
      comments: 28,
      shares: 19,
      image: require('../../assets/tanha.jpg'),
    },
  ]);

  const [likedPosts, setLikedPosts] = useState({});

  const handleLike = (postId) => {
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
    
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: likedPosts[postId] ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }));
  };

  const renderPost = ({ item }) => (
    <TouchableOpacity 
      style={styles.postCard}
      onPress={() => navigation.navigate('PostDetail', { post: item })}
      activeOpacity={0.9}
    >
      {/* Post Header */}
      <View style={styles.postHeader}>
        <Image source={item.avatar} style={styles.avatar} />
        <View style={styles.authorInfo}>
          <Text style={styles.authorName}>{item.author}</Text>
          <Text style={styles.authorRole}>{item.role}</Text>
          <Text style={styles.postTime}>{item.time}</Text>
        </View>
        <Ionicons name="ellipsis-horizontal" size={24} color={colors.mediumGray} />
      </View>

      {/* Post Content */}
      <Text style={styles.postContent}>{item.content}</Text>

      {/* Post Image */}
      {item.image && (
        <Image 
          source={typeof item.image === 'string' ? { uri: item.image } : item.image} 
          style={styles.postImage} 
        />
      )}

      {/* Post Stats */}
      <View style={styles.postStats}>
        <Text style={styles.statsText}>{item.likes} likes</Text>
        <View style={styles.statsRight}>
          <Text style={styles.statsText}>{item.comments} comments</Text>
          <Text style={styles.statsText}> • {item.shares} shares</Text>
        </View>
      </View>

      {/* Post Actions */}
      <View style={styles.postActions}>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => handleLike(item.id)}
        >
          <Ionicons 
            name={likedPosts[item.id] ? "heart" : "heart-outline"} 
            size={24} 
            color={likedPosts[item.id] ? colors.danger : colors.mediumGray} 
          />
          <Text style={[styles.actionText, likedPosts[item.id] && styles.actionTextActive]}>
            Like
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubble-outline" size={24} color={colors.mediumGray} />
          <Text style={styles.actionText}>Comment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="share-social-outline" size={24} color={colors.mediumGray} />
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          (['expert', 'teacher', 'admin'].includes(user?.role)) ? (
            <TouchableOpacity 
              style={styles.createPostButton}
              onPress={() => navigation.navigate('CreatePost')}
            >
              <Image 
                source={require('../../assets/shahriar-kabir.jpg')} 
                style={styles.smallAvatar} 
              />
              <Text style={styles.createPostText}>Share your thoughts...</Text>
              <Ionicons name="images-outline" size={24} color={colors.primary} />
            </TouchableOpacity>
          ) : null
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContent: {
    paddingBottom: 120,
  },
  createPostButton: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 12,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  smallAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  createPostText: {
    flex: 1,
    fontSize: 16,
    color: colors.textLight,
  },
  postCard: {
    backgroundColor: colors.white,
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 12,
    padding: 15,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  authorInfo: {
    flex: 1,
  },
  authorName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  authorRole: {
    fontSize: 13,
    color: colors.textLight,
    marginBottom: 2,
  },
  postTime: {
    fontSize: 12,
    color: colors.mediumGray,
  },
  postContent: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.text,
    marginBottom: 12,
  },
  postImage: {
    width: '100%',
    height: 220,
    borderRadius: 10,
    marginBottom: 12,
  },
  postStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: colors.lightGray,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  statsRight: {
    flexDirection: 'row',
  },
  statsText: {
    fontSize: 13,
    color: colors.textLight,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  actionText: {
    fontSize: 14,
    color: colors.mediumGray,
    marginLeft: 6,
    fontWeight: '500',
  },
  actionTextActive: {
    color: colors.danger,
  },
});

export default HomeScreen;
