import React, { useEffect, useState } from "react";
import { View, ScrollView } from 'react-native';
import styles from '../styles/Styles';
import { PieChart } from "react-native-gifted-charts";
import * as SecureStore from 'expo-secure-store';

// This is for the key 
let dateObj = new Date();
let trans_year_month = `trans_${dateObj.getUTCFullYear()}_${dateObj.getMonth() + 1}`;

// General Graph
let general_result;
const get_general_data = () => {

}

const general_data = [ 
    {value:60, color: 'green', text:'60%'},
    {value:40, color: 'red', text:'40%'}
]

export default function Analytics() {
    const [result, setResult] = useState('');

    async function getData () {
        return await SecureStore.getItemAsync(trans_year_month);
    };
    (async () => {
        let data = await getData();
        setResult(data);
    })();

    // let arr = result.map(x => x);
    // console.log(arr);

    // console.log(result);
    // General Graph
    useEffect(() => {
        // console.log(result);
        // if(result != null || result != null) {
            // console.log(JSON.parse(result)[3].amount);
            // for(let idx in result) {
            //     console.log(result[idx]);
            // }
            // console.log(JSON.parse(result));

            // let data = JSON.parse(result);
            // console.log((data));
            // data.forEach((value, idx) => {
            //     console.log(value);
            // });

            // for (let i = 0; i < result.length; i++){
            //     console.log(result[i]);
            // }

            // result.forEach(function (arrayItem) {
            //     // var x = arrayItem.prop1 + 2;
            //     console.log(arrayItem);
            // });
        // }
    });

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