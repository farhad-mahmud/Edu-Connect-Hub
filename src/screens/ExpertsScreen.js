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

const ExpertsScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Computer Science', 'Medicine', 'Engineering', 'Business', 'Law'];

  const experts = [
    {
      id: '1',
      name: 'Dr. Aliur Rahman',
      title: 'AI & Machine Learning Expert',
      avatar: require('../../assets/aliur-rahman.jpg'),
      rating: 4.9,
      reviews: 245,
      hourlyRate: 150,
      expertise: ['AI', 'Machine Learning', 'Deep Learning'],
      experience: '15 years',
      category: 'Computer Science',
      available: true,
    },
    {
      id: '2',
      name: 'Prof. Shahriar Kabir',
      title: 'Business Strategy Consultant',
      avatar: require('../../assets/shahriar-kabir.jpg'),
      rating: 4.8,
      reviews: 189,
      hourlyRate: 200,
      expertise: ['Strategy', 'Marketing', 'Leadership'],
      experience: '20 years',
      category: 'Business',
      available: true,
    },
    {
      id: '3',
      name: 'Dr. Koushik Hasan',
      title: 'Medical Research Specialist',
      avatar: require('../../assets/koushik-hasan.jpg'),
      rating: 5.0,
      reviews: 312,
      hourlyRate: 180,
      expertise: ['Clinical Research', 'Biostatistics', 'Epidemiology'],
      experience: '18 years',
      category: 'Medicine',
      available: false,
    },
    {
      id: '4',
      name: 'Dr. Farhad Mahmud',
      title: 'Mechanical Engineering Expert',
      avatar: require('../../assets/farhad-mahmud.jpg'),
      rating: 4.7,
      reviews: 156,
      hourlyRate: 120,
      expertise: ['CAD', 'Robotics', 'Manufacturing'],
      experience: '12 years',
      category: 'Engineering',
      available: true,
    },
    {
      id: '5',
      name: 'Prof. Refat',
      title: 'International Law Consultant',
      avatar: require('../../assets/refat.jpg'),
      rating: 4.9,
      reviews: 203,
      hourlyRate: 250,
      expertise: ['International Law', 'Human Rights', 'IP Law'],
      experience: '22 years',
      category: 'Law',
      available: true,
    },
    {
      id: '6',
      name: 'Dr. Tanvir Ahmed',
      title: 'Data Science & Analytics',
      avatar: require('../../assets/tanvir-ahmed.jpg'),
      rating: 4.8,
      reviews: 178,
      hourlyRate: 140,
      expertise: ['Data Science', 'Python', 'Statistics'],
      experience: '10 years',
      category: 'Computer Science',
      available: true,
    },
  ];

  const filteredExperts = experts.filter(expert => {
    const matchesSearch = expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         expert.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || expert.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const renderExpert = ({ item }) => (
    <TouchableOpacity
      style={styles.expertCard}
      onPress={() => navigation.navigate('ExpertDetail', { expert: item })}
      activeOpacity={0.8}
    >
      <View style={styles.expertHeader}>
        <Image source={item.avatar} style={styles.avatar} />
        {item.available && (
          <View style={styles.availableBadge}>
            <View style={styles.availableDot} />
            <Text style={styles.availableText}>Available</Text>
          </View>
        )}
      </View>

      <View style={styles.expertInfo}>
        <Text style={styles.expertName}>{item.name}</Text>
        <Text style={styles.expertTitle}>{item.title}</Text>

        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color={colors.warning} />
          <Text style={styles.rating}>{item.rating}</Text>
          <Text style={styles.reviews}>({item.reviews} reviews)</Text>
        </View>

        <View style={styles.expertiseContainer}>
          {item.expertise.slice(0, 3).map((skill, index) => (
            <View key={index} style={styles.expertiseTag}>
              <Text style={styles.expertiseText}>{skill}</Text>
            </View>
          ))}
        </View>

        <View style={styles.expertFooter}>
          <View style={styles.experienceContainer}>
            <Ionicons name="briefcase-outline" size={16} color={colors.textLight} />
            <Text style={styles.experience}>{item.experience}</Text>
          </View>
          <View style={styles.rateContainer}>
            <Text style={styles.rateLabel}>Rate: </Text>
            <Text style={styles.rate}>${item.hourlyRate}/hr</Text>
          </View>
        </View>

        <TouchableOpacity 
          style={[
            styles.bookButton,
            !item.available && styles.bookButtonDisabled
          ]}
          disabled={!item.available}
        >
          <Ionicons 
            name="calendar-outline" 
            size={18} 
            color={colors.white} 
          />
          <Text style={styles.bookButtonText}>
            {item.available ? 'Book Consultation' : 'Not Available'}
          </Text>
        </TouchableOpacity>
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
          placeholder="Search experts..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor={colors.textLight}
        />
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="options-outline" size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <View style={styles.categoriesContainer}>
        <FlatList
          horizontal
          data={categories}
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.categoryButton,
                selectedCategory === item && styles.categoryButtonActive,
              ]}
              onPress={() => setSelectedCategory(item)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === item && styles.categoryTextActive,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Info Banner */}
      <View style={styles.infoBanner}>
        <Ionicons name="information-circle-outline" size={24} color={colors.info} />
        <Text style={styles.infoBannerText}>
          Connect with experts for personalized consultation
        </Text>
      </View>

      {/* Experts List */}
      <FlatList
        data={filteredExperts}
        renderItem={renderExpert}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
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
    marginBottom: 10,
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
  filterButton: {
    padding: 8,
  },
  categoriesContainer: {
    marginBottom: 10,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginLeft: 15,
    borderRadius: 20,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
  },
  categoryButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  categoryText: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.text,
  },
  categoryTextActive: {
    color: colors.white,
  },
  infoBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.info + '15',
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 12,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: colors.info,
  },
  infoBannerText: {
    flex: 1,
    fontSize: 13,
    color: colors.text,
    marginLeft: 10,
  },
  listContent: {
    paddingBottom: 120,
    paddingHorizontal: 7.5,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  expertCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 12,
    marginHorizontal: 7.5,
    marginVertical: 8,
    width: '47%',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  expertHeader: {
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  availableBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.success + '20',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  availableDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.success,
    marginRight: 5,
  },
  availableText: {
    fontSize: 11,
    color: colors.success,
    fontWeight: '600',
  },
  expertInfo: {
    flex: 1,
  },
  expertName: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
    textAlign: 'center',
  },
  expertTitle: {
    fontSize: 12,
    color: colors.textLight,
    marginBottom: 8,
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  rating: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
    marginLeft: 4,
  },
  reviews: {
    fontSize: 11,
    color: colors.textLight,
    marginLeft: 4,
  },
  expertiseContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 10,
  },
  expertiseTag: {
    backgroundColor: colors.lightGray,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    margin: 2,
  },
  expertiseText: {
    fontSize: 10,
    color: colors.text,
    fontWeight: '500',
  },
  expertFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: colors.lightGray,
  },
  experienceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  experience: {
    fontSize: 11,
    color: colors.textLight,
    marginLeft: 4,
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rateLabel: {
    fontSize: 11,
    color: colors.textLight,
  },
  rate: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.primary,
  },
  bookButton: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookButtonDisabled: {
    backgroundColor: colors.mediumGray,
  },
  bookButtonText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 6,
  },
});

export default ExpertsScreen;
