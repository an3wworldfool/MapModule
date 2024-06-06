import React from 'react';
import './EditSurfaceArea.css';

class EditSurfaceArea extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            label: this.props.area.name,
            color: this.props.area.color
        }
        this.handleCancelEditSurfaceAreaClick = this.handleCancelEditSurfaceAreaClick.bind(this);
        this.handleEditSurfaceAreaClick = this.handleEditSurfaceAreaClick.bind(this);
        this.handleLabelChange = this.handleLabelChange.bind(this);
        this.handleColorBlueClick = this.handleColorBlueClick.bind(this);
        this.handleColorGreenClick = this.handleColorGreenClick.bind(this);
        this.handleColorRedClick = this.handleColorRedClick.bind(this);
        this.handleColorYellowClick = this.handleColorYellowClick.bind(this);
        this.handleColorBlueGreenClick = this.handleColorBlueGreenClick.bind(this);
        this.handleColorGrayClick = this.handleColorGrayClick.bind(this);
        this.handleColorBlackClick = this.handleColorBlackClick.bind(this);
    }

    componentDidMount(){
        this.setState({editablePolygon: this.props.createBackUpPolygon(this.props.area.polygon.getPath(), this.props.area.color)}, function(){
            this.props.area.polygon.setMap(null);
            this.state.editablePolygon.setMap(window.MyMap);
            this.state.editablePolygon.setEditable(true);
            this.state.editablePolygon.setDraggable(true);
        });    
    }

    handleCancelEditSurfaceAreaClick(event){
        this.props.cancelEditSurfaceArea();
        this.state.editablePolygon.setMap(null);
        this.props.area.polygon.setMap(window.MyMap);
    }

    handleEditSurfaceAreaClick(event){
        let area = {
            idArea: this.props.area.idArea,
            address: this.props.location.address,
            name: this.state.label,
            surface_area: this.props.calculateArea(this.state.editablePolygon.getPath()),
            points: this.props.stringifyPoints(this.state.editablePolygon.getPath()),
            color: this.state.color,
            type: this.props.area.type
        }
        this.props.cancelEditSurfaceArea();
        this.props.editArea(area);
        this.state.editablePolygon.setMap(null);
    }

    handleLabelChange(event){
        this.setState({
            label: event.target.value
        });
    }

    handleColorBlueClick(event){
        this.setState({
            color: 'rgb(0, 105, 217)'
        });
        this.state.editablePolygon.setOptions({
                fillColor: 'rgb(0, 105, 217)',
                strokeColor: 'rgb(0, 105, 217)',
                strokeWeight: 5,
        });
    }

    handleColorGreenClick(event){
        this.setState({
            color: 'rgb(33, 136, 56)'
        });
        this.state.editablePolygon.setOptions({
                fillColor: 'rgb(33, 136, 56)',
                strokeColor: 'rgb(33, 136, 56)',
                strokeWeight: 5,
        });
    }

    handleColorRedClick(event){
        this.setState({
            color: 'rgb(220, 53, 69)'
        });
        this.state.editablePolygon.setOptions({
                fillColor: 'rgb(220, 53, 69)',
                strokeColor: 'rgb(220, 53, 69)',
                strokeWeight: 5,
        });
    }

    handleColorYellowClick(event){
        this.setState({
            color: 'rgb(224, 168, 0)'
        });
        this.state.editablePolygon.setOptions({
                fillColor: 'rgb(224, 168, 0)',
                strokeColor: 'rgb(224, 168, 0)',
                strokeWeight: 5,
        });
    }

    handleColorBlueGreenClick(event){
        this.setState({
            color: 'rgb(19, 132, 150)'
        });
        this.state.editablePolygon.setOptions({
                fillColor: 'rgb(19, 132, 150)',
                strokeColor: 'rgb(19, 132, 150)',
                strokeWeight: 5,
        });
    }

    handleColorGrayClick(event){
        this.setState({
            color: 'rgb(108, 117, 125)'
        });
        this.state.editablePolygon.setOptions({
                fillColor: 'rgb(108, 117, 125)',
                strokeColor: 'rgb(108, 117, 125)',
                strokeWeight: 5,
        });
    }

    handleColorBlackClick(event){
        this.setState({
            color: 'rgb(35, 39, 43)'
        });
        this.state.editablePolygon.setOptions({
                fillColor: 'rgb(35, 39, 43)',
                strokeColor: 'rgb(35, 39, 43)',
                strokeWeight: 5,
        });
    }

    render(){
        return(
            <div className="mainContainer">
                <div className="headerDiv text-left">
                    <h5>Edit Surface Area</h5>
                </div>
                <div className="colorDiv text-left">
                    <label>Color</label>
                    <br></br>
                    <button className="btn btn-primary btnColor" onClick={this.handleColorBlueClick}></button>
                    <button className="btn btn-success btnColor" onClick={this.handleColorGreenClick}></button>
                    <button className="btn btn-danger btnColor" onClick={this.handleColorRedClick}></button>
                    <button className="btn btn-warning btnColor" onClick={this.handleColorYellowClick}></button>
                    <button className="btn btn-info btnColor" onClick={this.handleColorBlueGreenClick}></button>
                    <button className="btn btn-secondary btnColor" onClick={this.handleColorGrayClick}></button>
                    <button className="btn btn-dark btnColor" onClick={this.handleColorBlackClick}></button>
                </div>
                <div className="text-left">
                    <form>
                        <label>Label</label>
                        <input type="text" className="form-control" onChange={this.handleLabelChange} defaultValue={this.props.area.name} required/>
                    </form>
                    <div className="bottomDiv">
                        <input type="button" className="btn btn-default btnCancel" onClick={this.handleCancelEditSurfaceAreaClick} data-dismiss="modal" value="Cancel"/>
                        <input type="submit" className="btn btn-success btnAdd" onClick={this.handleEditSurfaceAreaClick} value="Edit"/>
                    </div>
                </div>
            </div> 
        );
    }
}

export default EditSurfaceArea;