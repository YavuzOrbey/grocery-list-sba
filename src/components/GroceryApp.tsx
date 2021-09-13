import GroceryInput from '../components/GroceryInput';
import GroceryList from '../components/GroceryList';
import AddStaple from '../components/AddStaple';
import { Grocery } from '../types/Grocery';
import {useState} from 'react'
import {
    BrowserRouter as Router,
    Switch, Route, Link
  } from "react-router-dom"
const GroceryApp = () => {  

    const startingStaples:Grocery[] = [
        {id: 0, name: "chicken", type: "Meat", icon: null}, 
        {id: 1, name: "beef", type: "Meat", icon: null},
        {id: 2, name: "milk", type: "Dairy", icon: null},
        {id: 3, name: "eggs", icon: null},
        {id: 4, name: "apples", type: "Fruit", icon: null},
    ];
    const [currentGroceryId, setCurrentGroceryId] = useState(startingStaples.length)
    const [groceries, setGroceries] = useState([] as Grocery[])
    const [staples, setStaples] = useState(startingStaples as Grocery[])
    const addGrocery = (grocery: Grocery) => {
        const newGrocery = {...grocery, id: currentGroceryId}
        setCurrentGroceryId(currentGroceryId+1)
        const newGroceries = [...groceries, newGrocery]
        setGroceries(newGroceries)
    }
    const addNewStaple = (grocery: Grocery) => {
        const newGrocery = {...grocery, id: currentGroceryId }
        setCurrentGroceryId(currentGroceryId+1)
        setStaples([...staples, newGrocery])
    }

    return <div className="container">
    <Router>
        <nav className="navbar navbar-expand-lg ">
        <Link to="/home" className="nav-link">Grocery List</Link>
        <Link to="/add-staple" className="nav-link">Add Staple</Link>
        </nav>
        <Switch>
          <Route path="/home">
            <h1>Grocery List</h1>
        
            <GroceryInput addGrocery={addGrocery} staples={staples}/>
            <GroceryList groceries={groceries} />
          </Route>
          <Route exact path="/add-staple">
            <AddStaple addNewStaple={addNewStaple}/>
          </Route>
        </Switch>
      </Router>
    </div>


}

export default GroceryApp;