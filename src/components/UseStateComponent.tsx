import React, { useState } from 'react'

const UseStateComponent = () => {



    const [ arr, setArr ] = useState<number[]>([]) //never[]

    const [name, setName]  = useState<string|null>(null)

    return (
        <div>
           <div>
           <h1> UseState </h1>
            <button 
                onClick={()=>setArr([
                    ...arr,
                    arr.length + 1
                ])}
            > add to array </button>
            {JSON.stringify(arr)}
           </div>
           <div>
               <button onClick={()=>setName("Jack")}>
                   set Name
               </button>
               {JSON.stringify(name)}
           </div>
        </div>
    )
}

export default UseStateComponent
