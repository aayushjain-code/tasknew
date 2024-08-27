import React from 'react';
import {Modal, StyleSheet, StatusBar} from 'react-native';
import Button from './Button';
import {
  StyledImageBackground,
  StyledText,
  StyledView,
} from './StyledComponents';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface CustomModalProps {
  modalVisible: boolean;
  closeModal: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({
  modalVisible,
  closeModal,
}) => {
  return (
    <Modal
      transparent={true}
      visible={modalVisible}
      animationType="fade"
      onRequestClose={closeModal}>
      {/* Ensure the status bar is covered */}
      <StatusBar
        backgroundColor="rgba(0, 0, 0, 0.5)"
        barStyle="light-content"
      />

      <StyledView style={styles.modalBackground}>
        <StyledView className="bg-white p-5 rounded-3xl gap-y-3 w-full bg-white">
          <StyledView className="flex-row items-center justify-between">
            <StyledView className="bg-arctic-blue self-start rounded-full p-4">
              <StyledImageBackground
                style={styles.image}
                source={require('../../public/star.png')}
              />
            </StyledView>
            <StyledView className="border rounded-full p-4">
              <MaterialIcons name="close" color="black" size={25} />
            </StyledView>
          </StyledView>
          <StyledView className="gap-5">
            <StyledText className="text-blue-gray font-black text-2xl">
              Welcome to Hyperhire
            </StyledText>
            <StyledText className="mb-10 text-blue-gray font-normal text-lg">
              Great to have you with us!
            </StyledText>
          </StyledView>
          <Button
            text={'Got it'}
            onPress={closeModal}
            classes="bg-arctic-blue"
          />
        </StyledView>
      </StyledView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingTop: StatusBar.currentHeight,
    padding: 16,
  },
  image: {
    height: 24,
    aspectRatio: 1,
  },
});

export default CustomModal;
