import { useState } from "react";

const GuestList: React.FC = () => {
    const [List, setList] = useState<string[]>([]);
    const [name, setName] = useState('');

    const clickHandler = () =>{
        setList([...List, name])
        setName('');
    }

    return <div>
        <h3>Guest List:</h3>
        <ul>
            {
                List.map((alist, index)=>{
                    return <li key={index}>{alist}</li>
                })
            }
        </ul>
        <input value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={clickHandler}>Add Guest</button>
    </div>
}

export default GuestList;