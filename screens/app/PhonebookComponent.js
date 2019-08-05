import React, {Component} from 'react';
import {
    Container, Header,
    Content, List, ListItem,
    Text, Body, Left,
    Right, Button, Tab, Tabs, ScrollableTab
} from 'native-base';
import {TextInput} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../../styles/custom";
import Contact from "../tabs/phonebook/Contact";
import OffAccount from "../tabs/phonebook/OffAccount";

export default class PhonebookComponent extends Component {
    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        // let tabBarLabel = 'Home';
        let tabBarIcon = ({tintColor}) => {
            return <Icon name="address-book-o" size={25} style={{color: tintColor}}/>
        };
        let tabBarLabel = ({focused, tintColor}) => {
            const {routeName} = navigation.state;
            let label;
            if (routeName == 'Phonebook') label = focused ? <Text style={styles.activeTabStyle}>Phonebook</Text> : null
            return label
        };
        return {tabBarLabel, tabBarIcon};
    }

    render() {
        return (
            <Container>
                <Header searchBar rounded style={styles.headerStyle}>
                    <Left>
                        <Button transparent>
                            <Icon style={styles.iconHeader} name='search'/>
                        </Button>
                    </Left>
                    <Body>
                    <TextInput
                        placeholder={'Search for ...'}
                        selectionColor={'white'}
                        showSoftInputOnFocus={true}
                        placeholderTextColor={'#fff'}
                        style={styles.headerTitle}
                    ></TextInput>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon style={styles.iconHeader} name='user-o'/>
                        </Button>
                    </Right>
                </Header>
                <Tabs
                    renderTabBar={()=> <ScrollableTab />}
                    tabBarBackgroundColor={'#f8f8f8f8'}
                    tabBarUnderlineStyle={{backgroundColor: 'transparent', borderBottomWidth:1}}
                >
                    <Tab
                        heading={'Contact'}
                        tabStyle={styles.tabStyle}
                        textStyle={[styles.textTabStyle, {color: '#aaa'}]}
                        activeTextStyle={[styles.textTabStyle, {color: '#000'}]}
                        activeTabStyle={{backgroundColor: '#f8f8f8f8'}}
                    >
                        <Contact/>
                    </Tab>
                    <Tab
                        heading={'Official Account'}
                        tabStyle={styles.tabStyle}
                        textStyle={[styles.textTabStyle, {color: '#aaa'}]}
                        activeTextStyle={[styles.textTabStyle, {color: '#000'}]}
                        activeTabStyle={{backgroundColor: '#f8f8f8f8'}}
                    >
                        <OffAccount/>
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}