import * as React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../styles/Styles';
// import budget from '../../assets/budget_pic.jpeg';

export default function HomeScreen({navigation}) {

    const onPress = () => navigation.navigate('Add');

    return(
        <View style={styles.container}>
            <ScrollView>
                {/* Top */}
                <View style={styles.top_home}>
                    <Text style={styles.home_title}>
                        Welcome to{"\n"}
                        Kot mo kas
                    </Text>
                    <View style={styles.hr_home}></View>
                    <Text style={styles.home_intro}>
                        Are you having trouble to keep track of your monthly spending? Are you searching for a centralized place to keep track of your expenses? Well, you are at the right place!
                    </Text>
                </View>
                {/* Middle */}
                <View style={styles.home_pic_container}>
                    <TouchableOpacity
                        style={styles.home_btn}
                        onPress={onPress}>
                            <Text style={{color: '#ffffff'}}>Get Started</Text>
                    </TouchableOpacity>
                    <Image source={require('../../assets/budget_pic.jpeg')} style={{width: 170, height: 170}}/>
                </View>
                {/* Bottom */}
                <View style={styles.home_bottom}>
                    <Text style={{fontSize: 16, textAlign: 'center', paddingBottom: 10, fontStyle: 'italic'}}>"A budget is telling your money where to go instead of wondering where it went."{"\n"} - Dave Ramsey</Text>
                </View>
            </ScrollView>
        </View>
    );
}