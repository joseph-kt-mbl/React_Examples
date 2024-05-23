import React,{useState} from "react"
import './Foods.css'

function Foods() {
    const [foodsList , modifyFoodsList] = useState(['Banan','Pizza','Humberger'])
    const [foodInput, setFoodInput] = useState('');
    
    const handleAddFood = () =>{
        // const FoodInput = document.getElementById('food-input');

        modifyFoodsList(
            foods => [...foods,foodInput]
        )
        setFoodInput('')
    }
    const handleRemoveFood = (I) =>{
        const newList  = foodsList.filter((_,index)=> I!==index)
        modifyFoodsList(foods => newList);
    }
    const HandleFoodInput = (e) =>{
        setFoodInput(foodInputPrev => e.target.value)
    }
    return(
        <div>
            <h1>List Of Food</h1>
            <ul className=".ul">
                 {foodsList.length > 0 && foodsList.map((food,index) =>{
                        return(
                            <li className="item" key={index} onClick={ () => handleRemoveFood(index)}>{food}</li>
                        )
                    })
                 }
            </ul>
            <input type="text" id="food-input" onChange={HandleFoodInput} value={foodInput}/>
            <button onClick={handleAddFood}>Add</button>
        </div>
    )
}

export default Foods