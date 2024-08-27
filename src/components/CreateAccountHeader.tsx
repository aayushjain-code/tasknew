import React from 'react';
import {StyledText, StyledView} from './StyledComponents';
import MaterialIcons from 'react-native-vector-icons//MaterialIcons';

const CreateAccountHeader = () => {
  return (
    <StyledView className="p-5 flex-row items-center gap-5">
      <StyledView className="p-3 rounded-full border self-start">
        <MaterialIcons name="arrow-back" size={20} />
      </StyledView>
      <StyledText className="font-extrabold text-2xl text-blue-gray">
        Create Account
      </StyledText>
    </StyledView>
  );
};

export default CreateAccountHeader;
