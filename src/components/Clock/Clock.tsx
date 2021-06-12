import {useEffect} from "react"
import {useState} from "react"
import s from "./Clock.module.css"


type PropsType = {}

const get2digitString = (num: number) => num < 10 ? "0" + num : num

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState<boolean>(true)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId) //зачищаем, когда компонент умирает (при переходе на другой компонент)
        }
    }, [])

    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    }
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    }
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    }

    let onChangeMode = () => {
        setMode(!mode)
    }


    return (
        <>
            <button onClick={onChangeMode} className={s.btn}>{mode? "Digital clock" : "Analog Clock"}</button>
{}
            {mode ?
                <div className={s.digitalClock}>
                    <span>{get2digitString(date.getHours())}</span>
                    :
                    <span>{get2digitString(date.getMinutes())}</span>
                    :
                    <span>{get2digitString(date.getSeconds())}</span>
                </div>
                :
                <div className={s.analogClock}>
                    <div className={s.secondsHand} style={secondsStyle}/>
                    <div className={s.minutesHand} style={minutesStyle}/>
                    <div className={s.hoursHand} style={hoursStyle}/>
                </div>
            }
        </>

    )
}