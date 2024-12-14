import React, {useState} from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        {id : 1, text : "김영웅"},
        {id : 2, text : "김가원"},
        {id : 3, text : "김수민"},
        {id : 4, text : "허준"},
        {id : 5, text : "김승찬"}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(6);  // 새로운 항목을 추가할 때 사용할 id

    const onChange = e => setInputText(e.target.value);

    const onClick = () => {
        const nextNames = names.concat({
            id : nextId,
            text : inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');  // InputText 를 비운다.
    }

    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    };

    const nameList = names.map(name => (
        <li key = {name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    ));

    return (
        <>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    );
};

export default IterationSample;