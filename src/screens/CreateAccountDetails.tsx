import React from 'react';
import {FlatList, Text, View} from 'react-native';
import GameCard from '../components/GameCard';
import {styled} from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

const CreateAccountDetails = () => {
  return (
    <StyledView className="p-4 bg-white">
      <StyledText className="font-extrabold text-2xl text-blue-gray">
        Competition
      </StyledText>
      <StyledText className="font-normal text-[#344054]">
        An account is needed per one host. If you already have an account for
        the host of competition you want to sign up, you can login and register.
      </StyledText>

      <StyledView className="pt-4">
        <FlatList
          data={[1, 2, 3, 4]}
          renderItem={({item}) => <GameCard />}
          ItemSeparatorComponent={() => <StyledView className="py-2" />}
        />
      </StyledView>
    </StyledView>
  );
};

export default CreateAccountDetails;
