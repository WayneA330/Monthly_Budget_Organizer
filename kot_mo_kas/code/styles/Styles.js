import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        padding: 23
    },
    // Navigation Bar Shadow
    shadow: {
        shadowColor: '#595959',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    // Home
    top_home: {
        display: 'flex',
        flexDirection: "column"
    },
    home_title: {
        textAlign: 'center',
        fontSize: 28
    },
    hr_home: {
        borderBottomColor: '#35B736',
        borderBottomWidth: 1,
        width: 150,
        marginLeft:'auto',
        marginRight: 'auto',
        marginBottom: 25
    },
    home_intro: {
        textAlign:'center',
        padding: 2,
        marginBottom: 22,
        fontSize: 16
    },
    home_pic_container: {
        marginTop: 8,
        marginBottom: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    home_display_sections: {
        height: 284,
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    home_transactions: {
        borderWidth: 1,
        height: 130,
        width: 130,
        borderRadius: 10,
        backgroundColor: '#ffa232',
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        margin: 10,
        padding: 4
    },
    home_add: {
        borderWidth: 1,
        height: 130,
        width: 130,
        borderRadius: 10,
        backgroundColor: '#85bf4b',
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        margin: 10,
        padding: 4
    },
    home_analytics: {
        borderWidth: 1,
        height: 130,
        width: 130,
        borderRadius: 10,
        backgroundColor: '#50bfbf',
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        margin: 10,
        padding: 4
    },
    home_settings: {
        borderWidth: 1,
        height: 130,
        width: 130,
        borderRadius: 10,
        backgroundColor: '#ff4a5a',
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        margin: 10,
        padding: 4
    },
    home_bottom: {
        marginTop: 60,
        marginBottom: 30
    },
    home_btn: {
        alignItems: 'center',
        backgroundColor: '#00ce00',
        padding: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10
    },
    // Transactions
    // Add
    income_container: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '100%',
        marginTop: '10%',
    },
    income_input: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        height: 50
    },
    dropdown1BtnStyle: {
        width: 250,
        height: 45,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#000000',
    },
    dropdown1DropdownStyle: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
    },
    dropdown1RowStyle: {
        backgroundColor: '#EFEFEF',
        borderBottomColor: '#C5C5C5',
        height: 45
    },
    dropdown1BtnTxtStyle: {
        color: '#444',
        textAlign: 'center'
    },
    expense_container: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '100%',
        marginTop: '10%'
    },
    expense_input: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        height: 50
    },
    add_btn_add: {
        width: 100,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#0055ff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    add_btn_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    date_container: {
        marginLeft: 110,
        marginLeft: 110
    },
    // Analytics
    // Settings
    settings_container: {
        backgroundColor: 'white'
    },
    setting_delete_btn: {
        borderColor: '#00ce00',
        borderWidth: 1,
        padding: 15,
        width: '100%'
    },
    setting_about_btn: {
        borderColor: '#00ce00',
        borderWidth: 1,
        padding: 15,
        marginTop: 25,
        marginBottom: '100%'
    },
    setting_centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    setting_modalView: {
        display: 'flex',
        justifyContent: "space-around",
        backgroundColor: "white",
        alignItems: "center",
        height: 190
    },
    setting_btn_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    setting_buttonClose: {
        marginTop: 20,
        backgroundColor: "#ffffff",
        borderRadius: 5,
        borderWidth: 1,
        padding: 15,
        elevation: 2
    },
    setting_buttonDelete: {
        marginTop: 20,
        backgroundColor: "#ffffff",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'red',
        padding: 15,
        elevation: 2,
        marginLeft: 20
    },
});

export default styles;