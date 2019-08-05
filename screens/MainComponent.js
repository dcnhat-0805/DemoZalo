import React, {Component} from 'react';
import {
    View,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';
import MessageComponent from './app/MessageComponent';
import PhonebookComponent from './app/PhonebookComponent';
import GroupComponent from './app/GroupComponent';
import NewsComponent from './app/NewsComponent';
import MoreComponent from './app/MoreComponent';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Container, Text} from 'native-base';
import {createBottomTabNavigator, createMaterialTopTabNavigator, createAppContainer} from 'react-navigation';
import styles from "../styles/custom";

export default class MainComponent extends Component {
    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        const {routeName} = navigation.state;
        let headerStyle = {
            backgroundColor: '#0099cc'
        };
        let headerBackgroundTransitionPreset = 'toggle';
        let headerLeft = <Icon name='search' size={25} style={styles.headerLeftIcon}/>;
        let headerTitle = <TextInput
            placeholder={'Search for ...'}
            selectionColor={'white'}
            showSoftInputOnFocus={true}
            placeholderTextColor={'#fff'}
            style={styles.headerTitle}
        ></TextInput>;
        let headerRight = <Icon name='clock-o' size={25} style={styles.headerRightIcon}/>;

        return {headerStyle, headerBackgroundTransitionPreset, headerLeft, headerTitle, headerRight}
    }

    render() {
        return (
            <MainContainer style={{height: '100%', backgroundColor: 'red'}}>
            </MainContainer>
        );
    }
}

const TabNavigator = createMaterialTopTabNavigator(
    {
        Message: {
            screen: MessageComponent
        },
        Phonebook: {
            screen: PhonebookComponent
        },
        Group: {
            screen: GroupComponent
        },
        News: {
            screen: NewsComponent
        },
        More: {
            screen: MoreComponent
        },
    },
    {
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: true,
            showLabel: true,
            indicatorStyle: {
                backgroundColor: 'transparent'
            },
            style: {
                backgroundColor: '#e8e8e8e8',
            },
            labelStyle: {
                fontSize: 10,
                textAlign: 'center'
            },
            activeTintColor: '#0099cc',
            inactiveTintColor: '#000',
            upperCaseLabel: false,
        }
    }
);
const MainContainer = createAppContainer(TabNavigator);
