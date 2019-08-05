import React, {Component} from 'react';
import {
    Container, Header,
    Content, Card, CardItem,
    Text, Body, Thumbnail,
    Left, Right, List, ListItem
} from 'native-base';
import Icon from "react-native-vector-icons/FontAwesome";
import {TextInput} from "react-native";

export default class MessageCardComponent extends Component {
    render() {
        return (
            <List>
                <ListItem avatar>
                    <Left>
                        <Thumbnail small source={this.props.image} />
                    </Left>
                    <Body>
                        <Text>{this.props.name}</Text>
                        <Text numberOfLines={1} note>{this.props.message}</Text>
                    </Body>
                    <Right>
                        <Text note>{this.props.time}</Text>
                    </Right>
                </ListItem>
            </List>
        );
    }
}
