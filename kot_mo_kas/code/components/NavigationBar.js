import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, Image, TouchableOpacity, Animated } from 'react-native'

// The different screens
import HomeScreen from '../screens/Home';
import Analytics from '../screens/Analytics';
import Add from '../screens/Add';
import Settings from '../screens/Settings';
import Transactions from '../screens/Transactions';
// Styles
import styles from '../styles/Styles';

const Tab = createBottomTabNavigator();

const CustomTabBarButton =({children, onPress}) => (
    <TouchableOpacity 
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow
        }} 
        onPress={onPress}
    >
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#00ce00'
        }}>
            {children}
        </View>
    </TouchableOpacity>
);

const Tabs = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 15,
                    left: 11,
                    right: 11,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 18,
                    height: 90,
                    borderWidth: 1,
                    borderColor: '#000000',
                    borderTopColor: '#000000',
                    borderTopWidth: 1,
                    ...styles.shadow
                }
            }}>
            <Tab.Screen name='Home' component={HomeScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 3}}>
                        <Image 
                        source={require('../../assets/home.png')}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#009bff' : '#5a5e5c'
                        }}
                        />
                        <Text style={{color: focused ? '#009bff' : '#5a5e5c', fontSize: 12}}>Home</Text>
                    </View>
                ),
                tabBarStyle: {display: 'none'}
            }}/>
            <Tab.Screen name='Transactions' component={Transactions} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 0}}>
                        <Image 
                        source={require('../../assets/transaction.png')}
                        resizeMode='contain'
                        style={{
                            width: 33,
                            height: 33,
                            tintColor: focused ? '#009bff' : '#5a5e5c'
                        }}
                        />
                        <Text style={{color: focused ? '#009bff' : '#5a5e5c', fontSize: 11}}>Transactions</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name='Add' component={Add} options={{
                tabBarIcon: ({focused}) => (
                    <Image 
                        source={require('../../assets/plus.png')}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: '#ffffff'
                        }}
                    />
                ),
                tabBarButton: (props) => (
                    <CustomTabBarButton {...props} />
                )
            }}/>
            <Tab.Screen name='Analytics' component={Analytics} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 3}}>
                        <Image 
                        source={require('../../assets/analytics.png')}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#009bff' : '#5a5e5c'
                        }}
                        />
                        <Text style={{color: focused ? '#009bff' : '#5a5e5c', fontSize: 12, marginTop: 3}}>Analytics</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name='Settings' component={Settings} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 3}}>
                        <Image 
                        source={require('../../assets/gear.png')}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#009bff' : '#5a5e5c'
                        }}
                        />
                        <Text style={{color: focused ? '#009bff' : '#5a5e5c', fontSize: 12, marginTop: 3}}>Settings</Text>
                    </View>
                )
            }}/>
        </Tab.Navigator>
    );
}

export default Tabs;