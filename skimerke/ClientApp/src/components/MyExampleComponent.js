import { useEffect, useState } from 'react';
import { fetchNumberOfRows, postRow } from '../api'

const MyExampleComponent = () => {
    const [numberOfRows, setCount] = useState(0);
    
    useEffect(() => {
        getNumberOfRows();
    });
    
    const addRowClickHandler = () => {
        const row = {
            name: `Example ${Date.now()}` ,
            description: 'Example description',
        };
        postRow(row).then(() => getNumberOfRows());
    };
    
    const getNumberOfRows = () => {
        fetchNumberOfRows().then(data => setCount(data.numberOfRows));
    }
    
    return (
        <div>
            <div>Numbers of exampleRows: {numberOfRows}</div>
            <div>
                <button onClick={addRowClickHandler}>Add row</button>
            </div>
        </div>
    );
};

export default MyExampleComponent;