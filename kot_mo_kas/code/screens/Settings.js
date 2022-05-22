import React, { useState } from "react";
import { Button, View, Text, TouchableOpacity, Pressable, Modal, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../styles/Styles';

export default function Settings({navigation}) {

    const [modalVisible, setModalVisible] = useState(false);

    const onPress = () => navigation.navigate('');

    return(
        <View>
            <View style={styles.settings_container}>
                {/* Modal for About */}
                <Modal
                    animationType="slide"
                    visible={modalVisible}
                    presentationStyle='pageSheet'
                    onRequestClose={() => {
                    setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.setting_centeredView}>
                        <View style={styles.setting_modalView}>
                            <Text style={{fontSize: 27, marginBottom: 10}}>Kot mo kas</Text>
                            <Text style={{fontSize: 16, marginBottom: 10}}>Version: 1.0.0</Text>
                            <Text style={{fontSize: 16, textAlign: "center"}}>Contact me:</Text>
                            <Text 
                                style={{fontSize: 16, color: 'blue', marginTop: 0}}
                                onPress={()=> Linking.openURL('mailto:waynecelestin.a3@gmail.com')}>
                                waynecelestin.a3@gmail.com
                            </Text>
                            <Text style={{fontSize: 16, marginTop: 10}}>Developed By: Wayne Célestin</Text>
                            <Text style={{fontSize: 16, marginTop: 10}}>Published: 26/05/2022</Text>
                        </View>
                        <Pressable
                            style={styles.setting_buttonClose}
                            onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={{fontSize: 16}}>Close</Text>
                            </Pressable>
                    </View>
                </Modal>

                <Text style={{fontWeight: 'bold', fontSize: 19, marginBottom: 25, marginTop: 40, textAlign: 'center'}}>General</Text>
                <TouchableOpacity
                        style={styles.setting_category_btn}
                        onPress={onPress}>
                            <Text style={{color: '#000000', fontSize: 16}}>Category</Text>
                </TouchableOpacity>
                <TouchableOpacity
                        style={styles.setting_about_btn}
                        onPress={() => setModalVisible(true)}>
                            <Text style={{color: '#000000', fontSize: 16}}>About Kot mo kas</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}