import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../components/Button';
import {StyledText, StyledView} from '../components/StyledComponents';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const LaunchScreen = ({navigation}) => {
  return (
    <StyledView>
      <ImageBackground
        style={styles.image}
        source={require('../../public/landing-page.png')}
      />
      <StyledView className="h-full w-full justify-between pt-12">
        <StyledView className="ml-10">
          <StyledText className="text-5xl font-bold text-white">
            Hyperhire
          </StyledText>
          <StyledText className="text-5xl font-bold text-white">
            assignment
          </StyledText>
        </StyledView>

        <LinearGradient
          style={styles.linearGradient}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}
          colors={['#16171800', '#161718']}>
          <Button
            onPress={() => navigation.navigate('/create-account')}
            text={'Sign up for free'}
            classes="bg-arctic-blue"
            leftIcon={<MaterialIcons name="login" size={20} color={'white'} />}
            rightIcon={
              <MaterialIcons name="arrow-forward" size={20} color={'white'} />
            }
          />
          <Button
            text={'Continue with Email  '}
            classes="bg-gray mt-3 mb-12"
            leftIcon={
              <MaterialIcons name="mail-outline" size={20} color={'white'} />
            }
            rightIcon={
              <MaterialIcons name="arrow-forward" size={20} color={'white'} />
            }
          />
        </LinearGradient>
      </StyledView>
    </StyledView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    aspectRatio: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  linearGradient: {
    paddingHorizontal: 20,
  },
});

export default LaunchScreen;
