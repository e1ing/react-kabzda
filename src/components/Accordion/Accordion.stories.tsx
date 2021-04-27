import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Button} from '@storybook/react/demo';
import {OnOff} from "./OnOff";
import {Accordion} from "./Accordion";

export default{
    title: 'Accordion stories',
    component: Accordion,
};

const callback = action ("Accordion mode change event fired")

export const collapsedMode = () => <Accordion titleValue ={"Menu"} collapsed={true} onChange={callback}/>
export const uncollapsedMode = () => <Accordion titleValue ={"Users"} collapsed={false} onChange={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState (true);
    return <OnOff on ={value} onChange={() => (!setValue)}/>
};