import react,{useState} from 'react'
import styles from './MyComponent.module.css'

function MyComponent(){
    const [userName,setUserName] = useState('')

    const hnadleUserInput = (e) =>{
        setUserName(e.target.value);
    }

    return(
        <div className={styles.userfield}>
            <input type="text" onChange={hnadleUserInput} />
            <span> =&gt; userName </span>
            {/* <textarea name="txt" id="txtVal" placeholder='your typing here'> */}
                <p>{userName}</p> 
            {/* </textarea> */}
            
        </div>
    )
}

export default MyComponent