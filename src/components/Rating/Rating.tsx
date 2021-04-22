import React, {useState} from "react";

export type RatingValueType = 0|1|2|3|4|5


type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    let [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0} onClick={props.onClick} value={1}/>
            <Star selected={value > 1} onClick={props.onClick} value={2}/>
            <Star selected={value > 2} onClick={props.onClick} value={3}/>
            <Star selected={value > 3} onClick={props.onClick} value={4}/>
            <Star selected={value > 4} onClick={props.onClick} value={5}/>
        </div>
    );
}


type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {
    return <span onClick={() => {
        props.onClick(props.value)
    }}>
       {props.selected ? <b>star</b> : "star "}
   </span>
}
