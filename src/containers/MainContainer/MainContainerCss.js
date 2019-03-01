import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    MainContent: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        paddingTop: 5
    },
    MainContainer: {
        flex: 11,
    },
    dishInfoBlock: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    footerText: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#92121A"
    },
    footerButton: {
        justifyContent: 'flex-end'
    }
});