import React, {Component} from 'react';
import MapboxGL from "@react-native-mapbox-gl/maps";
import Geo from '../images/placeholder.png'


export default class Marker extends Component {
    constructor(props) {
      super(props);
    }
  
  
    render() {
      const { coordinates} = this.props;
  
      const features = {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-0.556417, 47.475031],
        }
      }
      console.warn(features);
      return (
        <MapboxGL.ShapeSource
          id='markers_shapesource'
          shape={{ type: 'FeatureCollection', features }}
        >
          <MapboxGL.SymbolLayer
               id="markers_symbollayer"
              //  style={{
              //    iconImage: Geo
              //  }}
          />
        </MapboxGL.ShapeSource>
      );
    }
  }