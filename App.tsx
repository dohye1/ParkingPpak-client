/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/screens/RootStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Loading} from '@/components/common';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [auth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        const token = await AsyncStorage.getItem('parking-ppak-token');
        if (token) {
          setAuth(true);
        } else {
          setAuth(true); // 홈화면을 보기위해 임시로 true로 설정되도록 했습니다.
        }
        setIsLoading(false);
      })();
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack auth={auth} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
