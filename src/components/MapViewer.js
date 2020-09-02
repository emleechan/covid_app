import React, {useState, useEffect} from 'react';
import DeckGL from '@deck.gl/react';
import {StaticMap} from 'react-map-gl';
import {PointCloudLayer} from '@deck.gl/layers'
import {_initMapData} from '../loader'

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
  const [data, setData] = useState([]);

  const layer = [new PointCloudLayer({
      data: data,
      getPosition: (d) => d.latLong,
      id: 'point-cloud-layer',
      pickable: false,
      pointSize: 5,
    })]

  useEffect(() => {
    setData(_initMapData);
  }, [])
    
  return ( 
      <div style={{height: "500px"}}>
        {console.log(data)}
          <DeckGL
          initialViewState={INITIAL_VIEW_STATE}
          controller={true}
          layers={[layer]} 
          style={{position: "relative"}}
          >
            <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
          </DeckGL>
      </div>
  )

}
export default MapViewer;
