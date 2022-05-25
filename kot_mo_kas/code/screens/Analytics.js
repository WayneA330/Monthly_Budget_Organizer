import * as React from 'react';
import { View, ScrollView } from 'react-native';
import styles from '../styles/Styles';
import { PieChart } from "react-native-gifted-charts";
import * as SecureStore from 'expo-secure-store';

let dateObj = new Date();
let trans_year_month = `trans_${dateObj.getUTCFullYear()}_${dateObj.getMonth() + 1}`;

// First attempt

// let data;
// const getData = async () => {
//     return data = await SecureStore.getItemAsync(trans_year_month);
// };

// var result = getData().then(function() {
//     return data
// })

// const result = await getData();
// console.log(result);

// second attempt
const getData = async () => {
    return await SecureStore.getItemAsync(trans_year_month);
}


async function start() {
    let result = await getData();
    return result;
}

// I am trying to put the result in data put i am having an error every time: Unexpected identifier 'start'. Expected ';' after variable declaration.
// I tried to see online but nothing helped
const data = await start();
console.log(data);

// third attempt
// async function getData (){
//     return await SecureStore.getItemAsync(trans_year_month);
// };

// (async () =>{
//     let result = await getData();
//     console.log(result);
// })();


// General Graph
let general_result;
const get_general_data = () => {

}


const general_data = [ 
    {value:60, color: 'green', text:'60%'},
    {value:40, color: 'red', text:'40%'}
]

export default function Analytics() {
    return(
        <ScrollView style={styles.container}>
            <View style={styles.analytics_container}>
                {/* General Graph */}
                <View style={styles.general_graph}>
                    <View style={styles.analytics_details}>
                        
                    </View>
                    <View style={styles.analytics_graph}>
                        <PieChart 
                            data={general_data}
                            radius={85}
                            showText
                            textColor="white"
                            donut
                            labelsPosition='outward'
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}