import React from 'react';
import {Clock} from "./Clock";


export default {
    title: 'Clock stories',
    component: Clock,
};

export const AnalogExample = () =>{
    return <Clock mode={'analog'}/>
}
export const ADigitalExample = () =>{
    return <Clock mode={'digital'}/>
}



