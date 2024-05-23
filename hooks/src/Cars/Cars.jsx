import React,{useState} from "react"

function Cars() {
    
    const [yearInput, setYearInput] = useState(new Date().getFullYear());
    const [makeInput, setMakeInput] = useState('BMW');
    const [modelInput, setModelInput] = useState('X6');

    const [carsArray , modifyCarsList] = useState([{
        year:yearInput,
        make:makeInput,
        model:modelInput
    }])

    const handleAddCar = () =>{

        modifyCarsList(
            cars => [...cars,{
                year:yearInput || new Date().getFullYear(),
                make:makeInput || 'make',
                model:modelInput || 'mode'
            }]
        )
        setYearInput('')
        setMakeInput('')
        setModelInput('')

    }
    const handleRemoveCar = (I) =>{
        const newList  = carsArray.filter((_,index)=> I!==index)
        modifyCarsList(cars => newList);
    }
    const HandleYearInput = (e) =>{
        setYearInput(yearInputPrev => e.target.value)
    }
    const HandleMakeInput = (e) =>{
        setMakeInput(mkaeInputPrev => e.target.value)
    }
    const HandleModelInput = (e) =>{
        setModelInput(modelInputPrev => e.target.value)
    }

    return(
        <div>
            <h1>List Of Cars</h1>
            <ul>
                 {carsArray.length > 0 && carsArray.map((car,index) =>{
                        return(
                            <li key={index} onClick={ () => handleRemoveCar(index)}>
                                <span>{car.year}</span>
                                 - 
                                <span>{car.make}</span>
                                 - 
                                <span>{car.model}</span>
                                 
                            </li>
                        )
                    })
                 }
            </ul>
            <input type="Number" id="year-input" onChange={HandleYearInput} value={yearInput} max={new Date().getFullYear()} min={new Date().getFullYear() - 100}/>
            <input type="text" id="make-input" onChange={HandleMakeInput} value={makeInput}/>
            <input type="text" id="model-input" onChange={HandleModelInput} value={modelInput}/>

            <button onClick={handleAddCar}>Add</button>
        </div>
    )
}

export default Cars