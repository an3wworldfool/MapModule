import React from 'react';
import './AreaList.css';
import Area from '../Area/Area';

class AreaList extends React.Component{
    constructor(props){
        super(props);
        this.handleAddFrontClick = this.handleAddFrontClick.bind(this);
        this.handleAddBackClick = this.handleAddBackClick.bind(this);
        this.handleAddLeftClick = this.handleAddLeftClick.bind(this);
        this.handleAddRightClick = this.handleAddRightClick.bind(this);
    }

    handleAddFrontClick(event){
        this.props.selectAddFront();
    }

    handleAddBackClick(event){
        this.props.selectAddBack();
    }

    handleAddLeftClick(event){
        this.props.selectAddLeft();
    }

    handleAddRightClick(event){
        this.props.selectAddRight();
    }

    render(){
        return(
            <div>
                <div className="totalAreaDiv text-left">
                    <h5>Total Surface Area:&nbsp;</h5>
                    <h5 className="h5Area">{this.props.location.totalSurfaceArea} sq ft</h5>
                </div>
                <div className="btnDiv text-left">
                    <h5 className="h5Add">Add New Area</h5>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" onClick={this.handleAddFrontClick} className="btn btn-success btnNewArea">Front</button>
                        <button type="button" onClick={this.handleAddBackClick} className="btn btn-success btnNewArea">Back</button>
                        <button type="button" onClick={this.handleAddLeftClick} className="btn btn-success btnNewArea">Left</button>
                        <button type="button" onClick={this.handleAddRightClick} className="btn btn-success btnNewArea">Right</button>
                    </div>
                </div>
                <div>
                    {
                        this.props.location.areas.map(area => {
                            return <Area
                                key={area.idArea}
                                location={this.props.location}
                                area={area}
                                activateDrawingMode={this.props.activateDrawingMode}
                                selectEditSurfaceArea={this.props.selectEditSurfaceArea}
                                deleteArea={this.props.deleteArea} 
                            />
                        })
                    }
                </div> 
            </div>
        );          
    }
}

export default AreaList;