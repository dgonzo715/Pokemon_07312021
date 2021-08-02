import React from 'react';

function PageChanger ({gotoNextPage}) {
    return (
        <div>
            
            <button onClick={gotoNextPage}>Next</button>
             
        </div>
    )
}

export default PageChanger;