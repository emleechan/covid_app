import React, {useState, useEffect, useLayoutEffect} from 'react';
import {_initDashboardData} from '../loader'
import { Card, Grid, Segment, Header } from 'semantic-ui-react'
import './Dashboard.css';
import 'semantic-ui-css/semantic.min.css';

export const Dashboard = () => {
    const [data, setData] = useState({'NewConfirmed': 1232432});

    useEffect(async () => {
        const data = await _initDashboardData
        console.log(data)
        setData(data);
      }, [])

    return (
        <div className="dashboard">
            <Grid stackable columns={2}>
                <Grid.Column>
                    <Segment>
                        <div className='title'>New Confirmed Deaths</div>
                        <div className='title-numbers'>{data['NewConfirmed']}</div>
                    </Segment>
                </Grid.Column>
                
                <Grid.Column>
                    <Segment>
                        <div className='title'>New Confirmed Deaths</div>
                        <div className='title-numbers'>123298398</div>               
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
    );
}
export default Dashboard;
