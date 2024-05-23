import reac,{useState,useEffect,useRef} from 'react'
import styles from './ToDoList.module.css'
import Up from './../assets/arrows.svg'
import Down from './../assets/down.svg'


function ToDiList(){
    // Create a ref object
    const inputRef = useRef(null);

    useEffect(() => {
        // Automatically focus the input when the component is mounted
        inputRef.current.focus();
    }, []); // Empty dependency array means this effect runs only once after the initial render


    const [tasks,setTasks] = useState(['Reading 10 pages of the book']);
    const [inputTask,setInputTask] = useState('');

    const handleInputChange = (e) => {
        setInputTask(preValue => e.target.value)
    }
    const handleAddTask = () => {
        setTasks(T => [...T,inputTask])
        setInputTask('')
    }
    const handleRemoveTask = (i) =>{
        setTasks( T => T.filter((_,index) => i!==index))
    }
    const DownTask = (i) => {
        if (i === tasks.length - 1) {
            return; 
        }
    
        // Create a new array from the current tasks
        const updatedTasks = [...tasks];
    
        // Swap the current task with the next one
        const temp = updatedTasks[i];
        updatedTasks[i] = updatedTasks[i + 1];
        updatedTasks[i + 1] = temp;
    
        // Update the state with the new array of tasks
        setTasks(T => updatedTasks);
    }

    const UpTask = (i) => {
        if(i === 0){
            return;
        }
        // Create a new array from the current tasks
        const updatedTasks = [...tasks];
    
        // Swap the current task with the prev one
        const temp = updatedTasks[i];
        updatedTasks[i] = updatedTasks[i - 1];
        updatedTasks[i - 1] = temp;
    
        // Update the state with the new array of tasks
        setTasks(T => updatedTasks);
    }
    return(
        <div>
            <h1>ToDoList</h1>
            <div className={styles.addTask}>
                <input ref={inputRef} type="text" name="" id="" 
                onChange={handleInputChange} placeholder='Add Task ...' value={inputTask}/>
                <button className={styles.button} onClick={handleAddTask}>Add</button>
            </div>
            <ul className={styles.tasks}>
                <h3>Your Tasks :</h3>
                {tasks && tasks.map((task,index) =>{
                    return(
                        <li className={styles.item} key={index}>
                            
                             <p>{addSpaceIn(task.slice(0,100),30)}</p>

                             <div className={styles.itemControls}>
                                <button className={styles.button} onClick={() => UpTask(index)}>
                                    <img src={Up} alt="Up"/>
                                </button>
                                <button className={styles.button} onClick={() => DownTask(index)}>
                                    <img src={Down} alt="Down"/>
                                </button>
                                <button className={[styles.delete , styles.button].join(' ')} onClick={ () => handleRemoveTask(index)}>Delete</button>
                             </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

const addSpaceIn = (str, max) => str.match(new RegExp(`.{1,${max}}`, 'g')).join(' ');

export default ToDiList