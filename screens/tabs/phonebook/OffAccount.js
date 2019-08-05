import React, {Component} from 'react';
import {
    Container, Header,
    Content, List, ListItem,
    Text, Body, Left,
    Right, Button
} from 'native-base';
import {TextInput} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../../../styles/custom";

export default class OffAccount extends Component {
    render() {
        return (
            <Content>
                <List>
                    <ListItem itemDivider>
                        <Text>A</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Aaron Bennet</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Ali Connors</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>B</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                </List>
            </Content>
        );
    }
}