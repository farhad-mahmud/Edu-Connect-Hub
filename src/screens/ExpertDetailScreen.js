import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';

const ExpertDetailScreen = ({ route, navigation }) => {
  const { expert } = route.params;
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const timeSlots = [
    { id: '1', time: '9:00 AM', available: true },
    { id: '2', time: '10:00 AM', available: true },
    { id: '3', time: '11:00 AM', available: false },
    { id: '4', time: '2:00 PM', available: true },
    { id: '5', time: '3:00 PM', available: true },
    { id: '6', time: '4:00 PM', available: false },
  ];

  const reviews = [
    {
      id: '1',
      author: 'Shopnil Karmakar',
      avatar: require('../../assets/shopnil-karmakar.jpg'),
      rating: 5,
      comment: 'Excellent consultation! Very knowledgeable and helpful.',
      date: '2 days ago',
    },
    {
      id: '2',
      author: 'Mahim',
      avatar: require('../../assets/mahim.jpg'),
      rating: 5,
      comment: 'Highly recommend! Great insights and practical advice.',
      date: '1 week ago',
    },
    {
      id: '3',
      author: 'Mahadi',
      avatar: require('../../assets/mahadi.jpg'),
      rating: 4,
      comment: 'Very professional and informative session.',
      date: '2 weeks ago',
    },
  ];

  const handleBookConsultation = () => {
    if (selectedTimeSlot) {
      alert(`Booking confirmed for ${selectedTimeSlot.time}`);
    } else {
      alert('Please select a time slot');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Expert Profile Header */}
        <View style={styles.header}>
          <Image source={expert.avatar} style={styles.avatar} />
          <Text style={styles.name}>{expert.name}</Text>
          <Text style={styles.title}>{expert.title}</Text>
          
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={20} color={colors.warning} />
            <Text style={styles.rating}>{expert.rating}</Text>
            <Text style={styles.reviews}>({expert.reviews} reviews)</Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{expert.experience}</Text>
              <Text style={styles.statLabel}>Experience</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>${expert.hourlyRate}/hr</Text>
              <Text style={styles.statLabel}>Hourly Rate</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{expert.reviews}</Text>
              <Text style={styles.statLabel}>Consultations</Text>
            </View>
          </View>

          {expert.available && (
            <View style={styles.availableBadge}>
              <View style={styles.availableDot} />
              <Text style={styles.availableText}>Available Now</Text>
            </View>
          )}
        </View>

        {/* Expertise */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Expertise</Text>
          <View style={styles.expertiseContainer}>
            {expert.expertise.map((skill, index) => (
              <View key={index} style={styles.expertiseTag}>
                <Ionicons name="checkmark-circle" size={16} color={colors.primary} />
                <Text style={styles.expertiseText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* About */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.aboutText}>
            {expert.name} is a highly experienced professional with {expert.experience} of expertise in {expert.expertise.join(', ')}. 
            They have helped numerous students and professionals achieve their academic and career goals through personalized consultation sessions.
          </Text>
        </View>

        {/* Available Time Slots */}
        {expert.available && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Available Time Slots (Today)</Text>
            <View style={styles.timeSlotsContainer}>
              {timeSlots.map((slot) => (
                <TouchableOpacity
                  key={slot.id}
                  style={[
                    styles.timeSlot,
                    !slot.available && styles.timeSlotDisabled,
                    selectedTimeSlot?.id === slot.id && styles.timeSlotSelected,
                  ]}
                  onPress={() => slot.available && setSelectedTimeSlot(slot)}
                  disabled={!slot.available}
                >
                  <Text
                    style={[
                      styles.timeSlotText,
                      !slot.available && styles.timeSlotTextDisabled,
                      selectedTimeSlot?.id === slot.id && styles.timeSlotTextSelected,
                    ]}
                  >
                    {slot.time}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* Reviews */}
        <View style={styles.section}>
          <View style={styles.reviewsHeader}>
            <Text style={styles.sectionTitle}>Reviews ({expert.reviews})</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          {reviews.map((review) => (
            <View key={review.id} style={styles.reviewCard}>
              <View style={styles.reviewHeader}>
                <Image source={review.avatar} style={styles.reviewAvatar} />
                <View style={styles.reviewInfo}>
                  <Text style={styles.reviewAuthor}>{review.author}</Text>
                  <View style={styles.reviewRating}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Ionicons key={i} name="star" size={14} color={colors.warning} />
                    ))}
                  </View>
                </View>
                <Text style={styles.reviewDate}>{review.date}</Text>
              </View>
              <Text style={styles.reviewComment}>{review.comment}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Fixed Bottom Bar */}
      {expert.available && (
        <View style={styles.bottomBar}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Consultation Fee</Text>
            <Text style={styles.price}>${expert.hourlyRate}/hour</Text>
          </View>
          <TouchableOpacity 
            style={styles.bookButton}
            onPress={handleBookConsultation}
          >
            <Ionicons name="calendar" size={20} color={colors.white} />
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.white,
    padding: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: colors.primary,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    color: colors.textLight,
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  rating: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginLeft: 6,
  },
  reviews: {
    fontSize: 14,
    color: colors.textLight,
    marginLeft: 6,
  },
  statsContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.border,
    marginBottom: 15,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textLight,
  },
  statDivider: {
    width: 1,
    backgroundColor: colors.border,
  },
  availableBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.success + '20',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  availableDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.success,
    marginRight: 8,
  },
  availableText: {
    fontSize: 14,
    color: colors.success,
    fontWeight: '600',
  },
  section: {
    backgroundColor: colors.white,
    padding: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 15,
  },
  expertiseContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  expertiseTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    margin: 4,
  },
  expertiseText: {
    fontSize: 14,
    color: colors.text,
    marginLeft: 6,
    fontWeight: '500',
  },
  aboutText: {
    fontSize: 15,
    lineHeight: 24,
    color: colors.textLight,
  },
  timeSlotsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  timeSlot: {
    backgroundColor: colors.white,
    borderWidth: 1.5,
    borderColor: colors.border,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    margin: 6,
  },
  timeSlotSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  timeSlotDisabled: {
    backgroundColor: colors.lightGray,
    borderColor: colors.lightGray,
  },
  timeSlotText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  timeSlotTextSelected: {
    color: colors.white,
  },
  timeSlotTextDisabled: {
    color: colors.mediumGray,
  },
  reviewsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  seeAllText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
  },
  reviewCard: {
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  reviewHeader: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  reviewAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  reviewInfo: {
    flex: 1,
  },
  reviewAuthor: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  reviewRating: {
    flexDirection: 'row',
  },
  reviewDate: {
    fontSize: 12,
    color: colors.textLight,
  },
  reviewComment: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.textLight,
  },
  bottomBar: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
  },
  priceContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  priceLabel: {
    fontSize: 12,
    color: colors.textLight,
    marginBottom: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
  },
  bookButton: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  bookButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default ExpertDetailScreen;
