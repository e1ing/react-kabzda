import React, {useState} from 'react';
import {UncontrolledRating, RatingType} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";

export default{
    title: 'UncontrolledRating stories',
    component: UncontrolledRating,
};

const callback = action ("rating changed insife component")

export const EmptyRating = () => <UncontrolledRating defaultValue ={0} />
export const Rating1 = () => <UncontrolledRating defaultValue ={1} />
export const Rating2 = () => <UncontrolledRating defaultValue ={2} />
export const Rating3 = () => <UncontrolledRating defaultValue ={3} />
export const Rating4 = () => <UncontrolledRating defaultValue ={4} />
export const Rating5 = () => <UncontrolledRating defaultValue ={5} />
export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingType>(3);
    return <UncontrolledRating defaultValue ={rating}/>
};