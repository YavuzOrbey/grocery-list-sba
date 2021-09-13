import { Grocery } from "../types/Grocery";
import GroceryItem from "./GroceryItem";

const GroceryList = ({groceries}:{groceries:Grocery[]}) => {
        return <>{groceries.map((grocery:Grocery)=><GroceryItem grocery={grocery}/>)}</>

}

export default GroceryList;