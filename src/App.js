import React, { useState, useEffect } from "react";
import RowInput from "./RowInput";



import "./App.css";

function App() {

  const LOCAL_STORAGE_KEY = "fitGenerator.fit"
  const [closet, setCloset] = useState({ Top: [], Bottom: [], Shoes: [] });

  // Default Values
  const [chosen_class, setClass] = useState("Top");
  const [chosen_style, setStyle] = useState("Basic");
  const [chosen_color, setColor] = useState("Red");
  const [chosen_fit, setFit] = useState("Fitted");
  const [chosen_shoe, setShoe] = useState();
  const [chosen_brand, setBrand] = useState();
  const [list_fit, setListFit] = useState(["Fitted", "Big"]);
  const [list_style, setListStyle] = useState(["Basic", "Pattern", "Graphic", "Button",]);
  const [show, setShow] = useState("hide");

  const list_class = ["Top", "Bottom", "Shoes"];
  const list_color = [
    "Red",
    "Green",
    "Blue",
    "Grey",
    "Black",
    "White",
    "Purple",
    "Pink",
    "Yellow",
    "Orange",
    "Tan",
  ];
  // Retrieving and Storing Data
  useEffect(() => {
    const storedCloset = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedCloset)
      setCloset(storedCloset)

  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(closet))
  }, [closet])


  // Changing the remainder options based on what the class is
  useEffect(() => {
    if (chosen_class === "Top") {
      setListFit(["Fitted", "Big"]);
      setListStyle([
        "Basic",
        "Pattern",
        "Graphic",
        "Button",
        "Long Sleeve"
      ]);
      setShow("hide");
    } else if (chosen_class === "Bottom") {
      setListStyle([]);
      setListFit(["Skinny", "Ripped", "Straight", "Joggers"]);
      setShow("hide");
    } else {
      setShow("RowInput Input");
      setListStyle([]);
      setListFit([]);
    }
  }, [chosen_class]);


  function addItem() {
    setCloset((prevCloset) => {
      if (chosen_class === "Top") {
        const x = {
          style: chosen_style,
          color: chosen_color,
          fit: chosen_fit
        };
        const y = [
          ...prevCloset.Top,
          x
        ];
        return {
          ...prevCloset,
          Top: y
        };
      } else if (chosen_class === "Bottom") {
        const x = {
          color: chosen_color,
          fit: chosen_fit
        };
        const y = [
          ...prevCloset.Bottom,
          x
        ];
        return {
          ...prevCloset,
          Bottom: y
        };
      } else {
        const x = {
          color: chosen_color,
          shoe: chosen_shoe,
          brand: chosen_brand
        };
        const y = [
          ...prevCloset.Shoes,
          x
        ];
        return {
          ...prevCloset,
          Shoes: y
        };
      }
    });
  }


  return (
    <div className="App">
      <h1>Fit Generator</h1>
      <RowInput description="Class"
        list_items={list_class}
        onChangeItem={
          (e) => setClass(e.target.value)
        } />
      <RowInput description="Style"
        list_items={list_style}
        onChangeItem={
          (e) => setStyle(e.target.value)
        } />
      <RowInput description="Color"
        list_items={list_color}
        onChangeItem={
          (e) => setColor(e.target.value)
        } />
      <RowInput description="Fit"
        list_items={list_fit}
        onChangeItem={
          (e) => setFit(e.target.value)
        } />
      <div className={show}>
        {/* <div>Shoe name:</div> */}
        <input placeholder = "Shoe Name" onInput={
          (e) => setShoe(e.target.value)
        }
          type="text" />
      </div>
      <div className={show}>
        {/* <div>Brand name:</div> */}
        <input placeholder = "Brand Name" onInput={
          (e) => setBrand(e.target.value)
        }
          type="text" />
      </div>

      <button onClick={addItem}>Add Item</button>
      <button onClick={
        () => console.log(closet)
      }>See Closet</button>
        
        
    </div>
  );
}

export default App;
