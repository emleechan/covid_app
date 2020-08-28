import React from 'react';

import DeckGL from '@deck.gl/react';
import {StaticMap} from 'react-map-gl';
import {PointCloudLayer} from '@deck.gl/layers';

const INITIAL_VIEW_STATE = {
    longitude: -66,
    latitude: 46,
    // zoom: 13,
    zoom: 1,
    pitch: 0,
    bearing: 0
  };

  // Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiZW1jMTUiLCJhIjoiY2s5Y2N4anYxMDM1bzNsczQyM2JmZ2NrdSJ9.50AmDUblg0xKcPxRfUxPGg"

const MapViewer = (props) => {

    console.log(props.data)
    const layer = new PointCloudLayer({
        data: props.data,
        getPosition: (d) => d.latLong,
        id: 'point-cloud-layer',
        pickable: false,
        pointSize: 5,
      });
    
    return ( 
        <DeckGL
          initialViewState={INITIAL_VIEW_STATE}
          controller={true}
          layers={[layer]} 
        >
        <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
        </DeckGL>
    )
}

export default MapViewer;
