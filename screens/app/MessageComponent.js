import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {
    Container, Header,
    Content, Card, CardItem, Text,
    Body, Left, Right, Button, Title,
    Footer, FooterTab, Badge, Item, Input
} from 'native-base';
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../../styles/custom";
import {TextInput} from "react-native";
import MessageCardComponent from '../MessageCardComponent';
import messageData from '../../data/MessageData';

export default class MessageComponent extends Component {
    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        let tabBarIcon = ({tintColor}) => {
            return <Icon name="commenting-o" size={25} style={{color: tintColor}}/>
        };
        let tabBarLabel = ({focused, tintColor}) => {
            const {routeName} = navigation.state;
            let label;
            if (routeName == 'Message') label = focused ? <Text style={styles.activeTabStyle}>Message</Text> : null
            return label
        };
        return {tabBarLabel, tabBarIcon};
    }

    render() {
        return (
            <Container>
                <Header searchBar rounded style={styles.headerStyle}>
                    <Item style={{backgroundColor: 'transparent'}}>
                        <Button transparent>
                            <Icon style={styles.iconHeader} name='search'/>
                        </Button>
                        <TextInput
                            placeholder={'Search for ...'}
                            selectionColor={'white'}
                            showSoftInputOnFocus={true}
                            placeholderTextColor={'#fff'}
                            style={styles.headerTitle}
                        ></TextInput>
                        <Button transparent>
                            <Icon style={styles.iconHeader} name='commenting-o'/>
                        </Button>
                        <Button transparent>
                            <Icon style={styles.iconHeader} name='plus'/>
                        </Button>
                    </Item>
                </Header>
                <SafeAreaView style={styles.containerStyle}>
                    <Content>
                        {
                            messageData.map((eachData) => {
                                return (
                                    <MessageCardComponent
                                        key={eachData.key}
                                        image={eachData.image}
                                        name={eachData.name}
                                        message={eachData.message}
                                        time={eachData.time}
                                    ></MessageCardComponent>
                                );
                            })
                        }
                    </Content>
                </SafeAreaView>
            </Container>

        );
    }
}
