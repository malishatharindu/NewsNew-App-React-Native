import React, {Component} from 'react';
import {Body, Button, Left, ListItem, Right, Text, Thumbnail, View} from "native-base";
import TimeAgo from './time';


class DataItem extends Component {
    constructor(props) {
        super(props);
        this.data = props.data;
    }
    handlePress = () => {
        const { url, title } = this.data;
        this.props.onPress({url, title})
    }
    render() {
        return (
            <ListItem thumbnail>
                <Left>
                    <Thumbnail square
                               source={{uri: this.data.urlToImage != null ? this.data.urlToImage : 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2649880.jpg'}}/>
                </Left>
                <Body>
                <Text numberOfLines={2}>{this.data.title}</Text>
                <Text note numberOfLines={4}>{this.data.description}</Text>
                <View style={{ flex:1, flexDirection: 'row', marginTop:8, marginLeft:6}}>
                    <Text note>{this.data.source.name}</Text>
                    <TimeAgo time={ this.data.publishedAt } />
                </View>
                </Body>
                <Right>
                    <Button transparent onPress={this.handlePress}>
                        <Text>></Text>
                    </Button>
                </Right>
            </ListItem>
        );
    }
}

export default DataItem;