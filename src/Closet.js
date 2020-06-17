import React, { Component } from 'react'
import './Closet.css';
import shirt from './icons/tshirt.png'
import shorts from './icons/shorts.png'
import shoes from './icons/boots.png'
import ClassCloset from './components/Closet/ClassCloset'


//TODO: REFERENCE AUTHOR OF ICONS 
/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */
function ClassIconSelector(props){
    return(
        <div 
        onClick = {()=>{props.toggleClass(props.name)}} 
        className = {props.options ? "classIconSelector":"classIconSelector hidden"} >
            <div className="clothe-container" >
                <img className = "clothe" src={props.article} alt=""/>
            </div>
            <div >{props.name}</div>
        </div>
    )
}

export default class Closet extends Component {
    constructor(props){
        super(props);
        this.toggleClass = this.toggleClass.bind(this)
        this.state = {
            options : true,
            title :"CLOSET",
            specificCloset: "Top"
        }
        this.article_array = [[shirt,"Top"],[shorts,"Bottom"],[shoes,"Shoes"]]

    }

    toggleClass(name){
        let newTitle
        if(this.state.title !== "CLOSET"){newTitle = "CLOSET"}
        else{
            newTitle = name
            this.setState(prevState =>{
                return({...prevState,specificCloset:newTitle})
            })
        }
        this.setState(prevState =>{
            return({
                title:newTitle,
                options:!prevState.options
            })
        })
    }
    
    render() {
        return (
            <div className = "closetContainer">
                <h2 className = "closetHeader">{this.state.title}</h2>
                <div 
                className = {this.state.options ? "optionsContainer":"optionsContainer hidden"}>
                {this.article_array.map(item=><ClassIconSelector
                key= {item[1]}
                article = {item[0]}
                name = {item[1]}
                options = {this.state.options}
                toggleClass = {this.toggleClass}
                />)}
                </div>
                <ClassCloset
                className={this.state.options? "closetShowCaseContainer hidden" : "closetShowCaseContainer"}
                toggleClass = {this.toggleClass}
                clotheClass = {this.state.specificCloset}
                specificCloset = {this.props.closet[this.state.specificCloset]}
                handleDeleteItem = {this.props.handleDeleteItem}
                />
            </div>
        )
    }
}
