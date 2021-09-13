import {useRef} from 'react'
import { Grocery } from '../types/Grocery';
const GroceryInput = ({addNewStaple}: {addNewStaple: (grocery: Grocery)=> void}) => {
    const groceryInput = useRef() as React.MutableRefObject<HTMLInputElement>
    const groceryType = useRef() as React.MutableRefObject<HTMLInputElement>
    const stapleInput = useRef() as React.MutableRefObject<HTMLSelectElement>

    const createStaple = (event:any):void =>{
        event.preventDefault();
        if(groceryInput.current.value!=="")
        addNewStaple({
            id: 0,
            name:groceryInput.current.value,
            type:groceryType.current.value,
            icon: null
        })}
    return <div className="row">
    <div className="col-md-6">
    <form action='#' onSubmit={createStaple}>
    <h3>Add New Staple</h3>
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
    </div>

}

export default GroceryInput;