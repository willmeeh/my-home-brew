import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Typography } from 'antd';
import { invertColor } from '../utils/color';
import './glass.scss';

const { Text } = Typography;

class Glass extends Component {

    render() {
        const { corLiquido, corEspuma, ibu, abv } = this.props;
        const liquidStyle = { 'backgroundColor': corLiquido };
        const foamStyle = { 'backgroundColor': corEspuma };
        const characteristicsStyle = { 'color': invertColor(corLiquido, true) };

        return (
            <div className="beer-glass">
                <div className="beer-glass-foam" style={foamStyle}></div>
                <div className="beer-glass-liquid" style={liquidStyle}>
                    <div className="beer-description">
                        <Text strong style={characteristicsStyle}>IBU: {ibu}</Text>
                        <br />
                        <Text strong style={characteristicsStyle}>ABV: {abv}</Text>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Glass);
