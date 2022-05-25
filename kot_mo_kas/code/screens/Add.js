import React, { useState } from "react";
import { View, Text, useWindowDimensions, TextInput, TouchableOpacity, Button } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import SelectDropdown from 'react-native-select-dropdown';
import * as SecureStore from 'expo-secure-store';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styles from '../styles/Styles';

let dateObj = new Date();
let trans_year_month = `trans_${dateObj.getUTCFullYear()}_${dateObj.getMonth() + 1}`;

let transactions_array = [];

// Prevent data from overwriting each other
const checkData = async () => {
    let result = await SecureStore.getItemAsync(trans_year_month);
    if (result !== undefined && result !== null) {
        transactions_array = JSON.parse(result);
        // console.log(transactions_array);
    }
}
checkData();

// Function to clear data from storage
const clearData = async () => {
    await SecureStore.deleteItemAsync(trans_year_month)
    .catch(error => console.log("Could not delete this data", error))
}
// Uncomment to clear date - do not forget to comment after
// clearData();

// Income Section
const INCOME_DATA = [
    'Salary',
    'Gift',
    'Pension',
    'Allowance'
]

const income = () => {
    const [category_income, newCategoryIncome] = useState('')
    const [amount_income, setAmountIncome] = useState('');
    const [dateIncome, setDateIncome] = useState('');

    // Date
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        let selected_date = `${date.getDate()}/${date.getMonth() + 1}/${date.getUTCFullYear()}`;
        // console.warn("A date has been picked: "  + selected_date);
        setDateIncome(selected_date);
        hideDatePicker();
    };
    

    const addData = async () => {
        const transactions_income = new Object();
        transactions_income.category = category_income;
        transactions_income.amount = amount_income;
        transactions_income.date = dateIncome;
        transactions_array.push(transactions_income);
        console.log(transactions_array);
        
        await SecureStore.setItemAsync(trans_year_month, JSON.stringify(transactions_array));
    }

    return (
        <View style={styles.container}>
            <View style={styles.income_container}>
                {/* Category */}
                <View style={styles.income_input}>
                        <Text style={{marginRight: 15, fontSize: 16}}>Category</Text>
                        <SelectDropdown
                            data={INCOME_DATA}
                            onSelect={(selectedItem, index) => {
                                newCategoryIncome(selectedItem);
                            }}
                            defaultButtonText={'Select the category'}
                            buttonStyle={styles.dropdown1BtnStyle}
                            buttonTextStyle={styles.dropdown1BtnTxtStyle}
                            dropdownStyle={styles.dropdown1DropdownStyle}
                            rowStyle={styles.dropdown1RowStyle}
                        />
                </View>
                {/* Amount */}
                <View style={styles.income_input}>
                    <Text style={{marginRight: 15, fontSize: 16}}>Amount</Text>
                    <TextInput
                        style={{height: 45, borderWidth: 1, borderRadius: 10, width: 250, marginLeft: 10, textAlign: 'center'}}
                        onChangeText={newAmount => setAmountIncome(newAmount.replace(/[^0-9]/g, ''))}
                        defaultValue={amount_income}
                        keyboardType='numeric'
                    />
                </View>
                {/* Date */}
                <View style={styles.income_input}>
                    <Text style={{marginRight: 15, fontSize: 16}}>Date</Text>
                    <View style={styles.date_container}>
                        <Button title="Select Date" onPress={showDatePicker}/>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                    </View>
                </View>
                {/* Add Button */}
                <View style={styles.add_btn_container}>
                    <TouchableOpacity
                        style={styles.add_btn_add}
                        onPress={addData}
                    >
                        <Text style={{color: 'white', fontSize: 16}}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

// Expense Section
const EXPENSE_DATA = [
    'Clothes',
    'Eating Out',
    'Entertainment',
    'Fuel',
    'General',
    'Transport',
    'Gifts',
    'Holiday',
    'Kids',
    'Shopping',
    'Sports'
]

const expense = () => {
    const [category_expense, newCategoryExpense] = useState('')
    const [amount_expense, setAmountExpense] = useState('');
    const [dateExpense, setDateExpense] = useState('');

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        let selected_date = `${date.getDate()}/${date.getMonth() + 1}/${date.getUTCFullYear()}`;
        // console.warn("A date has been picked: "  + selected_date);
        setDateExpense(selected_date);
        hideDatePicker();
    };

    const addData = async () => {
        const transactions_expense = new Object();
        transactions_expense.category = category_expense;
        transactions_expense.amount = `-${amount_expense}`;
        transactions_expense.date = dateExpense;
        transactions_array.push(transactions_expense);
        console.log(transactions_array);

        await SecureStore.setItemAsync(trans_year_month, JSON.stringify(transactions_array));
    }

    return (
        <View style={styles.container}>
            <View style={styles.expense_container}>
                {/* Category */}
                <View style={styles.expense_input}>
                        <Text style={{marginRight: 15, fontSize: 16}}>Category</Text>
                        <SelectDropdown
                            data={EXPENSE_DATA}
                            onSelect={(selectedItem, index) => {
                                newCategoryExpense(selectedItem);
                            }}
                            defaultButtonText={'Select the category'}
                            buttonStyle={styles.dropdown1BtnStyle}
                            buttonTextStyle={styles.dropdown1BtnTxtStyle}
                            dropdownStyle={styles.dropdown1DropdownStyle}
                            rowStyle={styles.dropdown1RowStyle}
                        />
                </View>
                {/* Amount */}
                <View style={styles.expense_input}>
                    <Text style={{marginRight: 15, fontSize: 16}}>Amount</Text>
                    <TextInput
                        style={{height: 45, borderWidth: 1, borderRadius: 10, width: 250, marginLeft: 10, textAlign: 'center'}}
                        onChangeText={newAmount => setAmountExpense(newAmount.replace(/[^0-9]/g, ''))}
                        defaultValue={amount_expense}
                        keyboardType='numeric'
                    />
                </View>
                {/* Date */}
                <View style={styles.expense_input}>
                    <Text style={{marginRight: 15, fontSize: 16}}>Date</Text>
                    <View style={styles.date_container}>
                        <Button title="Select Date" onPress={showDatePicker}/>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                    </View>
                </View>
                {/* Add Button */}
                <View style={styles.add_btn_container}>
                    <TouchableOpacity
                        style={styles.add_btn_add}
                        onPress={addData}
                    >
                        <Text style={{color: 'white', fontSize: 16}}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

const renderScene = SceneMap({
    first: income,
    second: expense,
});

const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'red' }}
      style={{ backgroundColor: '#0055ff' }}
    />
);

export default function Add({navigation}) {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
        { key: 'first', title: 'Income' },
        { key: 'second', title: 'Expense' },
    ]);

    return(
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={renderTabBar}
            initialLayout={{ width: layout.width }}
        />
    );
}