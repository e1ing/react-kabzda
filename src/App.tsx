import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncomtrolledAccordion";


function App(props: any) {
    return (
        <div className={"App"}>
            <OnOff on/>
            <OnOff on/>
            <OnOff on/>

            <UncontrolledAccordion titleValue={'Menu'} />
            <Accordion titleValue={'Users'} collapsed={false} />
            <Rating />
           {/* <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            <Rating value={2}/>*/}

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
