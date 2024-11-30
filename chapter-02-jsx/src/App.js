import React from 'react';
import './App.css';

function App() {
    const name = '리액트';
    const style = {
        backgroundColor: '#fff',
        color: 'aqua',
        fontSize: '48px',
        fontWeight: 'bold',
        padding: 16,
    }
    return (
        <div style={style}>
            {name}
        </div>
    );
}

export default App;