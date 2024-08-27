import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import CustomTextInput from '../components/CustomInput';
import {StyledText, StyledView} from '../components/StyledComponents';
import Button from '../components/Button';
import CheckBox from '@react-native-community/checkbox';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CreateAccount = ({navigation}) => {
  const [competition, setCompetition] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [errors, setErrors] = useState<{
    competition?: string;
    email?: string;
    password?: string[];
    confirmPassword?: string;
    firstName?: string;
    lastName?: string;
  }>({});

  const validatePassword = (password: string): string[] => {
    const errorMessages: string[] = [];

    // Check minimum length
    if (password.length < 8) {
      errorMessages.push('Password must be at least 8 characters long.');
    }

    // Check for at least 3 of uppercase, lowercase, numbers, special characters
    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);
    const number = /\d/.test(password);
    const specialCharacter = /[~`!@#$%^&*()_\-+=?]/.test(password);

    const conditionsMet = [
      uppercase,
      lowercase,
      number,
      specialCharacter,
    ].filter(Boolean).length;

    if (conditionsMet < 3) {
      errorMessages.push(
        'Password must include at least 3 of the following: uppercase letters, lowercase letters, numbers, or special characters.',
      );
    }

    // Check for only allowed special characters
    const invalidCharacters = /[^A-Za-z\d~`!@#$%^&*()_\-+=?]/.test(password);
    if (invalidCharacters) {
      errorMessages.push(
        'Password contains invalid characters. Only these special characters are allowed: ~`!@#$%^&*()_-+=?',
      );
    }

    return errorMessages;
  };

  const validateEmail = (email: string): boolean => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const submitHandler = () => {
    const newErrors: {
      competition?: string;
      email?: string;
      password?: string[];
      confirmPassword?: string;
      firstName?: string;
      lastName?: string;
    } = {};

    // Check required fields
    if (!competition) {
      newErrors.competition = 'This is a required field';
    }

    if (!email) {
      newErrors.email = 'This is a required field';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Email format is incorrect';
    }

    // Validate password
    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
      newErrors.password = passwordErrors;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    if (!firstName) {
      newErrors.firstName = 'This is a required field';
    }

    if (!lastName) {
      newErrors.lastName = 'This is a required field';
    }

    if (Object.keys(newErrors).length === 0) navigation.navigate('/home');

    setErrors(newErrors);
  };

  return (
    <StyledView className="p-6 h-full bg-white flex-col">
      <ScrollView className="gap-y-3">
        <CustomTextInput
          placeholder="Competition to sign up*"
          onPress={() => navigation.navigate('/create-account-details')}
          showArrow={true}
          onChange={e => setCompetition(e)}
        />
        {errors.competition && (
          <StyledText className="text-red font-normal text-sm">
            {errors.competition}
          </StyledText>
        )}
        <CustomTextInput
          onChange={e => setEmail(e)}
          placeholder="Please enter your email"
        />
        {errors.email && (
          <StyledText className="text-red font-normal text-sm">
            {errors.email}
          </StyledText>
        )}
        <StyledView>
          <CustomTextInput
            onChange={e => setPassword(e)}
            placeholder="Please enter your password"
          />
          <CustomTextInput
            onChange={e => setConfirmPassword(e)}
            placeholder="Re enter your password"
          />
          {errors.password && (
            <>
              <StyledView className="flex-row gap-x-3">
                <MaterialIcons name="done" size={20} color={'#FF2323'} />
                <StyledText className="text-red font-normal text-sm">
                  At least 8 letters
                </StyledText>
              </StyledView>
              <StyledView className="flex-row gap-x-3">
                <MaterialIcons name="done" size={20} color={'#FF2323'} />
                <StyledText className="text-red font-normal text-sm">
                  Include at least 3 uppercase letters, lowercase letters,
                  number, or special letters
                </StyledText>
              </StyledView>
              <StyledText className="text-red font-normal text-sm">
                Special letters are only limited to (~`!@#$%^&*()_-+=?)
              </StyledText>
              {errors.confirmPassword && (
                <StyledText className="text-red font-normal text-sm">
                  {errors.confirmPassword}
                </StyledText>
              )}
            </>
          )}
        </StyledView>
        <CustomTextInput
          onChange={e => setFirstName(e)}
          placeholder="First Name in English*"
        />
        {errors.firstName && (
          <StyledText className="text-red font-normal text-sm">
            {errors.firstName}
          </StyledText>
        )}
        <CustomTextInput
          onChange={e => setLastName(e)}
          placeholder="Last name in English*"
        />
        {errors.lastName && (
          <StyledText className="text-red font-normal text-sm">
            {errors.lastName}
          </StyledText>
        )}
        <StyledView className="flex-row">
          <CheckBox />
          <StyledText className="text-[#475467] font-normal text-sm">
            By signing up, I agree to the Terms & Conditions and Privacy Policy.
          </StyledText>
        </StyledView>
      </ScrollView>
      <Button
        text="Sign Up"
        classes="bg-arctic-blue mt-5"
        onPress={submitHandler}
      />
    </StyledView>
  );
};

export default CreateAccount;
