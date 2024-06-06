import React from 'react';
import axios from 'axios';

var webPage = 'webapi20191128121222.azurewebsites.net';

const AddressList = {
    searchLocation(address){
        return axios.get(`https://${webPage}/api/location/${address}`)
        .then(response => {
            var totalSurfaceArea = 0;
            var totalFronts = 0;
            var totalBacks = 0;
            var totalLefts = 0;
            var totalRights = 0;
            response.data.area.forEach(ar => {
                ar.points = JSON.parse(ar.points);
                totalSurfaceArea += ar.surfaceArea;
                if(ar.type==='Front') totalFronts++;
                if(ar.type==='Back') totalBacks++;
                if(ar.type==='Left') totalLefts++;
                if(ar.type==='Right') totalRights++;
            });
            totalSurfaceArea = totalSurfaceArea.toFixed(4);
            var arrAddress = response.data.address.split(',');
            const dataLocation= {
                address: response.data.address,
                coordinates: JSON.parse(response.data.coordinates),
                areas: response.data.area,
                totalSurfaceArea: totalSurfaceArea,
                totalFronts: totalFronts,
                totalBacks: totalBacks,
                totalLefts: totalLefts,
                totalRights: totalRights,
                street: arrAddress[0],
                city: arrAddress[1],
                stateAndZipCode: arrAddress[2],
                country: arrAddress[3]
            }
            return dataLocation;
        }).catch(error => {
            console.log(error);
        });
    },

    saveArea(area){
        return axios.post(`https://${webPage}/api/area`, {
            address: area.address,
            name: area.name,
            surfaceArea: area.surface_area,
            points: area.points,
            color: area.color,
            type: area.type
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    },

    editArea(area){
        return axios.put(`https://${webPage}/api/area/${area.idArea}`, {
            idArea: area.idArea,
            address: area.address,
            name: area.name,
            surfaceArea: area.surface_area,
            points: area.points,
            color: area.color,
            type: area.type
        }).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    },

    deleteArea(idArea){
        return axios.delete(`https://${webPage}/api/area/${idArea}`).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

}

export default AddressList;