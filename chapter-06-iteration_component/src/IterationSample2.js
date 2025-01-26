import React, {useState} from 'react';

const IterationSample2 = () => {
    const [names, setNames] = useState([
        {id : 1, text : "이승우"},
        {id : 2, text : "김가원"},
        {id : 3, text : "한민제"},
        {id : 4, text : "박상현"}
    ]);

    const [inputText, setInputText] = useState("");
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value);

    const onClick = () => {
        const nextNames = names.concat({
            id : nextId,
            text : inputText,
        });
        setNextId(nextId + 1);  // nextId 값에 1을 더해줌
        setNames(nextNames);          // names 값을 업데이트
        setInputText("");       // inputText 값을 비워주기
    }

    const nameList = names.map(name => <li key={name.id}>{name.text}</li>);

    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    );
};

export default IterationSample2;
