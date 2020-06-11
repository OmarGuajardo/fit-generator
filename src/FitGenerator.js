import './App.css'
import React, { Component } from 'react'
import Closet from './Closet'
import ChoiceSelectorContainer from './components/FitGenerator/ChoiceSelectorContainer'
import ClassSelector from './components/FitGenerator/ClassSelector'
import FitMatching from './backend/FitMatching'
import OutfitHandle from './components/GeneratedOutfits/OutfitHandle'
import GenerateUI from './components/FitGenerator/GenerateUI'
import uuid from 'react-uuid'

export default class ToDoApp extends Component {

    constructor(props){
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleChangeClass = this.handleChangeClass.bind(this)
        this.handleGenerate = this.handleGenerate.bind(this)
        this.handleDeleteItem = this.handleDeleteItem.bind(this)
        this.STORAGE_KEY = "fitGenerator.closet"

        this.state = {
            testCloset :{},
            class : "Top",
            generated_outfits :[],
            closet : {Top:[],Bottom:[],Shoes:[]},
            // closet : {
            //     Top:[
            //         {
            //             Name: "Horizontal Red Stripes",
            //             Color:"Red",
            //             Fit:"Tight",
            //             Style:"Pattern"
            //         },
            //         {
            //             Name: "Culutre",
            //             Color:"Blue",
            //             Fit:"Big",
            //             Style:"Graphic"
            //         },
            //         {
            //             Name: "Fila",
            //             Color:"White",
            //             Fit:"Big",
            //             Style:"Graphic"
            //         },
            //         {
            //             Name: "Pink Basic Shirt",
            //             Color:"Pink",
            //             Fit:"Fitted",
            //             Style:"Basic"
            //         },
            //         {
            //             Name: "Bright Yellow Striped",
            //             Color:"Yello",
            //             Fit:"Fitted",
            //             Style:"Pattern"
            //         },
            //         {
            //             Name: "Basic Tan",
            //             Color:"Tan",
            //             Fit:"Fitted",
            //             Style:"Basic"
            //         },
            //         {
            //             Name: "Chevron Stripes",
            //             Color:"Blue",
            //             Fit:"Tight",
            //             Style:"Pattern"
            //         }
            //     ],
            //     Bottom:[
            //         {
            //             Name:"Blue Shorts",
            //             Color:"Blue",
            //             Fit:"Straight",
            //             Style:"Shorts"
            //         },
            //         {
            //             Name:"Ripped Black",
            //             Color:"Black",
            //             Fit:"Ripped",
            //             Style:"Denim"
            //         },
            //         {
            //             Name:"Skinny Dark Blue",
            //             Color:"Blue",
            //             Fit:"Skinny",
            //             Style:"Denim"
            //         },
            //         {
            //             Name:"Khaki Chinos",
            //             Color:"Tan",
            //             Fit:"Skinny",
            //             Style:"Chinos"
            //         },
            //         {
            //             Name:"Khaki Shorts",
            //             Color:"Tan",
            //             Fit:"Straight",
            //             Style:"Shorts"
            //         },
            //     ],
            //     Shoes:[
            //         {
            //             Name:"Old Skool Vans",
            //             Color:"Black",
            //             ShoeBrand:"Vans"
            //         },
            //         {
            //             Name:"High Tops",
            //             Color:"White",
            //             ShoeBrand:"Rebook"
            //         },
            //         {
            //             Name:"Continental",
            //             Color:"Tan",
            //             ShoeBrand:"Adidas"
            //         },
            //     ]
            // },
            item :{},
        }
        this.atts = {
            Top : [
                {Name :[]},
                {Color :["Red","Green","Blue","Yellow","Pink","Purple","White","Black","Brown","Oragne","Grey","Tan"]},
                {Fit : ["Tight","Fitted","Oversize"]},
                {Style :["Graphic","Pattern","Basic","Button","Long Sleeve"]}
            ],
            Bottom: [
                {Name :[]},
                {Color :["Red","Green","Blue","Yellow","Pink","Purple","White","Black","Brown","Oragne","Grey","Tan"]},
                {Fit: ["Straight","Skinny","Ripped"]},
                {Style: ["Khaki","Slacks","Denim","Joggers","Shorts","Chinos"]}
            ],
            Shoes: [
                {Name :[]},
                {Color :["Red","Green","Blue","Yellow","Pink","Purple","White","Black","Brown","Oragne","Grey","Tan"]},
                {ShoeBrand:[]}
            ]
        }



    }

    handleDeleteItem(id){
        //TODO: Delete Item from this.state.closet based on ID
        //componentDidUpdate should take care of saving it to the localStorage
    }

    handleGenerate(numFits){
        console.log(numFits)
        let newCloset = new FitMatching(this.state.closet)
        let newGeneratedOutfits = newCloset.generateCloset(numFits)
        this.setState(prevState =>{
            return({...prevState,generated_outfits:newGeneratedOutfits})
        })

    }
    handleAddItem()
    {
        const item = this.state.item
        if(Object.keys(item).length < 3 )
        {
            alert("you are a missing an item")
        }
        else
        {
            // console.log("handling adding item")
            // const newItem = {...this.state.item,ID:uuid()}
            // console.log(newItem)

            this.setState(prevState =>{
                const newItem = {...this.state.item,ID:uuid()}
                const newAddition = [...prevState.closet[this.state.class],newItem]
                const newCloset = {...prevState.closet,[this.state.class]:newAddition}
                return({...prevState,closet:newCloset})
            })
        }
    }
    componentDidUpdate(prevProps,prevState,snapshot)
    {
        if(this.state.closet !== prevState.closet){
            console.log("saving new closet")
            localStorage.setItem(this.STORAGE_KEY,JSON.stringify(this.state.closet))
        }
        else{
            console.log("closet has not changed")
        }
    }
    componentDidMount()
    {
        const retrievedCloset = JSON.parse(localStorage.getItem(this.STORAGE_KEY))
        if(retrievedCloset){
            this.setState(prevState =>{
                return({...prevState,closet:retrievedCloset})
            })
        }
        else
        {
            console.log("nothing retrieved")
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
                    Fit:"Tight",
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
                <div className = "header-container">
                    <div className="header-title">Fit Generator</div>
                        <div className="generator-container">
                            
                            <GenerateUI 
                            handleGenerate = {this.handleGenerate}
                            />
                        </div>
                    </div>

                <div className="half-container">
                    <div className = "choiceSelectorContainer">
                        <ClassSelector
                        handleChangeClass = {this.handleChangeClass}
                        />
                        <ChoiceSelectorContainer 
                        handleOnChange = {this.handleOnChange}
                        atts = {this.atts[this.state.class]}
                        />
                        <button  className = "ChoiceSelectorRow" onClick = {()=>{this.handleAddItem()}}>Add Item</button>
                    </div>
                    <Closet
                    closet = {this.state.closet}
                    />
                </div>
                <div className = "bot-half-container">
                    {this.state.generated_outfits.map(item =>{
                        return(
                            <OutfitHandle
                            info = {item}
                            number = {this.state.generated_outfits.indexOf(item)}
                            />
                        )
                    })}
                </div>
               
            </div>

        )
    }
}
