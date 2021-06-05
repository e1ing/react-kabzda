import React, {useMemo, useState} from 'react';

export default {
    title: "useState demo",
}

function generateData(){
    console.log("generateData")
    return 354545435;
}

export const Example1 = () => {
    console.log("Example1")

    const initValue = useMemo(generateData,[])

    const [counter, setCounter] = useState(generateData)

    return <>
        <button onClick={() => setCounter( (state: number) => state+1)}> +</button>
        {counter}
    </>
}