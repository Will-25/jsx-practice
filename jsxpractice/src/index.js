import React from 'react';
import ReactDOM from 'react-dom';


function getButton() {
    return 'Click on Me!';
}

const App = () => {
    const buttonText = 'Click Me!';

    return (
        <div>
            <label className="label" for="name">Enter Name:</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>{getButton()}</button>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));