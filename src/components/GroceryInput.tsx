import { Grocery } from "../types/Grocery";
import {useRef} from 'react'
const GroceryInput = ({addGrocery, staples}: {addGrocery: (grocery: Grocery)=> void, staples: Grocery[]}) => {
    const groceryInput = useRef() as React.MutableRefObject<HTMLInputElement>
    const groceryType = useRef() as React.MutableRefObject<HTMLInputElement>
    const stapleInput = useRef() as React.MutableRefObject<HTMLSelectElement>

    const createGroceryItem = (event:any):void =>{
        event.preventDefault();
        if(groceryInput.current.value!=="")
        addGrocery({
            id: 0,
            name:groceryInput.current.value,
            type:groceryType.current.value,
            icon: null
        })}

    return <div className="row">
        <div className="col-md-6">
        <form action='#' onSubmit={createGroceryItem}>
        <h3>Add New Grocery Item</h3>
        <div className="mb-3">
            <label>Item</label>
            <input type="text" className="form-control" name="groceryInput" placeholder="Enter new item" ref={groceryInput}/>
        </div>
        <div className="mb-3">
            <label>Grocery Type</label>
            <input type="text" className="form-control" placeholder="Grocery Type"  ref={groceryType}/>
        </div>
        <button className="btn btn-outline-primary">Add</button>
        </form>
        </div>
        <div className="col-md-6">
        <label>Quick Add Staple Food</label>
        <select name="staples" ref={stapleInput}>
            {staples.map((item)=><option>{item.name}</option>)}
        </select>
        <button onClick={()=>{
            if(stapleInput.current.value!=="")
            addGrocery({
                id: 0,
                name:stapleInput.current.value,
                icon: null
            }) }}>Add</button>
        </div>
    </div>
}

export default GroceryInput;