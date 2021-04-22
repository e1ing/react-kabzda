import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncomtrolledAccordion";

function App(props: any) {

    let  [ratingValue, setRatingValue] = useState<RatingValueType>(4);

    return (
        <div className={"App"}>
            {/*<OnOff on/>*/}
            {/*<OnOff on/>*/}
            {/*<OnOff on/>*/}
            {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}
            <Rating value = {ratingValue} onCkick={setRatingValue}/>
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
