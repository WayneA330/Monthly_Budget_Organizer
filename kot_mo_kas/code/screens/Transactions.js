import * as React from 'react';
import { Button, View, Text, ScrollView } from 'react-native';
import styles from '../styles/Styles';
import {data} from '../components/Test';

export default function Transactions({navigation}) {
    return(
        <ScrollView style={styles.container}>
            {data.map(a => {
                let amount = Number(a.amount) * -1
                if(amount < 0) {
                    return (
                    <View style={styles.expense_trans}>
                        <Text style={{fontSize: 16}}><Text style={{fontWeight: 'bold'}}>{a.category}</Text>{'\n'}{'\n'}{a.date}</Text>
                        <View style={{position: 'absolute', right: 15, bottom: 37}}>
                            <Text style={{fontSize: 16, color: 'red'}}>Rs -{a.amount}</Text>
                        </View>
                    </View>
                    )
                } else {
                    return(
                        <View style={styles.income_trans}>
                        <Text style={{fontSize: 16}}><Text style={{fontWeight: 'bold'}}>{a.category}</Text>{'\n'}{'\n'}{a.date}</Text>
                        <View style={{position: 'absolute', right: 15, bottom: 37}}>
                            <Text style={{fontSize: 16, color: 'green'}}>+ Rs {(a.amount)* -1}</Text>
                        </View>
                    </View>
                    )
                }
            })}
        </ScrollView>
    );
}