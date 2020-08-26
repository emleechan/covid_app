import React from 'react';

import DeckGL from '@deck.gl/react';
import {LineLayer} from '@deck.gl/layers';
import {StaticMap} from 'react-map-gl';

const INITIAL_VIEW_STATE = {
    longitude: -122.41669,
    latitude: 37.7853,
    zoom: 13,
    pitch: 0,
    bearing: 0
  };

  // Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiZW1jMTUiLCJhIjoiY2s5Y2N4anYxMDM1bzNsczQyM2JmZ2NrdSJ9.50AmDUblg0xKcPxRfUxPGg"

const data = [
    {sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}
];

const MapViewer = () => {
    const layers = [
        new LineLayer({id: 'line-layer', data})
    ];
    
    return ( 
        <DeckGL
          initialViewState={INITIAL_VIEW_STATE}
          controller={true}
          layers={layers} 
        >
        <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
        </DeckGL>
    )
}

export default MapViewer;
