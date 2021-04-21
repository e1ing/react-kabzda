import React, {useState} from "react";

type RatingPropsType = {

}

export function Rating(props: RatingPropsType) {
let[value, setValue] = useState(4)

    return (
        <div>
            <Star selected={value>1} setValue={setValue}/>
            <Star selected={value>2} setValue={setValue}/>
            <Star selected={value>3} setValue={setValue}/>
            <Star selected={value>4} setValue={setValue}/>
            <Star selected={value>5} setValue={setValue}/>
        </div>
    );
}


type StarPropsType = {
    selected: boolean
    setValue: (value: number) =>void
}

function Star(props: StarPropsType) {
   return <span onClick={() => {props.setValue(5)}}>  {props.selected ? <b>star</b> : "star"} </span>
    }
