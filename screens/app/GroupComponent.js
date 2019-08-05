import React, {Component} from 'react';
import {Container, Text, Content} from 'native-base';
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../../styles/custom";

export default class GroupComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let tabBarIcon = ({tintColor}) => {
            return <Icon name="users" size={25} style={{color: tintColor}}/>
        };
        let tabBarLabel = ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let label;
            if (routeName == 'Group') label = focused ? <Text style={styles.activeTabStyle}>Group</Text> : null
            return label
        };
        return { tabBarLabel, tabBarIcon };
    }

    render() {
        return (
            <Container>
                <Content>
                    <Text>
                        This is BasketTab
                    </Text>
                </Content>
            </Container>
        );
    }
}