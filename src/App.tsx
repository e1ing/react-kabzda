import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {Select} from "./components/Select/Select";

function App(props: any) {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);


    let onChange = () => setAccordionCollapsed(!accordionCollapsed)
    let onClick = () => setAccordionCollapsed(!accordionCollapsed)
    return (
        <div className={"App"}>
            {/*<OnOff on/>*/}
            {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<UncontrolledRating onChange={onChange}/>*/}
            <Accordion collapsed={accordionCollapsed}
                       onChange={onChange}
                       titleValue={"Menu"}
                       items={[{title: "Dimych", value: 1},
                           {title: "Artem", value: 2},
                           {title: "Viktor", value: 3}]}
                       onClick = {onClick}
            />
            {/*<Select/>*/}
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
