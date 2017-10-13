import React from 'react';
import { StyleSheet } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';


const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('./images/gradient.png'),
  },
];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {
    return (
      <Container>
      <Header />
      <View>
        <DeckSwiper
          dataSource={cards}
          renderItem={item =>
            <Card style={{ elevation: 3 }}>
              <CardItem>
                <Left>
                  <Thumbnail source={item.image} />
                  <Body>
                    <Text>{item.text}</Text>
                    <Text note>NativeBase</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image style={{ height: 300, flex: 1 }} source={item.image} />
              </CardItem>
              <CardItem>
                <Icon name="heart" style={{ color: '#ED4A6A' }} />        
                  <Text>Latitude: {this.state.latitude}</Text>
              </CardItem>
              <CardItem>
                <Text>Longitude: {this.state.longitude}</Text>        
              </CardItem>
            </Card>
          }
        />
      </View>
    </Container>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
