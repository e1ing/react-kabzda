import React, {useMemo, useState} from 'react'

export default {
    title: 'useMemo',
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)
    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA;
    }, [a]);


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("USERS SECRET")
    return <div>
        {props.users.map((u, i) => <div>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret); //позволяет не перерисовывать Users, если меняется NewMessagesCounter

export const HelpsToReactMemo = () => {
    console.log("HelpsToReactMemo")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem"]);

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf("a") > -1);
        return newArray;
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}> +</button>
        <button onClick={() => addUser()}> add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}


export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "CSS", "JS", "HTML"]);

    const newArray = useMemo(() => {
        const newArray = books.filter(book => book.toLowerCase().indexOf("a") > -1);
        return newArray;
    }, [books])

    const addBook = () => {
        const addBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(addBooks)
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}> +</button>
        {counter}
        <Book books={newArray} addBook={addBook}/>
    </>
}

type BookSecretPropsType = {
    books: Array<string>
    addBook: () => void
};

const BooksSecret = (props: BookSecretPropsType) => {
    console.log("USERS SECRET")
    return <div>
        <button onClick={() => props.addBook()}> add book</button>
        {props.books.map((book, i) => <div>{book}</div>)}</div>
}

const Book = React.memo(BooksSecret)

