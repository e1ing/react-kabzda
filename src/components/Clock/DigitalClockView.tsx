import React from 'react';
import {ClockViewType} from "./Clock";

export const get2digitString = (num: number) => num < 10 ? "0" + num : num

export const DigitalClockView: React.FC<ClockViewType> = ({date}) => {
    return <>
        <span>{get2digitString(date.getHours())}</span>
        :
        <span>{get2digitString(date.getMinutes())}</span>
        :
        <span>{get2digitString(date.getSeconds())}</span>
    </>
}