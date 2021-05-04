import React, {useState} from "react";


type RatingType = 0 |1 | 2 | 3 | 4 | 5
type RatingPropsType = {
    defaultValue: RatingType
onChange: (value: RatingType) => void
}

export function UncontrolledRating() {
    let [value, setValue] = useState<RatingType>( 0)

    return (
        <div>
            <Star selected={value > 0} setValue={() => {setValue(1)}} value = {0}/>
            <Star selected={value > 1} setValue={() => {setValue(2)}}  value = {1}/>
            <Star selected={value > 2} setValue={() => {setValue(3)}}  value = {2}/>
            <Star selected={value > 3} setValue={() => {setValue(4)}}  value = {3}/>
            <Star selected={value > 4} setValue={() => {setValue(5)}}  value = {4} />
        </div>
    );
}


type StarPropsType = {
    setValue: (value: RatingType) => void
    selected: boolean
    value: RatingType
   }

function Star(props: StarPropsType) {
    return <span onClick={() => {
        props.setValue(props.value)
    }}>
       {props.selected ? <b>star</b> : "star "}
   </span>
}
