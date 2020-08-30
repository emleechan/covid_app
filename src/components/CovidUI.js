import  React from 'react';
import MapViewer from './MapViewer'
import Dashboard from './Dashboard'
import {_initMapData} from '../loader'

const CovidUI = () => {
  return (
    <div >
      <Dashboard />
      <MapViewer />
    </div>
  );
    
}
export default CovidUI;
