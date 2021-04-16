import { useState } from 'react'

const Exercise = ({good= 'great', bad= 'not great'}) => {

    const [num, setNum] = useState(1);

const addNumber = () => setNum (num + 1);


    return(
        <div>
            <h1>{good}</h1>,
            <h1>{bad}</h1>
           <button onClick={() => alert ('congrats you clicked it')}>Click Here</button>
           <button onDoubleClick = {addNumber}>Use-State</button>
           <h1>{num}</h1>
        </div>
    )
}

export default Exercise;
