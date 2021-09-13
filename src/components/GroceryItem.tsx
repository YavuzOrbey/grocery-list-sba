import { Grocery } from "../types/Grocery"
import '../style/GroceryItem.css'
const GroceryItem = ({grocery}:{grocery:Grocery}) => {
    return <div className="grocery-item">
        
        <span>{grocery.name} {grocery.type ? `: ${grocery.type}`: null}</span>
    </div>
}

export default GroceryItem;