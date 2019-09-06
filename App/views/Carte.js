import MapboxGL from "@react-native-mapbox-gl/maps";
import React, {Component} from 'react';
import { Text, StyleSheet, View, Dimensions} from "react-native";
import Bubble from '../components/Bubble';

MapboxGL.setAccessToken("pk.eyJ1IjoiZGlzYyIsImEiOiJjazA3dTI5czQxaGdqM25wbmo1ZXU2cTlyIn0.W7a8ZQ6tiaYnEUpzFh5fGg");


const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  page: {
    height: height,
    width: width,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  container: {
    height: height,
    width: width,
    backgroundColor: "tomato"
  },
  map: {
    height: height,
    width: width,
  }
});

export default class Carte extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pointInView: null,
    };

    this.onPress = this.onPress.bind(this);
  }

  // componentDidMount() {
  //   MapboxGL.setTelemetryEnabled(false);
  // }
 
  // async getPoint (){
  //   const adresses = await this._map.getPointInView([-37.817070, 144.949901]);

  // }
  async onPress(e) {
    const pointInView = await this._map.getPointInView(e.geometry.coordinates);
    this.setState({pointInView});
  }
  renderPointInView() {
    if (!this.state.pointInView) {
      return <Text>Touch map to see xy pixel location</Text>;
    }

    return [
      <Text key={'x'}>x: {this.state.pointInView[0]}</Text>,
      <Text key={'y'}>y: {this.state.pointInView[1]}</Text>,
    ];
  }
  render() {
    return (
      <View style={{flex:1}}>
        <MapboxGL.MapView
          ref={c => (this._map = c)}
          onPress={this.onPress}
          style={{flex: 1}}
        >
          <MapboxGL.Camera
            zoomLevel={9}
            centerCoordinate={[-73.970895, 40.723279]}
          />
        </MapboxGL.MapView>
        <MapboxGL.SymbolLayer  />
        <Bubble>{this.renderPointInView()}</Bubble>
      </View>
    );
  }
}