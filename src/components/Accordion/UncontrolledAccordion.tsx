import React, {useReducer} from "react";
import {reducer, TODDLE_COLLAPSED} from "./reducer";


type AccordionPropsType = {
    titleValue: string

}

export function UncontrolledAccordion(props: AccordionPropsType) {

    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return <div>
       {/* <AccordionTitle title={props.titleValue} onClick={() =>{setCollapsed(!collapsed)}}/>*/}
        <AccordionTitle title={props.titleValue} onClick={() =>{
            dispatch ({type: TODDLE_COLLAPSED})}}/>
        {!state && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() =>{props.onClick()}}>--{props.title}--</h3>
}

function AccordionBody() {
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    </div>
}

export default UncontrolledAccordion;