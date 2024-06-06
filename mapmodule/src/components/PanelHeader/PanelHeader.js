import React from 'react';
import './PanelHeader.css';

class PanelHeader extends React.Component{
    render(){
        if(this.props.location===undefined){
            return(
                <div className="text-left bg-light mb-3 PanelHeader">
                    <div className="card-body">
                        <h3 className="card-title">Enter a valid Address</h3>
                        <p className="card-text">Enter a valid Address</p>
                    </div>
                </div>
            );
        } else {
            return(
                <div className="text-left bg-light mb-3 PanelHeader">
                    <div className="card-body">
                        <h3 className="card-title">{this.props.location.street}</h3>
                        <p className="card-text">{this.props.location.city}, {this.props.location.stateAndZipCode}, {this.props.location.country}</p>
                    </div>
                </div>
            );
        }
    }
}

export default PanelHeader;