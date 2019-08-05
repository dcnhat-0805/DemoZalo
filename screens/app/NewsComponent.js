import React, {Component} from 'react';
import {Container, Text, Content} from 'native-base';
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../../styles/custom";

export default class NewComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        // let tabBarLabel = 'Home';
        let tabBarIcon = ({tintColor}) => {
            return <Icon name="clock-o" size={25} style={{color: tintColor}}/>
        };
        let tabBarLabel = ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let label;
            if (routeName == 'News') label = focused ? <Text style={styles.activeTabStyle}>News</Text> : null
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