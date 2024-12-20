import React, { useState, useMemo } from "react";

const getAverage = numbers => {  // 주어진 숫자 배열의 평균을 계산하는 함수
    console.log("평균값 계산 중");
    if (numbers.length === 0) return 0;  // 배열이 비어있다면 (length === 0) 평균값은 0으로 반환
    const sum = numbers.reduce((a, b) => a + b);  // 배열에 값이 있다면, reduce를 사용하여 배열의 합을 계산한 뒤, 길이로 나누어 평균 계산
    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] = useState([]);  // 입력된 숫자들의 배열 관리
    const [number, setNumber] = useState('');  // 현재 입력된 필드의 값(문자열)관리. 초기값은 빈 문자열

    const onChange = e => {
        setNumber(e.target.value);
    };
    const onInsert = e => {  // 버튼을 클릭하면 호출됨
        const nextList = list.concat(parseInt(number));  // 현재 입력된 숫자(numbers)를 list 배열에 추가
        setList(nextList);  // 새로운 배열(nextList)을 생성하여 상태를 업데이트
        setNumber('');
    };

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값 : </b>{avg}
            </div>
        </div>
    )
}

export default Average;