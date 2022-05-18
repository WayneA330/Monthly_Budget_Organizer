import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
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
    home_bottom: {
        fontSize: 15,
        marginTop: 15
    },
    home_btn: {
        alignItems: 'center',
        backgroundColor: '#00ce00',
        padding: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10
    }  
});

export default styles;