import React, {useEffect, useState} from 'react';

export default {
    title: "useEffect demo",
}


export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    console.log("SimpleExample")


    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString();
        //api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementId
        //document.title = "User"
    });

    useEffect(() => {
        console.log("useEffect only first render (componentDidMount)")
        document.title = counter.toString();
    }, []);

    useEffect(() => {
        console.log("useEffect first render and every counter change")
        document.title = counter.toString();
    }, [counter])

    return <>
        Hello, {counter}
        <button onClick={() => setFake((state: number) => fake + 1)}> +</button>
        <button onClick={() => setCounter((state: number) => counter + 1)}> +</button>
    </>
}

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log("SetTimeoutExample")

   /* useEffect(() => {
   setTimeout(()=>{
       document.title = counter.toString();
       },1000);
    }, [counter])*/

    useEffect(() => {
        setInterval(()=>{
            console.log('tick'+counter)
            setCounter((state) => state+1);
        },1000);
    }, [])

    return <>
        Hello, counter: {counter}- fake:{fake}
        {/*<button onClick={() => setFake((state: number) => fake + 1)}> +</button>
        <button onClick={() => setCounter((state: number) => counter + 1)}> +</button>*/}
    </>
}