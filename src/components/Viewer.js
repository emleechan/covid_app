import  React, {Component} from 'react';
import MapViewer from './MapViewer'
import {_initData} from '../loader'

export class Viewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: []
        };
    }

    componentDidMount = async() => {
        const data = await _initData()
        this.setState({data})
    }

    render = () => {
        return (
          <div>
            <MapViewer data={this.state.data} />
          </div>
        );
    }
}

export default Viewer;
