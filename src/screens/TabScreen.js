import React, {Component} from 'react';
import {Container, Header, Content, Tab, Tabs, Left, Right, Body, Title} from 'native-base';
import Tab1 from './tabs/Tab1';
import Tab2 from './tabs/Tab2';
import Tab3 from './tabs/Tab3';

export default class TabScreen extends Component {
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#000' }}  hasTabs>
                    <Left/>
                    <Body>
                    <Title style={{ color: 'white' }}>NewsNew</Title>
                    </Body>
                    <Right/>
                </Header>
               <Tabs tabBarUnderlineStyle={{ backgroundColor: '#e6ffb3' }}>
                    <Tab tabStyle={{ backgroundColor: '#00091a' }} activeTabStyle={{ backgroundColor: '#00091a' }} textStyle={{ color: 'white' }} activeTextStyle={{ color: 'white' }} heading="General">
                        <Tab1/>
                    </Tab>
                    <Tab tabStyle={{ backgroundColor: '#00091a' }} activeTabStyle={{ backgroundColor: '#00091a' }} textStyle={{ color: 'white' }} activeTextStyle={{ color: 'white' }}   heading="Business">
                        <Tab2/>
                    </Tab>
                    <Tab tabStyle={{ backgroundColor: '#00091a' }} activeTabStyle={{ backgroundColor: '#00091a' }}  textStyle={{ color: 'white' }} activeTextStyle={{ color: 'white' }}  heading="Technology">
                        <Tab3/>
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}