import React from "react";

type RetingPropsType = {
    type: string
}

export function Rating(props: RatingPropsType) {

        return (
            <div>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );
    }


    type StarPropsType = {
        selected: boolean
    }

    function Star(props: StarPropsType) {
        if (props.selected === true) {
            return <div><b>star</b></div>
        } else {
            return <div>star</div>

        }
    }
