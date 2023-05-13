import { useMemo, useState } from "react";

function PureCountC(){
    const [count,setCount]=useState(0);
    const Mcount=useMemo(()=>count,[count])

    const click=()=>{
        setCount(count+1);
    }

    return (
        <div>
            <p>Click⬇⬇</p>
            <button onClick={click}>
                {Mcount}
            </button>
        </div>
    )
}

export default PureCountC;