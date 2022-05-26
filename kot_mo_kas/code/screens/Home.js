import * as React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/Styles';

export default function HomeScreen({navigation}) {

    const go_transactions = () => navigation.navigate('Transactions');
    const go_add = () => navigation.navigate('Add');
    const go_analytics = () => navigation.navigate('Analytics');
    const go_settings = () => navigation.navigate('Settings');

    return(
        <View style={styles.container}>

                {/* Top */}
                <View style={styles.top_home}>
                    <Text style={styles.home_title}>
                        Welcome to
                    </Text>
                    <Text style={styles.home_title2}>
                        Kot mo kas
                    </Text>
                    <View style={styles.hr_home}></View>
                </View>

                <View style={[styles.home_display_sections] }>
                    {/* Button for Transactions */}
                    <TouchableOpacity
                        style={[styles.home_transactions, styles.shadow_transactions]}
                        onPress={go_transactions}
                    >
                        <Image 
                        source={require('../../assets/transaction.png')}
                        resizeMode='contain'
                        style={{
                            width: 70,
                            height: 70
                        }}
                        />
                        <Text style={{textAlign: 'center', fontSize: 19, marginTop: 8, color: 'black'}}>Transactions</Text>
                    </TouchableOpacity>
                    {/* Button for Add */}
                    <TouchableOpacity
                        style={[styles.home_add, styles.shadow_add]}
                        onPress={go_add}
                    >
                        <Image 
                        source={require('../../assets/plus.png')}
                        resizeMode='contain'
                        style={{
                            width: 50,
                            height: 50,
                        }}
                        />
                        <Text style={{textAlign: 'center', fontSize: 19, marginTop: 8, color: 'black'}}>Add</Text>
                    </TouchableOpacity>
                    {/* Button for Analytics */}
                    <TouchableOpacity
                        style={[styles.home_analytics, styles.shadow_analytics]}
                        onPress={go_analytics}
                    >
                        <Image 
                        source={require('../../assets/analytics.png')}
                        resizeMode='contain'
                        style={{
                            width: 50,
                            height: 50
                        }}
                        />
                        <Text style={{textAlign: 'center', fontSize: 19, marginTop: 8, color: 'black'}}>Analytics</Text>
                    </TouchableOpacity>
                    {/* Button for Settings */}
                    <TouchableOpacity
                        style={[styles.home_settings, styles.shadow_setting]}
                        onPress={go_settings}
                    >
                        <Image 
                        source={require('../../assets/gear.png')}
                        resizeMode='contain'
                        style={{
                            width: 50,
                            height: 50
                        }}
                        />
                        <Text style={{textAlign: 'center', fontSize: 19, marginTop: 8, color: 'black'}}>Settings</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.home_bottom}>
                    <Text style={{fontSize: 19, textAlign: 'center',  color: '#575757', textAlign: 'left'}}>"A budget is telling your money where to go instead of wondering where it went."</Text>
                    <Text style={{fontSize: 19, textAlign: 'center',  color: '#575757', textAlign: 'right', marginTop: 30}}>- Dave Ramsey</Text>
                </View>

        </View>
    );
}