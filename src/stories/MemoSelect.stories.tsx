import React, {ChangeEvent, useState} from 'react';

export default {
    title: 'useMemo select stories',
};

type CityInfoType = {
    city: string
    country: string
    population: number
}

export const UseMemoSelect = (props: {cities: Array<CityInfoType>}) => {
    const [value, setValue] = useState('8')


    const changeHandler = (value: string) => {
        setValue(value)
    }

    return <>

    </>

}

/*Тут по 17 видео пыталась накрутить 3 селекта с разными фильтрами:
* 1) буква М в городе
* 2) одна страна  (ввести id страны и фильтровать по id)
* 3) численность > 10 млн
* 4) плюс накрутить счётчик
* 5) использовать useMemo и React.memo как в UseMemoUseCallback.stories.tsx
* */
