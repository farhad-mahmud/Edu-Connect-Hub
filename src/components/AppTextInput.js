import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const AppTextInput = ({ leftIcon, rightIcon, containerStyle, style, ...props }) => {
  return (
    <View style={[styles.inputWrap, containerStyle]}>
      {leftIcon}
      <TextInput
        style={[styles.input, style]}
        placeholderTextColor={colors.textLight}
        {...props}
      />
      {rightIcon}
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 12,
    paddingVertical: 12,
    gap: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.text,
  },
});

export default AppTextInput;
