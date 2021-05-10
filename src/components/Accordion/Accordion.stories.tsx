import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion stories',
    component: Accordion
};

const callback = action("Accordion mode change event fired")
const onClickCallback = action("Some item was clicked")

export const CollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} items={[]}
                                              onClick={onClickCallback}/>
export const UncollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback}
                                                items={[
                                                    {title: "Dimych", value: 1},
                                                    {title: "Artem", value: 2},
                                                    {title: "Viktor", value: 3}
                                                ]}
                                                onClick={onClickCallback}/>

export const ModeChanging = () => {

    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={"Users"} collapsed={value} onChange={() => setValue(!value)}
                      items={[
                          {title: "Dimych", value: 1},
                          {title: "Artem", value: 2},
                          {title: "Viktor", value: 3}
                      ]}
                      onClick={(id) => {alert(`user with ID ${id} should be happy`)} }/>
};