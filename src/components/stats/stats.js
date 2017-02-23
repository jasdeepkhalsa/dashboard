import React, { Component } from 'react';
import './stats.css';
import * as data from '../../data/data.json';

class Stat extends Component {
    render() {
        return (
            <li className={'stat' + (this.props.classes ? ' ' + this.props.classes : '')}>
                <div className="value">{this.props.value}</div>
                <div className="text">{this.props.text}</div>
            </li>
        )
    }
}

class Stats extends Component {
    render() {
        return (
            <ul className="stats">
                <Stat text="Vehicle's Made" value={data['vehicles-made']}></Stat>
                <Stat text="Retail Orders" value={data['retail-orders']}></Stat>
                <Stat text="Online Orders" value={data['online-orders']}></Stat>
                <Stat classes="less-margin" text="Configurations Completed" value={this.calculateConfigurationsCompleted(data['configurations-completed'])}></Stat>
                <Stat text="Test Drives Arranged" value={data['test-drives']}></Stat>
            </ul>
        )
    }

    calculateConfigurationsCompleted(value) {
        return (value / 1000) + 'k';
    }
}

export default Stats;