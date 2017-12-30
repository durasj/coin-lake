import React, { Component } from 'react';
import { Container, Content, Text, StyleProvider, Card, CardItem, Body, Header, Title } from 'native-base';
import { AppLoading } from 'expo';
import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor';

import FooterMenu from './FooterMenu';

export default class App extends Component {
  state = {
    ready: false,
  };

  render() {
    return this.state.ready ? (
      <StyleProvider style={getTheme(commonColor)}>
        <Container>
          <Header>
            <Body>
              <Title>Header</Title>
            </Body>
          </Header>
          <Content>
            <Card>
              <CardItem>
                <Body>
                  <Text>
                    Your text here
                  </Text>
                </Body>
              </CardItem>
            </Card>
          </Content>
          <FooterMenu />
        </Container>
      </StyleProvider>
    ) : <AppLoading />;
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

    this.setState({ ready: true });
  }
}
