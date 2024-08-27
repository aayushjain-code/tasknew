import React from 'react';
import {Pressable, View} from 'react-native';
import {StyledPressable, StyledText, StyledView} from './StyledComponents';

interface ButtonProps {
  leftIcon?: React.ReactNode;
  text?: string;
  rightIcon?: React.ReactNode;
  classes?: string;
  onPress?: () => void;
}

const Button = ({leftIcon, text, rightIcon, classes, onPress}: ButtonProps) => {
  return (
    <StyledPressable onPress={onPress}>
      <StyledView
        className={`flex-row items-center justify-between rounded-full p-1 ${classes}`}>
        <StyledView className="flex-row">
          {leftIcon && <StyledView className="ml-4">{leftIcon}</StyledView>}
          {text && (
            <StyledText className="text-white text-center font-bold ml-4">
              {text}
            </StyledText>
          )}
        </StyledView>
        {rightIcon && (
          <StyledView className="ml-2 rounded-full border border-white p-3">
            {rightIcon}
          </StyledView>
        )}
      </StyledView>
    </StyledPressable>
  );
};

export default Button;
