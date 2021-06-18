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

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)
    console.log("Component rendered")

    useEffect(() => {
       console.log('Effect occurred: '+ counter)

        return () => {
           console.log('Reset Effect') //перед смертью компонента выбрасывает это - сбрасывается эффект или при повторном вызове эффекта
        }
    }, [counter])

    const increase = () => {setCounter(counter+1)}
    return <>
        Hello, counter: {counter} <button onClick={() => {setCounter(counter+1)}}>+</button>
    </>
}


export const KeysTrackerExample = () => {
    const [text, setText] = useState("")
    console.log("Component rendered with" + text)

    useEffect(() => {
         const handler = (e: KeyboardEvent) => {
             console.log(e.key)
             setText(text+e.key)
         };
        window.addEventListener('keypress', handler)
        })
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    return <>
        Type text: {text}
    </>
}


export const SetTimeoutExample = () => {
    const [text, setText] = useState("")
    console.log("Component rendered with" + text)

    useEffect(() => {
        const interaslId = setTimeout(()=>{
            console.log("Timeout expired")
            setText('3 seconds passed')
        }, 3000)
    return () => {
        clearTimeout(interaslId)
    }
}, [text])

return <>
    Type text: {text}
</>
}
