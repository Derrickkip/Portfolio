import React, { Component } from 'react';
import Card from '../../Components/card/Card';
import bricklane from '../../images/bricklane.png';

class Projects extends Component {
    render() {
        return (
            <div>
                <Card src={bricklane} description="Bricklane is an 
                online investment platform based in the U.K enabling 
                everyone to invest in expertly choosen property portfolios"/>
            </div>
        );
    }
}

export default Projects;