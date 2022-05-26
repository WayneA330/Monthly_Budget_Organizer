import React, { useEffect, useState } from "react";
import { View, ScrollView, Text } from 'react-native';
import styles from '../styles/Styles';
import { PieChart } from "react-native-gifted-charts";
import * as SecureStore from 'expo-secure-store';
import {data} from '../components/Test';

// This is for the key 
// let dateObj = new Date();
// let trans_year_month = `trans_${dateObj.getUTCFullYear()}_${dateObj.getMonth() + 1}`;

// General Graph
let income = 0;
let expense = 0;

data.forEach(elem => {
    let amount = Number(elem.amount);
    amount < 0 ? expense += amount * -1 : income += amount;
})

let total_sum = income + expense;
let income_percent = Math.round((income / total_sum) * 100);
let expense_percent = Math.round((expense / total_sum) * 100);
let balance = income - expense;

const general_data = [ 
    {value:income_percent, color: 'green', text:`${income_percent}%`},
    {value:expense_percent, color: 'red', text:`${expense_percent}%`}
]

export default function Analytics() {

    return(
        <ScrollView style={styles.container}>
            <View style={styles.analytics_container}>
                {/* General Graph */}
                <View style={styles.general_graph}>
                    <View style={styles.analytics_details}>
                        <Text style={{color: 'green', fontSize: 18, marginBottom: 15}}>Income: Rs {income}</Text>
                        <Text style={{color: 'red', fontSize: 18, marginBottom: 15}}>Expense: Rs {expense}</Text>
                        <Text style={{fontSize: 18}}>Balance: Rs {balance}</Text>
                    </View>
                    <View style={styles.analytics_graph}>
                        <PieChart 
                            data={general_data}
                            radius={85}
                            showText
                            textColor="white"
                            labelsPosition='mid'
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}