import React, {useCallback, useEffect, useState} from 'react';
import {Alert, Button, Linking, Pressable, StyleSheet, View,Text} from 'react-native';

const supportedURL = 'https://google.com';

const unsupportedURL = 'slack://open?team=123456';

export const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Pressable onPress={handlePress}><Text>{children}</Text></Pressable>
};


export const OpenSettingsButton = ({children}) => {
    const handlePress = useCallback(async () => {
      // Open the custom settings if the app has one
      await Linking.openSettings();
    }, []);
  
    return <Button title={children} onPress={handlePress} />;
  };


  export const useInitialURL = () => {
    const [url, setUrl] = useState(null);
    const [processing, setProcessing] = useState(true);


  
    const handleURLChange = useCallback((event) => {
      setUrl(event.url);
      setProcessing(false);
    }, []);
  
  
    useEffect(() => {
      const getUrlAsync = async () => {
        // Get the deep link used to open the app
        const initialUrl = await Linking.getInitialURL();
  
        // The setTimeout is just for testing purpose
        if (initialUrl) {
          handleURLChange({ url: initialUrl });
        }
      
  
        // Add event listener for subsequent URL changes
        Linking.addEventListener('url', handleURLChange);
  
        return () => {
          // Remove event listener when the component unmounts
          Linking.removeEventListener('url', handleURLChange);
        };
      };
      
  
      getUrlAsync();
    }, []);
  
    return {url, processing};
  };

  export const SendIntentButton = ({action, extras, children}) => {
    const handlePress = useCallback(async () => {
      try {
        await Linking.sendIntent(action, extras);
      } catch (e) {
        Alert.alert(e.message);
      }
    }, [action, extras]);
  
    return <Button title={children} onPress={handlePress} />;
  };
  