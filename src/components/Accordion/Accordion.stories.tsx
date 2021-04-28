import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion stories',
    component: Accordion
};

const callback = action ("Accordion mode change event fired")

export const CollapsedMode = () => <Accordion titleValue ={"Menu"} collapsed={true} onChange={callback}/>
export const UncollapsedMode = () => <Accordion titleValue ={"Users"} collapsed={false} onChange={callback}/>

export const ModeChanging = () => {
<<<<<<< HEAD
    const [value, setValue] = useState <boolean>(true);
    return <Accordion titleValue ={"Users"} collapsed={value} onChange={() => (!value)}/>
=======
    const [value, setValue] = useState (true);
    return <Accordion titleValue ={"Users"} collapsed={value} onChange ={() => (!value)}/>
>>>>>>> 2c21f04e7019270e201adec9c0fcc1dd13d26693
};