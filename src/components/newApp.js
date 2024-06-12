import React, { useState } from "react";
import './newApp.css';

const Handler = () => {
    const [selectedColor, setSelectedColor] = useState('');

    const handleColorChange = (color) => {
        console.log(color);
        setSelectedColor(color);
    }

    const handleBoxChange = (boxId) => {
        document.getElementById(boxId).style.backgroundColor = selectedColor;
    }

    return (<div className="app">
        <h2>'Select the gradient and then the Box to change the color'</h2>
        <div className="buttons">
             <button className="btn blue" data-testid="blue" onClick={() => handleColorChange('blue')}>Blue</button>
            <button className="btn orange" data-testid="orange" onClick={() => handleColorChange('orange')}>Orange</button>
            <button className="btn green" data-testid="green" onClick={() => handleColorChange('green')}>Green</button>
        </div>
        <div className="boxes">
            <div className="box" id="box1" onClick={() => handleBoxChange('box1')}>Selection</div>
            <div className="box" id="box2" onClick={() => handleBoxChange('box2')}>Selection</div>
            <div className="box" id="box3" onClick={() => handleBoxChange('box3')}>Selection</div>
        </div>
    </div>)
}

export default Handler;