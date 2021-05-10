import React, {ChangeEvent, useState} from 'react';

import {action} from '@storybook/addon-actions';
import {Select} from "./Select";

export default {
    title: 'Select stories',
    component: Select,
};
export const SelectWithValue = () => {
    const [value, setValue] = useState('3')


    const changeHandler = (value: string)=> {
        debugger
        setValue(value)
    }

    return <>
        <Select onChange={changeHandler}
                value={value}
                items={[
                    {value: "1", title: "Minsk"},
                    {value: "2", title: "Kiev"},
                    {value: "3", title: "Simferopol"}
                ]}/>
    </>
}


export const SelectWithoutValue = () => {
    const [value, setValue] = useState(null)

    return <>
        <Select onChange={setValue}
                items={[
                    {value: "1", title: "Minsk"},
                    {value: "2", title: "Kiev"},
                    {value: "3", title: "Simferopol"}
                ]}/>
    </>

}
