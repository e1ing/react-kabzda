import React, {ChangeEvent, ChangeEventHandler, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Story, Meta} from '@storybook/react';

export default {
    title: 'input',
    //component: OnOff,
};

export const UncontrolledInput = () => <input/>;

export const TrackedUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }
    return <><input onChange={onChange}/> -{value} </>
}

export const GetValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <><input ref={inputRef}/>
        <button onClick={save}> save</button>
        - actual value: {value}</>;

}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("");
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type="checkbox" checked={parentValue} onChange={onChange}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string|undefined>(undefined);
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
       setParentValue(e.currentTarget.value)
    }
    return <select value = {parentValue}>
        <option value={"1"}> Kiev </option>
        <option value={"2"}> Minsk </option>
        <option value={"3"}> Simferopol </option>
    </select>
}


export const ControlledInputWithFixedValue = () => <input value={"it-incubator"}/>;