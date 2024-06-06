import React from 'react';
import './PanelContent.css';
import AreaList from '../AreaList/AreaList';
import AddSurfaceArea from '../AddSurfaceArea/AddSurfaceArea';
import EditSurfaceArea from '../EditSurfaceArea/EditSurfaceArea';

class PanelContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            module: 'areaList'
        }
        this.selectAddFront = this.selectAddFront.bind(this);
        this.selectAddBack = this.selectAddBack.bind(this);
        this.selectAddLeft = this.selectAddLeft.bind(this);
        this.selectAddRight = this.selectAddRight.bind(this);
        this.cancelAddSurfaceArea = this.cancelAddSurfaceArea.bind(this);
        this.selectEditSurfaceArea = this.selectEditSurfaceArea.bind(this);
        this.cancelEditSurfaceArea = this.cancelEditSurfaceArea.bind(this);
    }

    selectAddFront(){
        this.setState({
            module: 'newArea',
            newAreaType: 'Front',
            newAreaLabel: `F${this.props.location.totalFronts+1}`
        });
        this.props.activateDrawingMode();
    }

    selectAddBack(){
        this.setState({
            module: 'newArea',
            newAreaType: 'Back',
            newAreaLabel: `B${this.props.location.totalBacks+1}`
        });
        this.props.activateDrawingMode();
    }

    selectAddLeft(){
        this.setState({
            module: 'newArea',
            newAreaType: 'Left',
            newAreaLabel: `L${this.props.location.totalLefts+1}`
        });
        this.props.activateDrawingMode();
    }

    selectAddRight(){
        this.setState({
            module: 'newArea',
            newAreaType: 'Right',
            newAreaLabel: `R${this.props.location.totalRights+1}`
        });
        this.props.activateDrawingMode();
    }

    cancelAddSurfaceArea(){
        this.setState({
            module: 'areaList'
        });
        this.props.deactivateDrawingMode();
    }

    selectEditSurfaceArea(selectedArea){
        this.setState({
            module: 'editArea',
            area: selectedArea
        });
        this.props.activateEditMode();
    }

    cancelEditSurfaceArea(){
        this.setState({
            module: 'areaList'
        });
        this.props.deactivateDrawingMode();
    }

    render(){
        if(this.props.location===undefined){
            return(
                <div></div>
            );
        } else if (this.state.module==='areaList'){
            return(
                <AreaList 
                    location={this.props.location} 
                    selectAddFront={this.selectAddFront}
                    selectAddBack={this.selectAddBack}
                    selectAddLeft={this.selectAddLeft}
                    selectAddRight={this.selectAddRight}
                    selectEditSurfaceArea={this.selectEditSurfaceArea} 
                    deleteArea={this.props.deleteArea} 
                />
            );
        } else if(this.state.module==='newArea'){
            return(
                <AddSurfaceArea
                    location={this.props.location} 
                    newAreaType={this.state.newAreaType}
                    newAreaLabel={this.state.newAreaLabel}
                    cancelAddSurfaceArea={this.cancelAddSurfaceArea}
                    drawNewArea={this.props.drawNewArea}
                    saveNewArea={this.props.saveNewArea}
                    searchLocation={this.props.searchLocation}
                />
            );
        } else if(this.state.module==='editArea'){
            return(
                <EditSurfaceArea
                    location={this.props.location}
                    calculateArea={this.props.calculateArea}
                    stringifyPoints={this.props.stringifyPoints}
                    createBackUpPolygon={this.props.createBackUpPolygon} 
                    area={this.state.area}
                    cancelEditSurfaceArea={this.cancelEditSurfaceArea}
                    editArea={this.props.editArea}
                />    
            );
        }
    }
}

export default PanelContent;