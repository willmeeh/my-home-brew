import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Typography } from 'antd';
import { invertColor } from 'utils/color';
import { convertSrmToRGB } from 'utils/srm-to-hex';
import './glass.scss';

const { Text } = Typography;

class Glass extends Component {

    render() {
        const { foamColor, vitalStatistic } = this.props;

        if (vitalStatistic) {
            const { ibu, abv, og, fg, srm } = vitalStatistic;
            if (srm) {
                const liquidColor = convertSrmToRGB(srm.split(/-/)[0]);
                const liquidStyle = { 'backgroundColor': liquidColor };
                const foamStyle = { 'backgroundColor': foamColor };
                const characteristicsStyle = { 'color': invertColor(liquidColor, true) };

                return (
                    <div className="beer-glass">
                        <div className="beer-glass-foam" style={foamStyle}></div>
                        <div className="beer-glass-liquid" style={liquidStyle}>
                            <div className="beer-description">
                                <Text strong style={characteristicsStyle}>IBU: {ibu || ''}</Text>
                                <br />
                                <Text strong style={characteristicsStyle}>ABV: {abv}</Text>
                                <br />
                                <Text strong style={characteristicsStyle}>OG: {og}</Text>
                                <br />
                                <Text strong style={characteristicsStyle}>FG: {fg}</Text>
                                <br />
                                <Text strong style={characteristicsStyle}>SRM: {srm}</Text>
                            </div>
                        </div>
                    </div>
                );
            }
            else {
                return ('');
            }
        }
        else {
            return ('');
        }
    }
}

export default withRouter(Glass);
