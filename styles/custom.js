import {Dimensions, StyleSheet, Platform} from 'react-native';

const screen = Dimensions.get('window');
const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        // backgroundColor: 'red'
    },
    headerStyle: {
        backgroundColor: '#0099ff'
    },
    contentStyle: {
        height: '50%'
        // backgroundColor: 'green'
    },
    activeTabStyle: {
        fontSize: 10,
        color: '#0099cc',
        textAlign: 'center'
    },
    headerLeftIcon: {
        paddingLeft: 10,
        color: '#fff'
    },
    headerRightIcon: {
        paddingRight: 10,
        color: '#fff',
    },
    headerTitle: {
        fontSize: 16,
        height: '80%',
        padding: 5,
        width: '100%'
    },
    iconHeader: {
        fontSize: 24,
        color: 'white',
    },
    tabStyle: {
        backgroundColor: '#f8f8f8f8',
    },
    textTabStyle: {
        textTransform: 'uppercase',
        fontWeight: 'normal',
        color: 'blue'
    }
});

export default styles;