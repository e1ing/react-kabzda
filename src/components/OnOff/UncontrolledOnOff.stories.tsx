import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default{
    title: 'UncontrolledOnOff stories',
    component: UncontrolledOnOff,
};

const callback = action ("on or off clicked")

export const OnMode = () => <UncontrolledOnOff defaultOn = {true} onClick={callback}/>
export const OffMode = () => <UncontrolledOnOff defaultOn = {false} onClick={callback}/>
export const BugMode = () => <div>Unsync when defaultValue already rendered</div>
export const DefaultInputValue = () => <input defaultValue = {"yo"}/>;