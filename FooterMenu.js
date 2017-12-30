import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default class FooterMenu extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button vertical active>
            <Icon name="list" />
            <Text>Portfolio</Text>
          </Button>
          <Button vertical>
            <Icon active name="paper" />
            <Text>News</Text>
          </Button>
          <Button vertical>
            <Icon name="settings" />
            <Text>Settings</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
