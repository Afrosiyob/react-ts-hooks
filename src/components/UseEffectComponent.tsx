import React, { useEffect, useState } from 'react'

const UseEffectComponent = () => {

    const [val, setVal] = useState<number>(1)

    useEffect(() => {
        
        const timer = window.setInterval(()=>{
            setVal(prevVal => prevVal+1)
        },1000)

        return () => window.clearInterval(timer)

    },[])

    return (
        <div>
            this is use effect component {val}
        </div>
    )
}

export default UseEffectComponent
