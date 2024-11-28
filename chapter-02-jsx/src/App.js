import React from 'react';

function App() {
    const name = "리액트";
    return <div>{name === '리액트' && <h1>리액트임.</h1>}</div>
}

export default App;