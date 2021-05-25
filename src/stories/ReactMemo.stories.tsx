import React, {useState} from 'react';

export default {
    title: "React.memo demo",
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div> {props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>
        {props.users.map((u, i) => <div>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret); //позволяет не перерисовывать Users, если меняется NewMessagesCounter

export const Example1 = () => {
    console.log("Example1")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem"])
    const addUser = () => {
        const newUsers = [...users, 'Sveta'+new Date().getTime()]
        setUsers(users)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}> +</button>
        <button onClick={addUser}> add user</button>

        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}