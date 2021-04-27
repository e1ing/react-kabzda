import React from 'react';
import {action} from '@storybook/addon-actions';
import {Button} from '@storybook/react/demo';

export default{
    title: 'Button',
    component: Button,
};

export const Text = () =>
    <Button onClick = {action('clicked')}>
     Hello Button
     </Button>;

     export const Emoji =() =>{
         <Button onClick = {action('clicked')}>
             <span role = 'img' aaria-label = "so cool">
k
             </span>
         </Button>
     }
