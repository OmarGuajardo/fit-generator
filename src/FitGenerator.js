import './App.css'
import React, { Component } from 'react'
import Closet from './Closet'
import ChoiceSelectorContainer from './components/FitGenerator/ChoiceSelectorContainer'
import ClassSelector from './components/FitGenerator/ClassSelector'
import FitMatching from './backend/FitMatching'
import OutfitHandle from './components/GeneratedOutfits/OutfitHandle'
import GenerateUI from './components/FitGenerator/GenerateUI'
import uuid from 'react-uuid'
import Button from '@material-ui/core/Button';

export default class ToDoApp extends Component {

    constructor(props){
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleChangeClass = this.handleChangeClass.bind(this)
        this.handleGenerate = this.handleGenerate.bind(this)
        this.handleDeleteItem = this.handleDeleteItem.bind(this)
        this.STORAGE_KEY_CLOSET = "fitGenerator.closet"
        this.STORAGE_KEY_OUTFITS = "fitGenerator.outfits"

        this.state = {
            class : "Top",
            generated_outfits :[],
            closet : {Top:[],Bottom:[],Shoes:[]},
            
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

    handleDeleteItem(clotheClass, ID){
        console.log("deleting and item who's id is " , ID)
        console.log("deleting and item who's class is " , clotheClass)
        const specificCloset = this.state.closet[clotheClass]
        const newSpecificCloset = specificCloset.filter(object => object.ID !== ID)
        this.setState(prevState =>{
            const newCloset = {...prevState.closet,[clotheClass]:newSpecificCloset}
            return({...prevState,closet:newCloset})
        })
    }

    handleGenerate(numFits){
        const localCloset = this.state.closet
        console.log(localCloset)
        if(localCloset.Top.length === 0 || localCloset.Bottom.length === 0 || localCloset.Shoes.length === 0){
            alert("you need to have at least one item per class to generate outfits")
        }
        else{
            let newCloset = new FitMatching(this.state.closet)
            let newGeneratedOutfits = newCloset.generateCloset(numFits)
            this.setState(prevState =>{
                return({...prevState,generated_outfits:newGeneratedOutfits})
            })
    
        }
        
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
            localStorage.setItem(this.STORAGE_KEY_CLOSET,JSON.stringify(this.state.closet))
        }
        if(this.state.generated_outfits !== prevState.generated_outfits){
            console.log("saving new fits")
            localStorage.setItem(this.STORAGE_KEY_OUTFITS,JSON.stringify(this.state.generated_outfits))
        }
    }
    componentDidMount()
    {
        const retrievedOutfits = JSON.parse(localStorage.getItem(this.STORAGE_KEY_OUTFITS))
        const retrievedCloset = JSON.parse(localStorage.getItem(this.STORAGE_KEY_CLOSET))
        if(retrievedCloset){
            this.setState(prevState =>{
                return({...prevState,closet:retrievedCloset})
            })
        }
        else
        {
            console.log("no closet retrieved")
        }
        if(retrievedOutfits){
            this.setState(prevState =>{
                return({...prevState,generated_outfits:retrievedOutfits})
            })
        }
        else
        {
            console.log("no fits retrieved")
        }
    }
    handleChangeClass(e)
    {
        this.setState({class:e.target.value})
        this.setState(prevState =>{
            return({...prevState,item:{}})            
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
                        selectedItem = {this.state.class}
                        />
                        <ChoiceSelectorContainer 
                        handleOnChange = {this.handleOnChange}
                        atts = {this.atts[this.state.class]}
                        selectedItem = {this.state.item}
                        />
                        <Button  className = "ChoiceSelectorRow Button" onClick = {()=>{this.handleAddItem()}}>Add Item</Button>
                        
                    </div>
                    <Closet
                    closet = {this.state.closet}
                    handleDeleteItem = {this.handleDeleteItem}
                    />
                </div>
                <div className = "bot-half-container">
                    {this.state.generated_outfits.map(item =>{
                        return(
                            <OutfitHandle
                            key = {uuid()}
                            info = {item}
                            number = {this.state.generated_outfits.indexOf(item)}
                            />
                        )
                    })}
                </div>
                {/* <button onClick ={()=>console.log(this.state.item)}>See Item</button>
                <button onClick ={()=>console.log(this.state)}>See State</button> */}
            </div>

        )
    }
}
