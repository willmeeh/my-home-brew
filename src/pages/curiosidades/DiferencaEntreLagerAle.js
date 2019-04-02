import React, { Component } from 'react';
import {
    Segment,
} from 'semantic-ui-react'
import { withRouter } from "react-router-dom";

class DiferencaEntreLagerAle extends Component {
    render() {
        return (
            <Segment>
                Diferença entre lager e ale
            </Segment>
        );
    }
}

export default withRouter(DiferencaEntreLagerAle);
