import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {StyledText, StyledView} from './StyledComponents';

const GameCard = () => {
  return (
    <StyledView className="bg-arctic-blue rounded-2xl p-8">
      <ImageBackground
        style={styles.image}
        source={require('../../public/card-background.png')}
      />
      <StyledText className="text-lg text-white font-bold">
        20th Asian Game - Achi Nagoya 2026 (Winter)
      </StyledText>
      <StyledView>
        <StyledText className="text-sm text-white font-medium">
          YYYY-MM-DD ~ YYYY-MM-DD
        </StyledText>
        <StyledText className="text-sm text-[#B8BFFF] font-medium">
          Pyeongchang, Gangwon-do, Korea
        </StyledText>
      </StyledView>
    </StyledView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

export default GameCard;
