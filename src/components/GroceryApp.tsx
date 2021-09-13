import GroceryInput from '../components/GroceryInput';
import GroceryList from '../components/GroceryList';
import { Grocery } from '../types/Grocery';
import {useState} from 'react'
import {
    BrowserRouter as Router,
    Switch, Route, Link
  } from "react-router-dom"
const GroceryApp = () => {

    const staples:Grocery[] = [
        {id: 0, name: "chicken", icon: null}, 
        {id: 1, name: "beef", icon: null},
        {id: 2, name: "milk", icon: null},
        {id: 3, name: "eggs", icon: null},
        {id: 4, name: "apples", icon: null},
    ];
    const [currentGroceryId, setCurrentGroceryId] = useState(staples.length)
    const [groceries, setGroceries] = useState([] as Grocery[])
    const addGrocery = (grocery: Grocery) => {
        const newGrocery = {...grocery, id: currentGroceryId}
        setCurrentGroceryId(currentGroceryId+1)
        const newGroceries = [...groceries, newGrocery]
        setGroceries(newGroceries)
    }


    return <div className="container">
        <h1>Grocery List</h1>
        
        <GroceryInput addGrocery={addGrocery} staples={staples}/><GroceryList groceries={groceries} /></div>

}

export default GroceryApp;