import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../styles/Styles';

export default function Analytics({navigation}) {
    return(
        <View style={styles.container}>
            <Text>Analytics</Text>
        </View>
    );
}