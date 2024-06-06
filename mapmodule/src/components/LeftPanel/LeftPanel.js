import React from 'react';
import './LeftPanel.css';
import PanelHeader from '../PanelHeader/PanelHeader';
import PanelContent from '../PanelContent/PanelContent';

class LeftPanel extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="sidebar" className="bg-light">
                <PanelHeader location={this.props.location}/>
                <PanelContent 
                    location={this.props.location} 
                    calculateArea={this.props.calculateArea}
                    stringifyPoints={this.props.stringifyPoints}
                    createBackUpPolygon={this.props.createBackUpPolygon}
                    activateDrawingMode={this.props.activateDrawingMode}
                    activateEditMode={this.props.activateEditMode}
                    deactivateDrawingMode={this.props.deactivateDrawingMode}
                    drawNewArea={this.props.drawNewArea}
                    saveNewArea={this.props.saveNewArea}
                    editArea={this.props.editArea}
                    deleteArea={this.props.deleteArea}
                />
            </div>
        );
    }
}

export default LeftPanel;