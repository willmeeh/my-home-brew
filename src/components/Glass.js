import React, { Component } from 'react';
import {  } from 'semantic-ui-react'
import { Link, withRouter } from "react-router-dom";

import './glass.scss';

class Glass extends Component {

    render() {
        const { corLiquido, corEspuma } = this.props;
        const liquidStyle = { 'backgroundColor': corLiquido };
        const foamStyle = { 'backgroundColor': corEspuma };

        return (
            <div className="beer-glass">
                <div className="beer-glass-foam" style={foamStyle}></div>
                <div className="beer-glass-liquid" style={liquidStyle}></div>
            </div>
        );
    }
}

export default withRouter(Glass);
