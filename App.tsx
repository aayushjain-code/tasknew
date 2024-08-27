/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import LaunchScreen from './src/screens/LaunchScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateAccountDetails from './src/screens/CreateAccountDetails';
import CreateAccount from './src/screens/CreateAccount';
import Home from './src/screens/Home';
import CreateAccountHeader from './src/components/CreateAccountHeader';
import CreateAccountDetailsHeader from './src/components/CreateAccountDetailsHeader';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text className="text-yellow-400 text-lg">{title}</Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="/"
          options={{headerShown: false}}
          component={LaunchScreen}
        />
        <Stack.Screen
          name="/create-account-details"
          options={{
            headerShown: true,
            header: () => <CreateAccountDetailsHeader />,
          }}
          component={CreateAccountDetails}
        />
        <Stack.Screen
          name="/create-account"
          options={{headerShown: true, header: () => <CreateAccountHeader />}}
          component={CreateAccount}
        />
        <Stack.Screen
          name="/home"
          options={{headerShown: false}}
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
