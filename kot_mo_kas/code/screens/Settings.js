import React, { useState } from "react";
import { View, Text, TouchableOpacity, Pressable, Modal, Linking } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import styles from '../styles/Styles';

let dateObj = new Date();
let trans_year_month = `trans_${dateObj.getUTCFullYear()}_${dateObj.getMonth() + 1}`;
const clearData = async () => {
    await SecureStore.deleteItemAsync(trans_year_month)
    .then(console.log('Deleted everything in storage'))
    .catch(error => console.log("Could not delete this data", error))
}

export default function Settings({navigation}) {

    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);

    const deleteData = () => {
        clearData();
        setModalVisible2(!modalVisible2);
    } 
    return(
        <View>
            <View style={styles.settings_container}>
                {/* Modal for About */}
                <Modal
                    animationType="slide"
                    visible={modalVisible1}
                    presentationStyle='pageSheet'
                    onRequestClose={() => {
                    setModalVisible1(!modalVisible1);
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
                            onPress={() => setModalVisible1(!modalVisible1)}
                            >
                                <Text style={{fontSize: 16}}>Close</Text>
                        </Pressable>
                    </View>
                </Modal>

                {/* Modal for deleting all your transactions */}
                <Modal
                    animationType="slide"
                    visible={modalVisible2}
                    presentationStyle='pageSheet'
                    onRequestClose={() => {
                    setModalVisible2(!modalVisible2);
                    }}
                >
                    <View style={styles.setting_centeredView}>
                        <View style={styles.setting_modalView}>
                            <Text style={{fontSize: 27, marginBottom: 10, textAlign: 'center', marginLeft: 20, marginRight: 20}}>Do you really want to delete all your transactions?</Text>
                            
                        </View>
                        <View style={styles.setting_btn_container}>
                            <Pressable
                                style={styles.setting_buttonClose}
                                onPress={() => setModalVisible2(!modalVisible2)}
                                >
                                    <Text style={{fontSize: 16}}>Close</Text>
                            </Pressable>
                            <Pressable
                                style={styles.setting_buttonDelete}
                                // onPress={deleteData}
                                onPress={clearData}
                                >
                                    <Text style={{fontSize: 16, color: 'red'}}>Delete All</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

                <Text style={{fontWeight: 'bold', fontSize: 19, marginBottom: 25, marginTop: 40, textAlign: 'center'}}>General</Text>
                {/* Delete Button */}
                <TouchableOpacity
                        style={styles.setting_delete_btn}
                        onPress={() => setModalVisible2(true)}>
                            <Text style={{color: 'red', fontSize: 16, fontWeight: 'bold', textAlign: 'center'}}>Delete All Transactions</Text>
                </TouchableOpacity>
                {/* About Button */}
                <TouchableOpacity
                        style={styles.setting_about_btn}
                        onPress={() => setModalVisible1(true)}>
                            <Text style={{color: '#000000', fontSize: 16, textAlign: 'center'}}>About Kot mo kas</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}