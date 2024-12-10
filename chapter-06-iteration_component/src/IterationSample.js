import React from 'react';

const IterationSample = () => {
    const names = ['김진교', '김가원', '허준', '김영웅', '상무기']
    const nameList = names.map(name => <li>{name}</li>)
    return (
        <ul>{nameList}</ul>
    );
};

export default IterationSample;