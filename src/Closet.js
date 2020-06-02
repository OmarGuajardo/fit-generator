import React, { Component } from 'react'
import './Closet.css';
import shirt from './icons/tshirt.png'
import shorts from './icons/shorts.png'
import shoes from './icons/boots.png'

//TODO: REFERENCE AUTHOR OF ICONS 
{/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
function ClassIconSelector(props){
    return(
        <div className = "classIconSelector">
            <div className="clothe-container">
                <img className = "clothe" src={props.article} alt=""/>
            </div>
            <div>{props.name}</div>
        </div>
    )
}

export default class Closet extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className = "closetContainer">
                <h2>CLOSET</h2>
                <div className="optionsContainer">
                    <ClassIconSelector
                     article = {shirt}
                     name = "TOP"/>
                    <ClassIconSelector 
                    article = {shorts}
                    name = "BOTTOM"/>
                    <ClassIconSelector 
                    article = {shoes}
                    name = "SHOES"/>
                </div>
                <div className="closetShowCaseContainer"></div>
            </div>
        )
    }
}
