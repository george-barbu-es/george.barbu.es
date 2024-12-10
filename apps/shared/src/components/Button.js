import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styled } from 'nativewind';

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

export const Button = ({
  children,
  className = '',
  textClassName = '',
  ...props
}) => {
  return (
    <StyledTouchableOpacity
      className={`px-4 py-2 bg-blue-500 rounded-md ${className}`}
      {...props}
    >
      <StyledText
        className={`text-white text-center font-bold ${textClassName}`}
      >
        {children}
      </StyledText>
    </StyledTouchableOpacity>
  );
};