import React, {useState} from "react";


type RatingType = 1 | 2 | 3 | 4 | 5
type RatingPropsType = {
}

export function UncontrolledRating(props: RatingPropsType) {
    let [value, setValue] = useState(0)

    return (
        <div>
            <Star value={1} selected={value > 0} setValue={setValue}/>
            <Star value={2} selected={value > 1} setValue={setValue}/>
            <Star value={3} selected={value > 2} setValue={setValue}/>
            <Star value={4} selected={value > 3} setValue={setValue}/>
            <Star value={5} selected={value > 4} setValue={setValue}/>
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
