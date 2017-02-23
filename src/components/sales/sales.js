import React, { Component } from 'react';
import './sales.css';
import * as data from '../../data/data.json';

class Sales extends Component {
    render() {
        return (
            <div className="salesWrapper">
                <div className="sales" style={{ width : this.calculateValueAsPercentageWidth(Number(data.sales.current), Number(data.sales.target)) }}>
                    <div className="text">Sales</div>
                    <div className="value">{Number(data.sales.current).toLocaleString('en')}</div>
                </div>
                <div className="target" style={{ width : this.calculateValueAsPercentageWidth(Number(data.sales.target)-Number(data.sales.current), Number(data.sales.target)) }}>
                    <div className="text">Target</div>
                    <div className="value">{Number(data.sales.target).toLocaleString('en')}</div>
                </div>
            </div>
        )
    }

    calculateValueAsPercentageWidth(current, target) {
        return ((current / target) * 100) + '%';
    }
}

export default Sales;