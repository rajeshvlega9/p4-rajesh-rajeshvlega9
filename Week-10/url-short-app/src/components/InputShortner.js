import React, { useState } from 'react';

const InputShortner = ({ setInputValue }) => {
    const [value, setValue] = useState("");
    
    const clickHandler = () => {
        setInputValue(value);
        setValue("");
    };

    return (
        <div className='InputContainer'>
            <h1>SHORTLY</h1>
            <h2> URL <span> Shortner</span></h2>
            <div>
                <input type="text"
                    placeholder="Provide the link to shorten it"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}/>
                <button onClick={clickHandler}>Shorten</button>
            </div>
    </div>  
  );
    
};

export default InputShortner;