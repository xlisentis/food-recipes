import { useState } from 'react';

function Search({ callback = Function.prototype }) {
    const [value, setValue] = useState('');

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        callback(value);
    };

    return (
        <div className='row'>
            <div className='input-field col s12'>
                <input
                    type='search'
                    id='search-field'
                    placeholder='search'
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleKey}
                    value={value}
                />
                <button className='btn search-btn' onClick={handleSubmit}>
                    Search
                </button>
            </div>
        </div>
    );
}

export { Search };
