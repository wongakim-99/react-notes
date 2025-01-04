import React, {useState} from 'react';
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
    const [todos, setTodos] = useState([
        {
            id : 1,
            text : "리액트의 기초 알아보기",
            checked : true,
        },
        {
            id : 2,
            text : "스프링 부트 공부",
            checked : false,
        },
        {
            id : 3,
            text : "스프링 부트 bean 에 대해서 공부",
            checked : false,
        }
    ])

    return (
        <TodoTemplate>
            <TodoInsert/>
            <TodoList todos={todos}/>
        </TodoTemplate>
    );
};

export default App;