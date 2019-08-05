import React, {Component} from 'react';
import {Container, Text, Content} from 'native-base';
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../../styles/custom";

export default class MoreComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        // let tabBarLabel = 'Home';
        let tabBarIcon = ({tintColor}) => {
            return <Icon name="th-large" size={25} style={{color: tintColor}}/>
        };
        let tabBarLabel = ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let label;
            if (routeName == 'More') label = focused ? <Text style={styles.activeTabStyle}>More</Text> : null
            return label
        };
        return { tabBarLabel, tabBarIcon };
    }

    render() {
        return (
            <Container>
                <Content>
                    <Text>
                        This is MoreComponent
                    </Text>
                </Content>
            </Container>
        );
    }
}