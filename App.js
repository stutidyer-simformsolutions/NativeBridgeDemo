/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  NativeModules,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [appVersion, setAppVersion] = useState();
  const [buildNumber, setBuildNumber] = useState();
  const [bundleIdentifier, setBundleIdentifier] = useState();
  const [systemVersion, setSystemVersion] = useState();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const {AppInfoModule} = NativeModules;

  const getAppVersion = () => {
    AppInfoModule?.getAppVersion()
      .then(version => setAppVersion(version))
      .catch(error => console.error('Error getting app version:', error));
  };
  const getBuildNumber = () => {
    AppInfoModule?.getBuildNumber()
      .then(res => setBuildNumber(res))
      .catch(error => console.error('Error getting build number:', error));
  };
  const getBundleIdentifier = () => {
    AppInfoModule?.getBundleIdentifier()
      .then(res => setBundleIdentifier(res))
      .catch(error => console.error('Error getting bundle identifier:', error));
  };

  const getSystemVersion = () => {
    AppInfoModule?.getSystemVersion()
      .then(res => setSystemVersion(res))
      .catch(error => console.error('Error getting system version:', error));
  };

  useEffect(() => {
    getAppVersion();
    getBuildNumber();
    getBundleIdentifier();
    getSystemVersion();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Text style={styles.titleStyle}>{`App Details`}</Text>
        <Text style={styles.fontStyle}>{'App Version:- ' + appVersion}</Text>
        <Text style={styles.fontStyle}>{'Build Number:- ' + buildNumber}</Text>
        <Text style={styles.fontStyle}>
          {'Bundle Identifier:- ' + bundleIdentifier}
        </Text>
        <Text style={styles.fontStyle}>
          {'System Version:- ' + systemVersion}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  fontStyle: {
    fontSize: 15,
    lineHeight: 30,
  },
});
export default App;
