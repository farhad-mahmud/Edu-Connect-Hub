import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';

const JobDetailScreen = ({ route, navigation }) => {
  const { job } = route.params;
  const [saved, setSaved] = useState(false);

  const jobDetails = {
    responsibilities: [
      'Conduct cutting-edge research in AI/ML',
      'Publish papers in top-tier conferences',
      'Collaborate with senior researchers',
      'Mentor undergraduate students',
    ],
    requirements: [
      "Master's degree or higher in Computer Science",
      'Strong background in Machine Learning',
      'Python, TensorFlow, PyTorch experience',
      'Excellent communication skills',
      'Published research papers (preferred)',
    ],
    benefits: [
      'Competitive salary package',
      'Health insurance coverage',
      'Research funding opportunities',
      'Conference travel support',
      'Flexible work arrangements',
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Job Header */}
        <View style={styles.header}>
          <View style={styles.companyLogo}>
            <Text style={styles.companyInitial}>{job.company[0]}</Text>
          </View>
          <Text style={styles.jobTitle}>{job.title}</Text>
          <Text style={styles.companyName}>{job.company}</Text>
          
          <View style={styles.jobMetaContainer}>
            <View style={styles.metaItem}>
              <Ionicons name="location" size={18} color={colors.primary} />
              <Text style={styles.metaText}>{job.location}</Text>
            </View>
            <View style={styles.metaItem}>
              <Ionicons name="time" size={18} color={colors.primary} />
              <Text style={styles.metaText}>{job.type}</Text>
            </View>
            <View style={styles.metaItem}>
              <Ionicons name="cash" size={18} color={colors.primary} />
              <Text style={styles.metaText}>{job.salary}</Text>
            </View>
          </View>

          <View style={styles.actionButtons}>
            <TouchableOpacity 
              style={styles.applyButton}
              onPress={() => alert('Application submitted!')}
            >
              <Text style={styles.applyButtonText}>Apply Now</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.saveButton}
              onPress={() => setSaved(!saved)}
            >
              <Ionicons 
                name={saved ? "bookmark" : "bookmark-outline"} 
                size={24} 
                color={saved ? colors.primary : colors.text} 
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Job Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{job.description}</Text>
        </View>

        {/* Responsibilities */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Responsibilities</Text>
          {jobDetails.responsibilities.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <View style={styles.bullet} />
              <Text style={styles.listText}>{item}</Text>
            </View>
          ))}
        </View>

        {/* Requirements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Requirements</Text>
          {jobDetails.requirements.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Ionicons name="checkmark-circle" size={20} color={colors.success} />
              <Text style={styles.listText}>{item}</Text>
            </View>
          ))}
        </View>

        {/* Benefits */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Benefits</Text>
          {jobDetails.benefits.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Ionicons name="star" size={18} color={colors.warning} />
              <Text style={styles.listText}>{item}</Text>
            </View>
          ))}
        </View>

        {/* Posted Info */}
        <View style={styles.footer}>
          <Text style={styles.postedText}>Posted {job.posted}</Text>
        </View>
      </ScrollView>

      {/* Fixed Bottom Apply Button */}
      <View style={styles.bottomBar}>
        <TouchableOpacity 
          style={styles.bottomApplyButton}
          onPress={() => alert('Application submitted!')}
        >
          <Ionicons name="paper-plane" size={20} color={colors.white} />
          <Text style={styles.bottomApplyText}>Apply for this Position</Text>
        </TouchableOpacity>
      </View>
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
  companyLogo: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  companyInitial: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.white,
  },
  jobTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  companyName: {
    fontSize: 16,
    color: colors.textLight,
    marginBottom: 20,
  },
  jobMetaContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    margin: 4,
  },
  metaText: {
    fontSize: 13,
    color: colors.text,
    marginLeft: 6,
    fontWeight: '500',
  },
  actionButtons: {
    flexDirection: 'row',
    width: '100%',
  },
  applyButton: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 10,
  },
  applyButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  saveButton: {
    width: 50,
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
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
  description: {
    fontSize: 15,
    lineHeight: 24,
    color: colors.textLight,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.primary,
    marginTop: 8,
    marginRight: 12,
  },
  listText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 22,
    color: colors.text,
    marginLeft: 10,
  },
  footer: {
    backgroundColor: colors.white,
    padding: 20,
    alignItems: 'center',
    marginBottom: 80,
  },
  postedText: {
    fontSize: 13,
    color: colors.textLight,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
  },
  bottomApplyButton: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomApplyText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
});

export default JobDetailScreen;
