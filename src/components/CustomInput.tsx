import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styled} from 'nativewind';
import {StyledPressable} from './StyledComponents';

const StyledTextInput = styled(TextInput);
const StyledView = styled(View);
const StyledTouchableOpacity = styled(TouchableOpacity);

const CustomTextInput = ({
  isPassword = false,
  placeholder = 'Enter text',
  showArrow = false,
  onPress,
  onChange,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <StyledView className="flex-row items-center rounded-2xl p-2 bg-[#F9FAFB] opacity-1">
      <StyledTextInput
        className="flex-1 text-base text-black"
        placeholder={placeholder}
        secureTextEntry={isPassword && !isVisible}
        onChangeText={onChange}
      />
      {isPassword && (
        <StyledTouchableOpacity onPress={toggleVisibility} className="ml-2">
          {isVisible ? (
            <MaterialIcons name="visibility_off" size={24} color={'#101828'} />
          ) : (
            <MaterialIcons name="visibility" size={24} color={'#101828'} />
          )}
        </StyledTouchableOpacity>
      )}
      <StyledPressable onPress={onPress}>
        {showArrow && (
          <MaterialIcons name="expand-more" size={24} color={'#101828'} />
        )}
      </StyledPressable>
    </StyledView>
  );
};

export default CustomTextInput;
