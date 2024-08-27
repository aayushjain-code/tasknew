import React from 'react';
import {StyledText, StyledView} from './StyledComponents';
import MaterialIcons from 'react-native-vector-icons//MaterialIcons';

const CreateAccountDetailsHeader = () => {
  return (
    <StyledView className="p-3 flex-row items-center gap-5 bg-white">
      <StyledView className="p-3 rounded-full bg-[#F9FAFB] opacity-1 self-start">
        <MaterialIcons name="arrow-back" size={20} />
      </StyledView>
      <StyledView className="p-2 rounded-full flex-row items-center justify-between bg-[#F9FAFB] opacity-1 w-9/12">
        <StyledText className="font-normal text-lg text-blue-gray">
          Asian
        </StyledText>
        <MaterialIcons name="search" size={24} />
      </StyledView>
    </StyledView>
  );
};

export default CreateAccountDetailsHeader;
