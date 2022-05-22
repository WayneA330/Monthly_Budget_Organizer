import React, { useState } from "react";
import { View, Text, useWindowDimensions, TextInput, TouchableOpacity } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import SelectDropdown from 'react-native-select-dropdown';
import DatePicker from 'react-native-datepicker';
import styles from '../styles/Styles';

// Income Section
const INCOME_DATA = [
    'Salary',
    'Gift'
]

const income = () => {
    const [category_income, newCategoryIncome] = useState('')
    const [amount_income, setAmountIncome] = useState('');
    const [date, setDate] = useState(new Date());
    // console.log(date);
    console.log(category_income);
    console.log(amount_income);
    
    return (
        <View style={styles.container}>
            <View style={styles.income_container}>
                {/* Category */}
                <View style={styles.income_input}>
                        <Text style={{marginRight: 15, fontSize: 16}}>Category</Text>
                        <SelectDropdown
                            data={INCOME_DATA}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem);
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
                    />
                </View>
                {/* Date */}
                <View style={styles.income_input}>
                    <Text style={{marginRight: 15, fontSize: 16}}>Date</Text>
                    {/* <DatePicker
                        // style={styles.datePickerStyle}
                        date={date}
                        mode="date"
                        placeholder="select date"
                        format="DD/MM/YYYY"
                        minDate="21-05-2022"
                        maxDate="01-01-2025"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                            position: 'absolute',
                            right: -5,
                            top: 4,
                            marginLeft: 0,
                            },
                            dateInput: {
                            borderColor : "gray",
                            alignItems: "flex-start",
                            borderWidth: 0,
                            borderBottomWidth: 1,
                            },
                            placeholderText: {
                            fontSize: 17,
                            color: "gray"
                            },
                            dateText: {
                            fontSize: 17,
                            }
                        }}
                        onDateChange={(date) => {
                            setDate(date);
                        }}
                    /> */}
                </View>
                {/* Add Button */}
                <View style={styles.add_btn_container}>
                    <TouchableOpacity
                        style={styles.add_btn_add}
                        // onPress={}
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
    console.log(category_expense);
    console.log(amount_expense);

    return (
        <View style={styles.container}>
            <View style={styles.expense_container}>
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
                <View style={styles.expense_input}>
                    <Text style={{marginRight: 15, fontSize: 16}}>Amount</Text>
                    <TextInput
                        style={{height: 45, borderWidth: 1, borderRadius: 10, width: 250, marginLeft: 10, textAlign: 'center'}}
                        placeholder="Type here to translate!"
                        onChangeText={newAmount => setAmountExpense(newAmount.replace(/[^0-9]/g, ''))}
                        defaultValue={amount_expense}
                    />
                </View>
                <View style={styles.expense_input}>
                    <Text style={{marginRight: 15, fontSize: 16}}>Date</Text>
                </View>
                <View style={styles.add_btn_container}>
                    <TouchableOpacity
                        style={styles.add_btn_add}
                        // onPress={}
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