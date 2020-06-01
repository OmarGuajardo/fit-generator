import './App.css'
import React, { Component } from 'react'


function ChoiceSelectorRow(props){

    if(props.list.length > 0){
        return(
            <div>
            {/* <div className = "ChoiceSelectorIndicator">{props.name}:</div> */}

                <select className = "ChoiceSelectorRow" defaultValue = {props.name} name = {props.name} onChange = {props.handleOnChange}>
                <option  disabled value = {props.name}>Select a {props.name}</option>
                    {props.list.map(item => {
                            return(<option  key = {item} value = {item}>{item}</option>)
                    }
                    )}
        
                </select>
            </div>
            )
        }
        else{
            return(
                <div>
                 {/* <div className = "ChoiceSelectorIndicator">{props.name}:</div> */}
                    <input className = "ChoiceSelectorRow Input" name = {props.name}type="text" onChange = {props.handleOnChange} placeholder = {props.name}/>
                </div>
                )
            }
        }

    

    
function ClassSelector(props){
    return(
        <div>
            {/* <div className = "ChoiceSelectorIndicator">Class:</div> */}
            <select  className = "ChoiceSelectorRow" defaultValue = "Class" onChange = {props.handleChangeClass}>
                
               <option disabled value = "Class">Select a Class</option>
               <option key = "Top" value = "Top">Top</option>
               <option key = "Bottom" value = "Bottom">Bottom</option>
               <option key = "Shoes" value = "Shoes">Shoes</option>
            </select>
        </div>
        )
    }
function ChoiceSelectorContainer(props){

    return(
    <div>
        {props.atts.map(item => <ChoiceSelectorRow 
        key = {Object.keys(item)[0]} 
        name = {Object.keys(item)[0]} 
        list = {Object.values(item)[0]}
        handleOnChange = {props.handleOnChange}
        />)}
    </div>
    )
}

export default class ToDoApp extends Component {
    constructor(props){
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleChangeClass = this.handleChangeClass.bind(this)
        this.state = {
            class : "Top",
            closet : {Top:[],Bottom:[],Shoes:[]},
            item :{},
        }
        this.atts = {
            Top : [
                {Name :[]},
                {Color :["Red","Green","Blue","Tan"]},
                {Fit : ["Fitted","Big"]},
                {Style :["Graphic","Basic","Button","Long Sleeve"]}
            ],
            Bottom: [
                {Name :[]},
                {Color :["Red","Green","Blue","Tan"]},
                {Fit: ["Straight","Skinny","Ripped"]},
                {Style: ["Khaki","Slacks","Denim","Joggers","Shorts"]}
            ],
            Shoes: [
                // {Name :[]},
                {Color :["Red","Green","Blue","Tan"]},
                {ShoeBrand:[]},
                {ShoeName :[]}
            ]
        }
        this.STORAGE_KEY = "KEY"

    }

    handleAddItem()
    {
        const item = this.state.item
        if(Object.keys(item).length < 3)
        {
            alert("you are a missing an item")
        }
        else
        {
            console.log(this.state.item)
        }
    }
    handleChangeClass(e)
    {

        const newClass = e.target.value
        this.setState({class:e.target.value})
        this.setState(prevState =>{
            
            if(newClass === "Top"){
                const newItem = {
                    Color:prevState.item.Color,
                    Fit:"Fitted",
                    Style:"Graphic"
                }
                return({...prevState,item:newItem})
            }
            else if(newClass === "Bottom"){
                const newItem = {
                    Color:prevState.item.Color,
                    Fit:"Straight",
                    Style:"Khaki"
                }
                return({...prevState,item:newItem})
            }
            else{
                const previousColor = {Color:prevState.item.Color}
                return({...prevState,item:previousColor})
            }
            
        })
    }
    handleOnChange(e)
    {
        const value = e.target.value
        const key = e.target.name
        this.setState(prevState =>{
            let newItem = {...prevState.item,[key]:value}
            return({...prevState,item:newItem})
        })

    }

    
    render() {
        return (
            <div>
                <h2 className = "title">Fit Generator</h2>
                <ClassSelector
                handleChangeClass = {this.handleChangeClass}
                />
                <ChoiceSelectorContainer 
                handleOnChange = {this.handleOnChange}
                atts = {this.atts[this.state.class]}
                />
                <button  className = "ChoiceSelectorRow" onClick = {()=>{this.handleAddItem()}}>Add Item</button>

            </div>

        )
    }
}
